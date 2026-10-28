#!/usr/bin/env python3
"""Verifica statica del prototipo (solo libreria standard di Python).

Uso, dalla cartella del progetto:   python3 tools/verifica-sito.py

Header e footer sono copiati a mano in ogni pagina HTML (GitHub Pages serve
file statici: niente include). Questo script controlla che restino uguali e
che le pagine siano coerenti. In WordPress header e footer diventeranno
template unici (header.php / footer.php) e il controllo 1 non servirà più.

Controlli:
  1. header e footer identici in tutte le pagine (ignorando aria-current,
     che cambia giustamente da pagina a pagina);
  2. ID duplicati nella stessa pagina;
  3. aria-labelledby / aria-describedby / aria-controls / for / href="#..."
     che puntano a ID esistenti (gli ID creati dal JS sono elencati sotto);
  4. link interni verso pagine e frammenti esistenti;
  5. immagini, script e fogli di stile locali presenti su disco;
  6. un solo numero di versione ?v= per CSS e JS in tutto il sito;
  7. regola delle schede (decisione 116): titolo su UNA riga e testo entro
     5 righe in ogni larghezza. Misurato sulla scheda più stretta:
       - schede delle quattro aree: titolo max 23 caratteri, testo max 100;
       - schede strette (fila-schede da cinque): titolo max 19
         caratteri, testo max 100.
     Se un testo nuovo supera il limite si accorcia il testo, non il carattere.
     In più (decisione 120): nella stessa fila i testi hanno lunghezze simili,
     al massimo 12 caratteri di differenza tra il più corto e il più lungo.
  8. introduzioni di sezione e testo delle fasce d'invito (decisioni 122, 124): al massimo 140 caratteri, cioè
     due righe da 65ch su PC, e niente <br> per andare a capo a mano.
Esce con codice 1 se trova errori.
"""
import glob
import os
import re
import sys
from html.parser import HTMLParser

RADICE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(RADICE)

# ID che non sono nell'HTML ma vengono creati dagli script
ID_DA_JS = {
    'index.html': {'amt-custom-errore'} | {f'cpm-slide-{i}' for i in range(1, 10)}
                  | {f'quote-slide-{i}' for i in range(1, 10)},
}


