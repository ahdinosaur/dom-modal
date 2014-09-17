var emitter = require('component-emitter');
var fs = require('fs');
var domify = require('domify');
var once = require('once-component');
var style = require('dom-style');
var Emitter = require('component-emitter');
var insertCss = require('insert-css');
var bind = require('component-bind');

var css = fs.readFileSync('./overlay.css', 'utf8');
var html = fs.readFileSync('./overlay.html', 'utf8');
var on = require('dom-event');

function Overlay() {
  this.container = domify(html);
  on(this.container, 'click', bind(this, this.hide));
}

Emitter(Overlay.prototype);

Overlay.prototype.show = function() {
  this.setup();
  style(this.container, 'display', 'block');
  this.emit('show');
}

Overlay.prototype.hide = function() {
  style(this.container, 'display', 'none');
  this.emit('hide');
}

Overlay.prototype.setup = once(function() {
  insertCss(css, { prepend: true });
  document.body.appendChild(this.container);
});

module.exports = new Overlay();