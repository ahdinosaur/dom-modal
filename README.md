# dom-modal [![Dependency Status](http://img.shields.io/david/ThankYouMotion/dom-modal.svg?style=flat-square)](https://david-dm.org/ThankYouMotion/dom-modal) [![devDependency Status](http://img.shields.io/david/dev/ThankYouMotion/dom-modal.svg?style=flat-square)](https://david-dm.org/ThankYouMotion/dom-modal#info=devDependencies)

Standalone modal for the browser.

- easy to style
- with overlay
- overlay click = close
- esc key = close
- all-in-one JavaScript file
- ~2.5kb minified gzipped
- should work™ on IE9+
- based on modules from [npm-dom](https://github.com/npm-dom)

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