class Pagina(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids, self.rif, self.link, self.risorse = [], [], [], []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get('id'):
            self.ids.append(a['id'])
        for nome in ('aria-labelledby', 'aria-describedby', 'aria-controls'):
            if a.get(nome):
                self.rif += [(nome, x) for x in a[nome].split()]
        if tag == 'label' and a.get('for'):
            self.rif.append(('for', a['for']))
        if tag == 'a' and a.get('href'):
            self.link.append(a['href'])
        if tag in ('img', 'script', 'source') and a.get('src'):
            self.risorse.append(a['src'])
        if tag == 'source' and a.get('srcset'):
            self.risorse += [x.strip().split(' ')[0] for x in a['srcset'].split(',')]
        if tag == 'img' and a.get('srcset'):
            self.risorse += [x.strip().split(' ')[0] for x in a['srcset'].split(',')]
        if tag == 'link' and a.get('href') and a.get('rel') in ('stylesheet', 'icon', 'preload'):
            self.risorse.append(a['href'])


def blocco(html, tag, pagina):
    """Header o footer normalizzato: senza commenti, spazi e differenze volute.

    Differenze ammesse da pagina a pagina:
      - aria-current="page" sulla voce della pagina corrente;
      - nella home i link interni sono scritti "#dona" invece di "index.html#dona"
        e il logo porta a "#top" ("torna all'inizio");
      - "Dona ora" (btn--header): dal 21/10/2026 porta sempre a dona.html (decisione 60).
    """
    m = re.search(rf'<{tag}\b[^>]*>.*?</{tag}>', html, re.S)
    if not m:
        return None
    t = re.sub(r'<!--.*?-->', '', m.group(0), flags=re.S)
    t = re.sub(r'\s+aria-current="page"', '', t)
    if pagina == 'index.html':
        t = re.sub(r'href="#(?!top")(?=[^"])', 'href="index.html#', t)
    t = re.sub(r'<a href="[^"]*" class="header__logo-link"[^>]*>', '<a class="header__logo-link">', t)
    t = re.sub(r'<a href="[^"]*" class="btn btn--header">', '<a class="btn btn--header">', t)
    t = re.sub(r'>\s+', '>', t)
    t = re.sub(r'\s+<', '<', t)
    return re.sub(r'\s+', ' ', t)


PAGINE_CHECKOUT = {'dona.html'}   # header e footer da pagina di pagamento


def locale(url):
    return not re.match(r'^(https?:|mailto:|tel:|data:|//|javascript:)', url)


def main():
    pagine = sorted(glob.glob('*.html'))
    analisi, sorgenti, errori = {}, {}, []
    for p in pagine:
        html = open(p, encoding='utf-8').read()
        sorgenti[p] = html
        a = Pagina()
        a.feed(html)
        analisi[p] = a

    # 1. header e footer (dona.html ha header e footer ridotti, decisione 66)
    for tag in ('header', 'footer'):
        modelli = {}
        for p in pagine:
            if p in PAGINE_CHECKOUT:
                continue
            modelli.setdefault(blocco(sorgenti[p], tag, p), []).append(p)
        if len(modelli) > 1:
            gruppi = sorted(modelli.values(), key=len, reverse=True)
            for g in gruppi[1:]:
                errori.append(f'{tag} diverso da quello di {gruppi[0][0]}: {", ".join(g)}')

    for p in pagine:
        a = analisi[p]
        ids = set(a.ids) | ID_DA_JS.get(p, set())
        # 2. ID duplicati
        for i in sorted({x for x in a.ids if a.ids.count(x) > 1}):
            errori.append(f'{p}: id duplicato "{i}"')
        # 3. riferimenti ARIA e label
        for nome, i in a.rif:
            if i not in ids:
                errori.append(f'{p}: {nome}="{i}" non trova l\'id')
        # 4. link interni e frammenti
        for h in a.link:
            if not locale(h):
                continue
            file, _, frammento = h.partition('#')
            file = file.split('?')[0]
            dest = file or p
            if not os.path.exists(dest):
                errori.append(f'{p}: link a pagina inesistente "{h}"')
                continue
            if frammento and dest.endswith('.html'):
                ids_dest = set(analisi[dest].ids) | ID_DA_JS.get(dest, set()) if dest in analisi else set()
                if frammento not in ids_dest and frammento != 'top':
                    errori.append(f'{p}: frammento inesistente "{h}"')
        # 5. risorse locali
        for r in a.risorse:
            if locale(r) and not os.path.exists(r.split('?')[0].split('#')[0]):
                errori.append(f'{p}: file mancante "{r}"')

    # 6. versione unica di CSS e JS
    versioni = {}
    for p in pagine:
        for v in re.findall(r'(?:css|js)/[^"?]+\?v=(\d+)', sorgenti[p]):
            versioni.setdefault(v, set()).add(p)
    if len(versioni) > 1:
        errori.append('versioni ?v= diverse: ' + '; '.join(f'v={v}: {len(ps)} pagine' for v, ps in versioni.items()))

    # 7. regola delle schede: lunghezza di titoli e testi
    import html as _html
    for p in pagine:
        for classi_fila, fila in re.findall(r'<(?:ul|ol|div) class="(fila-schede[^"]*)"(.*?)</(?:ul|ol|div)>\s*(?:</div>|<p|<a|$)', sorgenti[p], re.S):
            max_t = 23 if 'fila-schede--quattro' in classi_fila else 19
            lunghezze = []
            for corpo in re.findall(r'<article class="proj-card[^"]*"(.*?)</article>', fila, re.S):
                t = re.search(r'class="proj-card__title"[^>]*>(.*?)</h3>', corpo, re.S)
                c = re.search(r'class="proj-card__copy"[^>]*>(.*?)</p>', corpo, re.S)
                if not t:
                    continue
                titolo = _html.unescape(re.sub(r'<[^>]+>', '', t.group(1))).strip()
                testo = _html.unescape(re.sub(r'<[^>]+>', '', c.group(1))).strip() if c else ''
                if len(titolo) > max_t:
                    errori.append(f'{p}: titolo di scheda troppo lungo ({len(titolo)} > {max_t} caratteri): "{titolo}"')
                if len(testo) > 100:
                    errori.append(f'{p}: testo di scheda troppo lungo ({len(testo)} > 100 caratteri): "{testo[:40]}…"')
                lunghezze.append(len(testo))
            if lunghezze and max(lunghezze) - min(lunghezze) > 12:
                errori.append(f'{p}: testi della fila «{classi_fila}» troppo diversi: da {min(lunghezze)} a {max(lunghezze)} caratteri (max 12 di differenza)')

    # 8. introduzioni di sezione: lunghezza e niente a capo forzati
    for p in pagine:
        for m in re.finditer(r'<p class="(?:section-intro|fascia-invito__testo)"[^>]*>(.*?)</p>', sorgenti[p], re.S):
            testo = ' '.join(_html.unescape(re.sub(r'<[^>]+>', '', m.group(1))).split())
            if len(testo) > 140:
                errori.append(f'{p}: introduzione di sezione troppo lunga ({len(testo)} > 140 caratteri): "{testo[:40]}…"')
            if '<br' in m.group(1):
                errori.append(f'{p}: introduzione di sezione con a capo forzato (<br>): "{testo[:40]}…"')

    print(f'{len(pagine)} pagine controllate, versione ?v={",".join(versioni) or "-"}')
    if errori:
        print(f'{len(errori)} problemi:')
        for e in errori:
            print('  -', e)
        sys.exit(1)
    print('Nessun problema: header e footer coincidono, ID unici, riferimenti, link e file a posto.')


if __name__ == '__main__':
    main()
