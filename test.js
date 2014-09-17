var test = require('prova')

test('dom-modal', function (t) {
  t.plan(2);

  var modal = require('./');
  var element = document.createElement('div');
  element.innerHTML = 'Hello'
  var myModal = modal(element);

  myModal.on('show', function() {
    t.pass('I get one show event');
  });

  myModal.on('hide', function() {
    t.pass('I get one hide event');
  });

  myModal.show();
  myModal.hide();
});