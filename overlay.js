var emitter = require('component-emitter');
var fs = require('fs');
var domify = require('domify');
var once = require('once-component');
var style = require('dom-style');
var Emitter = require('component-emitter');
var insertCss = require('insert-css');
var bind = require('component-bind');

var css = fs.readFileSync(__dirname + '/overlay.css', 'utf8');
var html = fs.readFileSync(__dirname + '/overlay.html', 'utf8');
var on = require('dom-event');

function Overlay() {
  this.container = domify(html);
  this.escKeyListener = bind(this, this._checkEscKey);
  on(this.container, 'click', bind(this, this.hide));
}

Emitter(Overlay.prototype);

Overlay.prototype.show = function() {
  on(document, 'keydown', this.escKeyListener);
  this.setup();
  style(this.container, 'visibility', 'visible');
  this.emit('show');
}

Overlay.prototype.hide = function(e) {
  if (e !== undefined && e.target !== this.container) {
    return;
  }

  on.off(document, 'keydown', this.escKeyListener);
  style(this.container, 'visibility', 'hidden');
  this.emit('hide');
}

Overlay.prototype.setup = once(function() {
  insertCss(css, { prepend: true });
  document.body.appendChild(this.container);
});

Overlay.prototype._checkEscKey = function(e) {
  if (e.keyCode === 27) {
    this.hide()
  }
}

module.exports = new Overlay();
