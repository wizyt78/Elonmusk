# Vantage Capital website

## Vimeo
Open `script.js` and set:
```js
const VIMEO_URL = "https://vimeo.com/YOUR_VIDEO_ID";
```
The hero video uses muted autoplay, inline playback and looping.

## Live Chat
The JivoSite widget is included in `index.html`:
```html
<script src="//code.jivosite.com/widget/TTgitJP3xU" async></script>
```
The header **Live Chat** and the floating circular **Live Chat** button call the Jivo API when it is loaded.

## Images
All 15 original comment image files are in `assets/`.
`assets/vantage-capital-logo.svg` is the site logo.
The `assets/supplied/` directory contains the four image files supplied with the latest upload, kept unchanged.

## Media areas
The giveaway and three highlight areas are dimensioned 9:16 and 16:9 respectively. Replace those media-slot elements with the genuine images you want published; the layout will preserve the intended aspect ratios.
