var fs = require('fs');
var domify = require('domify');
var once = require('once-component');
var style = require('dom-style');
var Emitter = require('component-emitter');
var insertCss = require('insert-css');
var bind = require('component-bind');

var overlay = require('./overlay.js');

var css = fs.readFileSync(__dirname + '/modal.css', 'utf8');
var html = fs.readFileSync(__dirname + '/modal.html', 'utf8');
var addStyle = once(bind(null, insertCss, css, { prepend: true }));

module.exports = function modal(element) {
  return new Modal(element);
}

function Modal(element) {
  this.container = domify(html);
  this.container.appendChild(element);
  this.hideOverlayListener = bind(this, this.hide);
}

Emitter(Modal.prototype);

Modal.prototype.show = function() {
  overlay.once('hide', this.hideOverlayListener);
  overlay.show();
  this.setup();
  style(this.container, 'display', 'block');
  this.emit('show');
}

Modal.prototype.hide = function() {
  overlay.off('hide', this.hideOverlayListener);
  overlay.hide();
  style(this.container, 'display', 'none');
  this.emit('hide');
}

Modal.prototype.setup = once(function() {
  addStyle();
  document.body.appendChild(this.container);
});