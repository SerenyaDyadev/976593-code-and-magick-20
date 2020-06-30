'use strict';

(function () {
  var colorize = function (element, colors, inputName) {
    element.addEventListener('click', function () {
      var colorElement = window.util.getRandomElement(colors);
      inputName.value = colorElement;
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = colorElement;
      } else {
        element.style.fill = colorElement;
      }
      if (element === wizardCoatElement) {
        wizard.onCoatChange(colorElement);
      } else if (element === wizardEyesElement) {
        wizard.onEyesChange(colorElement);
      }
    });
  };


  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var inputFireball = document.querySelector('input[name="fireball-color"]');
  colorize(setupFireballWrap, window.colors.FIREBALL_COLOR, inputFireball);

  var wizard = {
    onEyesChange: function () { },
    onCoatChange: function () { }
  };

  var wizardElement = document.querySelector('.setup-wizard');

  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var inputCoat = document.querySelector('input[name="coat-color"]');

  colorize(wizardCoatElement, window.colors.COAT_COLORS, inputCoat);

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  var inputEyes = document.querySelector('input[name="eyes-color"]');

  colorize(wizardEyesElement, window.colors.EYES_COLORS, inputEyes);

  window.wizard = wizard;
})();
