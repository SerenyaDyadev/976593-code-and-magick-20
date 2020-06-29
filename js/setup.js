'use strict';

(function () {
  var userDialog = document.querySelector('.setup');

  var setupFireballWrap = userDialog.querySelector('.setup-fireball-wrap');
  var inputFireball = userDialog.querySelector('input[name="fireball-color"]');
  window.colorize(setupFireballWrap, window.colors.FIREBALL_COLOR, inputFireball);

  var wizardElement = document.querySelector('.setup-wizard');

  var inputCoat = userDialog.querySelector('input[name="coat-color"]');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  window.colorize(wizardCoatElement, window.colors.COAT_COLORS, inputCoat);

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  var inputEyes = userDialog.querySelector('input[name="eyes-color"]');
  window.colorize(wizardEyesElement, window.colors.EYES_COLORS, inputEyes);

  var wizards = [];

  var successHandler = function (data) {
    wizards = data;
    window.render(wizards);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend('https://javascript.pages.academy/code-and-magick/data', 'GET', successHandler);

  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend('https://javascript.pages.academy/code-and-magick', 'POST', function () {
      userDialog.classList.add('hidden');
    }, new FormData(form));
    evt.preventDefault();
  });
})();
