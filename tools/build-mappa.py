#!/usr/bin/env python3
"""
Genera la versione web della mappa a pallini partendo dal file di Illustrator.

    python3 tools/build-mappa.py

  sorgente (editabile in Illustrator) : assets/svg/mappadot.svg
  output   (usato dal sito)           : assets/svg/mappadot.web.svg

Cosa fa:
  • toglie prologo XML, <defs> e i colori scritti nel file
    (il grigio arriva dal gruppo base, l'azzurro dal CSS via .is-live);
  • fonde i pallini di ogni livello in UN SOLO <path>:
    ~11.800 nodi DOM diventano 5 → pagina molto più leggera su mobile.

Da rieseguire ogni volta che ri-esporti la mappa da Illustrator.

Per aggiungere una regione accendibile: in Illustrator crea un livello con il
nome che vuoi (es. "Oceania"), spostaci i pallini, ri-esporta, rilancia questo
script e aggiungi la voce corrispondente in js/mappa-regioni.js.
"""

import re
import sys
from pathlib import Path

RADIUS = 1.97  # raggio dei pallini (nel file sorgente rx=1.96, ry=1.97/1.98)

ROOT = Path(__file__).resolve().parent.parent
SORGENTE = ROOT / 'assets/svg/mappadot.svg'
OUTPUT = ROOT / 'assets/svg/mappadot.web.svg'

INTESTAZIONE = (
    '<svg id="map-svg" class="world__svg" xmlns="http://www.w3.org/2000/svg" '
    'viewBox="{viewbox}" preserveAspectRatio="xMidYMid meet" role="img" '
    'aria-label="Mappa del mondo a pallini: in azzurro le aree in cui è '
    'presente il Cottolengo">\n<g fill="#c9c9c9">\n'
)


def taglia(valore):
    """Coordinata a 1 decimale, senza zeri inutili."""
    return f'{valore:.1f}'.rstrip('0').rstrip('.')


def cerchio(x, y, r=RADIUS):
    """Un pallino come sotto-tracciato: due semiarchi che si richiudono."""
    return (f'M{taglia(x - r)} {taglia(y)}'
            f'a{r} {r} 0 1 0 {2 * r} 0'
            f'a{r} {r} 0 1 0 {-2 * r} 0')


def main():
    if not SORGENTE.exists():
        sys.exit(f'Sorgente non trovata: {SORGENTE}')

    src = SORGENTE.read_text(encoding='utf-8')

    viewbox_match = re.search(r'viewBox="([^"]+)"', src)
    if not viewbox_match:
        sys.exit('viewBox non trovata nel file sorgente.')

    livelli = re.findall(r'<g id="([^"]+)">(.*?)</g>', src, re.S)
    if not livelli:
        sys.exit('Nessun livello <g id="..."> trovato: controlla i livelli in Illustrator.')

    parti = [INTESTAZIONE.format(viewbox=viewbox_match.group(1))]
    for nome, corpo in livelli:
        pallini = re.findall(r'cx="([\d.]+)" cy="([\d.]+)"', corpo)
        traccia = ''.join(cerchio(float(x), float(y)) for x, y in pallini)
        parti.append(f'<path id="{nome}" d="{traccia}"/>\n')
        print(f'  {nome:12s} {len(pallini):6d} pallini → 1 path')
    parti.append('</g>\n</svg>\n')

    OUTPUT.write_text(''.join(parti), encoding='utf-8')
    print(f'\nScritto {OUTPUT.relative_to(ROOT)} ({OUTPUT.stat().st_size // 1024} KB, ~35 KB gzip)')


if __name__ == '__main__':
    main()
