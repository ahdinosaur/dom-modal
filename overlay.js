var domify = require('domify');
var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var inherits = require('inherits');
var insertCss = require('insert-css');
var once = require('once');
var style = require('dom-style');

var css = fs.readFileSync(__dirname + '/overlay.css', 'utf8');
var html = fs.readFileSync(__dirname + '/overlay.html', 'utf8');

function Overlay() {
  this.dom = domify(html);
  this.container = this.dom.querySelector('.dom-modal-overlay');
  this.escKeyListener = this._checkEscKey.bind(this);
  this.container.addEventListener('mousedown', this.hide.bind(this));
}

inherits(Overlay, EventEmitter);

Overlay.prototype.show = function() {
  EventEmitter(this);
  document.addEventListener('keydown', this.escKeyListener);
  this.setup();
  style(this.container, 'visibility', 'visible');
  this.emit('show');
};

Overlay.prototype.hide = function(e) {
  if (e !== undefined && e.target !== this.container) {
    return;
  }

  document.removeEventListener('keydown', this.escKeyListener);
  style(this.container, 'visibility', 'hidden');
  this.emit('hide');
};

Overlay.prototype.setup = once(function() {
  insertCss(css, {prepend: true});
  document.body.appendChild(this.dom);
});

Overlay.prototype._checkEscKey = function(e) {
  if (e.keyCode === 27) {
    this.hide();
  }
};

module.exports = new Overlay();
