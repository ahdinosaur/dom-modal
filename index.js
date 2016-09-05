var domify = require('domify');
var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var inherits = require('inherits');
var insertCss = require('insert-css');
var once = require('once');
var style = require('dom-style');

var overlay = require('./overlay.js');

insertCss(fs.readFileSync(__dirname + '/modal.css', 'utf8'));
var html = fs.readFileSync(__dirname + '/modal.html', 'utf8');

module.exports = function modal(element) {
  return new Modal(element);
};

function Modal(element) {
  this.container = domify(html);
  this.container.appendChild(element);
  overlay.container.appendChild(this.container);
  this.hideOverlayListener = this.hide.bind(this, true);
}

inherits(Modal, EventEmitter);

Modal.prototype.show = function() {
  EventEmitter(this);

  overlay.once('hide', this.hideOverlayListener);
  overlay.show();
  style(this.container, 'display', 'block');
  this.emit('show');
};

Modal.prototype.hide = function(askedByOverlay) {
  overlay.removeListener('hide', this.hideOverlayListener);

  if (askedByOverlay !== true) {
    overlay.hide();
  }

  style(this.container, 'display', 'none');
  this.emit('hide');
};
