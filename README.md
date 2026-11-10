# Zapatosdecharolconlazo

Web de **Rocío Álvarez · Estilismo de armario**. «Hagamos que tu armario funcione».

Web estática de una página (HTML, CSS y un poco de JavaScript), sin dependencias ni compilación. Se puede publicar tal cual con GitHub Pages.

## Estructura

```
index.html          Página única: portada, cómo funciona, looks, sobre mí y reserva
css/styles.css      Estilos con los tokens del sistema de diseño
js/main.js          Menú en móvil y huecos para archivos pendientes
assets/logos/       Logotipo en vectores (ver más abajo)
assets/looks/       Fotos de los montajes de looks
```

## Archivos que faltan por subir

Los vectores del logotipo y las fotos de los looks están en el sistema de diseño y en el manual de identidad. Hay que copiarlos con estos nombres exactos; mientras no estén, la web muestra un hueco en su lugar (el logotipo nunca se reescribe con otra letra).

| Archivo | Qué es |
|---|---|
| `assets/logos/wordmark-marron.svg` | Logotipo principal, marrón #675749 (cabecera, looks, pie) |
| `assets/logos/wordmark-oscuro.svg` | Logotipo en café #3B2F27 (bloque arena de «Sobre mí») |
| `assets/logos/wordmark-blanco.svg` | Logotipo invertido #F4F1EC (bloque café de reserva) |
| `assets/logos/monograma-z-marron.svg` | La Z sola: icono de la pestaña del navegador |
| `assets/looks/look-01.jpg` | Look 01 |
| `assets/looks/look-02.jpg` | Look 02 |
| `assets/looks/look-03.jpg` | Look 03 (también en la portada) |

## Identidad aplicada

- **Nombre:** siempre todo seguido, «Zapatosdecharolconlazo». Sin lazos, zapatos ni iconos.
- **Paleta:** piedra #EBE9E5 · lino #F6F4F0 · arena clara #E6DFD4 · arena #D8CEC0 · topo #B09D8B · marrón #675749 · café #3B2F27. El texto va en café o marrón; topo nunca es texto.
- **Tipografías:** Cormorant Garamond (títulos y firma) y Jost (textos; rótulos en mayúsculas con aire). Six Hands Chalk solo en el logotipo, desde el archivo.
- **Tono:** de tú, frases cortas, situaciones reales; sin diminutivos, anglicismos ni presión para comprar.

## Pendiente

- Email y dominio de la web.
- Confirmar el usuario de Instagram (`@zapatosdecharolconlazo`).

## Ver en local

Abre `index.html` en el navegador, o sirve la carpeta:

```
python3 -m http.server 8000
```

## Publicar con GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
