# dom-modal [![Dependency Status](http://img.shields.io/david/ThankYouMotion/dom-modal.svg?style=flat-square)](https://david-dm.org/ThankYouMotion/dom-modal) [![devDependency Status](http://img.shields.io/david/dev/ThankYouMotion/dom-modal.svg?style=flat-square)](https://david-dm.org/ThankYouMotion/dom-modal#info=devDependencies)

Standalone modal for the browser.

- CSS centered
- No width or height needed. But it works if you provide them
- Overlay included
- Overlay click closes the modal
- Esc key closes the modal
- No external dependencies, all-in-one JavaScript file
- ~3.5K minified gzipped
- Easy to style
- Works on IE9+

![screenshot](screenshot.png)

```shell
npm install dom-modal --save
```

## usage

```js
var modal = require('dom-modal');
var content = document.createElement('div');
content.innerHTML = "Hello modal";

var myModal = modal(content);

myModal.show();
myModal.hide();

myModal.on('show', console.log);
myModal.on('hide', console.log);
```

## test

```
npm test
```

## example

```
npm run example
```

Then open http://0.0.0.0:8080/example.html in a browser.

## styling

See the css files: [overlay.css](overlay.css), [modal.css](modal.css).

Just overwrite the styles you want.

## credits

CSS techniques by:
- [Sara Soueidan](https://twitter.com/SaraSoueidan): http://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
- [Scott O'Hara](https://twitter.com/scottohara): http://www.smashingmagazine.com/2014/09/15/making-modal-windows-better-for-everyone/

And modified by me for IE11.
