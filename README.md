# Zapatosdecharolconlazo

Web de **Rocío Álvarez · Estilismo de armario**. «Hagamos que tu armario funcione».

Web estática de una página (HTML, CSS y un poco de JavaScript), sin dependencias ni compilación. Se puede publicar tal cual con GitHub Pages.

## Estructura

```
index.html              Página única: portada, cómo funciona, looks, sobre mí y reserva
css/styles.css          Estilos con los tokens del sistema de diseño
js/main.js              Menú en móvil
assets/logos/           Logotipo en vectores (solo nombre, con lema y con lazo) y el lazo
assets/images/          Fotos originales (armario y fichas de looks)
assets/images/web/      Las mismas fotos reducidas para la web (son las que se cargan)
```

## Dónde va cada archivo

| Archivo | Dónde se usa |
|---|---|
| `assets/logos/logotipo-lazo-lema-marron.svg` | Portada (logotipo con lazo y lema) |
| `assets/logos/logotipo-marron.svg` | Cabecera y pie |
| `assets/logos/logotipo-cafe.svg` | Bloque arena de «Sobre mí» |
| `assets/logos/logotipo-lema-lino.svg` | Bloque café de reserva (logotipo con lema, en lino #F6F4F0) |
| `assets/logos/lazo-circulo-marron.svg` | Icono de la pestaña del navegador |
| `assets/logos/lazo-lineas-marron.svg` | Separador sobre la frase «Vale, hoy me pongo esto» |
| `assets/iconos/icono-*.svg` | Iconos de los tres pasos de «Cómo funciona», a la derecha de cada número |
| `assets/images/web/armario.jpg` | Foto de portada |
| `assets/images/web/ficha-look-0X.jpg` | Las tres fichas de la sección Looks |

También están en el repositorio, sin usar de momento: `logotipo-lema-marron.svg`, `logotipo-blanco.svg`, `logotipo-lazo-lema-blanco.svg` y `lazo-circulo-blanco.svg`. El lazo es de uso ocasional: portada, momentos especiales, icono y sello.

Para añadir o cambiar una foto, sube el original a `assets/images/` y una copia reducida (unos 900–1200 px de ancho) a `assets/images/web/`.

## Identidad aplicada

- **Logotipo:** «Zapatosdecharolcon» en The Seasons + «lazo» en Six Hands Chalk, todo seguido, con el lema «HAGAMOS QUE TU ARMARIO FUNCIONE». En marrón sobre claro y en blanco sobre oscuro. El lazo, solo de forma ocasional.
- **Paleta:** piedra #EBE9E5 · lino #F6F4F0 · arena clara #E6DFD4 · arena #D8CEC0 · topo #B09D8B · marrón #675749 · café #3B2F27. El texto va en café o marrón; topo nunca es texto.
- **Tipografías:** Cormorant Garamond (títulos y firma) y Jost (textos; rótulos en mayúsculas con aire). The Seasons y Six Hands Chalk solo en el logotipo, desde el archivo.
- **Tono:** de tú, frases cortas, situaciones reales; sin diminutivos, anglicismos ni presión para comprar.

## Pendiente

- Email y dominio de la web.
- Confirmar el usuario de Instagram (`@zapatosdecharolconlazo`).

## Al cambiar estilos o JavaScript

Sube el número de versión en `index.html` (`css/styles.css?v=…` y `js/main.js?v=…`) para que los navegadores no usen una copia antigua guardada.

## Ver en local

Abre `index.html` en el navegador, o sirve la carpeta:

```
python3 -m http.server 8000
```

## Publicar con GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
