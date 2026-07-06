# Field Connect — Futbol i territori

Landing page de **Field Connect**, una xarxa itinerant de futbol base per als nens
dels pobles petits de Catalunya. El pilot arrenca a l'Alt Empordà (cluster de la
Vall de la Muga, municipi ancla: Agullana).

## Estructura

```
fieldconnect/
├── index.html          # Pàgina única (one-page)
├── css/
│   └── style.css       # Sistema de disseny i estils
├── js/
│   └── script.js       # Header sticky, reveal on scroll, scroll suau
├── images/
│   ├── logo-mark.svg        # Marca (favicon / versió sobre fons clar)
│   ├── logo-mark-light.svg  # Marca versió clara (topbar sobre fons fosc)
│   └── logo-icon-light.svg  # Icona gran del hero
└── README.md
```

## Ús

És un lloc estàtic: obre `index.html` al navegador o serveix la carpeta amb
qualsevol servidor estàtic:

```bash
cd fieldconnect
python3 -m http.server 8000
# → http://localhost:8000
```

## Per posar en producció

- **Formulari de contacte:** substitueix `YOUR_FORM_ID` a l'`action` del
  formulari (`index.html`) pel teu identificador de [Formspree](https://formspree.io)
  o l'endpoint que facis servir.
- **Xarxes socials:** afegeix els enllaços al bloc `.socials` de la secció de contacte.

## Disseny

- **Tipografia:** Fraunces (display), Manrope (text), Archivo Black (marca).
- **Paleta:** verd gespa (`#14532d`), terracota Empordà (`#cf6a3f`) i paper càlid (`#f5f0e4`).
