# Vantage Capital — GitHub-ready site

## Hero Vimeo video
Edit `script.js`:
```js
const VIMEO_URL = "https://vimeo.com/YOUR_VIDEO_ID";
```
The hero media is the Vimeo player. There is no hero photo. Autoplay is muted and looping.

## Live Chat
JivoSite is loaded with:
```html
<script src="//code.jivosite.com/widget/TTgitJP3xU" async></script>
```
The header Live Chat link and floating circle call `jivo_api.open()` when the widget is ready.

## Image files
All 15 original comment images are included as:
`assets/comment-1.jpg` ... `assets/comment-15.jpg`

The logo is:
`assets/vantage-capital-logo.png`

The giveaway image slot is:
`assets/giveaway-9x16.jpg` — exact 9:16 ratio (900×1600)

The three featured image slots are:
`assets/proof-1.jpg`, `assets/proof-2.jpg`, `assets/proof-3.jpg` — exact 16:9 ratio (1600×900)

Replace any of those files with another image using the same filename and GitHub Pages will serve the replacement without HTML changes.

## Deployment
Commit the complete project, including the `assets/` folder, to the GitHub Pages repository.
