'use strict';

(function () {
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  var inputUserName = document.querySelector('.setup-user-name');
  var setupWizard = userDialog.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireballWrap = userDialog.querySelector('.setup-fireball-wrap');
  var inputCoat = userDialog.querySelector('input[name="coat-color"]');
  var inputEyes = userDialog.querySelector('input[name="eyes-color"]');
  var inputFireball = userDialog.querySelector('input[name="fireball-color"]');

  inputUserName.addEventListener('invalid', function () {
    if (inputUserName.validity.tooShort) {
      inputUserName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (inputUserName.validity.tooLong) {
      inputUserName.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (inputUserName.validity.valueMissing) {
      inputUserName.setCustomValidity('Обязательное поле');
    } else {
      inputUserName.setCustomValidity('');
    }
  });

  inputUserName.addEventListener('input', function () {
    var valueLength = inputUserName.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      inputUserName.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > MAX_NAME_LENGTH) {
      inputUserName.setCustomValidity('Удалите лишние ' + (valueLength - MIN_NAME_LENGTH) + ' симв.');
    } else {
      inputUserName.setCustomValidity('');
    }
  });

  var onPopupEscPress = function (evt) {
    if (!inputUserName.matches(':focus')) {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    // вернем окно в изначальное положение сли его перемещали
    userDialog.style.top = '';
    userDialog.style.left = '';

    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  window.colorize(wizardCoat, window.colors.COAT_COLORS, inputCoat);
  window.colorize(wizardEyes, window.colors.EYES_COLOR, inputEyes);
  window.colorize(setupFireballWrap, window.colors.FIREBALL_COLOR, inputFireball);
})();
