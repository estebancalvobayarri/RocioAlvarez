# Zapatosdecharolconlazo

Web de **Rocío Álvarez · Estilismo de armario**. «Hagamos que tu armario funcione».

Web estática de una página (HTML, CSS y un poco de JavaScript), sin dependencias ni compilación. Se puede publicar tal cual con GitHub Pages.

## Estructura

```
index.html              Página única: portada, cómo funciona, looks, sobre mí y reserva
css/styles.css          Estilos con los tokens del sistema de diseño
js/main.js              Menú en móvil
assets/logos/           Logotipo en vectores (marrón, café y blanco) y la Z
assets/images/          Fotos originales (armario y fichas de looks)
assets/images/web/      Las mismas fotos reducidas para la web (son las que se cargan)
```

## Dónde va cada archivo

| Archivo | Dónde se usa |
|---|---|
| `assets/logos/logotipo-marron.svg` | Cabecera y pie |
| `assets/logos/logotipo-cafe.svg` | Bloque arena de «Sobre mí» |
| `assets/logos/logotipo-blanco.svg` | Bloque café de reserva |
| `assets/logos/z-marron.svg` | Icono de la pestaña del navegador |
| `assets/images/web/armario.jpg` | Foto de portada |
| `assets/images/web/ficha-look-0X.jpg` | Las tres fichas de la sección Looks |

Los archivos de lazo (`lazo-circulo-*.svg`) están en el repositorio pero no se usan, como se decidió.

Para añadir o cambiar una foto, sube el original a `assets/images/` y una copia reducida (unos 900–1200 px de ancho) a `assets/images/web/`.

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
