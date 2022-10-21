# WhatsApp Language Toolbar

A simple language toolbar for whatsapp on the web.

## Install
- Clone code
- `npm run build`
- Add to chrome as an unpacked extension
  - Visit chrome://extensions
  - Enable Developer mode by ticking the checkbox in the upper-right corner
  - Click on the "Load unpacked extension..." button
  - Select the directory you cloned this repo into
- Open https://web.whatsapp.com - you should see a "Translate" button when mousing over messages now
- For now, it just opens 

## Develop
- `npm run watch`
- Change some code (dist will be updated automatically)
- in chrome://extensions, click the refresh button on the unpacked extension
- reload web.whatsapp.com

## Future ideas
- use translate API and show translations in page rather than just opening google translate
- if we can access audio content, add ability to transcribe and play slower