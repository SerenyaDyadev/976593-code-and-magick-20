'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var FAMILY_NAMES = ['да Марьян', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var NUMBER_PERSONS = 4;
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var getRandomElement = function (elements) {
  return elements[Math.round(Math.random() * (elements.length - 1))];
};

var getObjectPerson = function () {
  var person = {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(FAMILY_NAMES),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLOR)
  };

  return person;
};

var getArrayPersonages = function (number) {
  var arrayPersonages = [];
  for (var i = 0; i < number; i++) {
    arrayPersonages.push(getObjectPerson());
  }

  return arrayPersonages;
};

var personages = getArrayPersonages(NUMBER_PERSONS);

var userDialog = document.querySelector('.setup');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < personages.length; i++) {
  fragment.appendChild(renderWizard(personages[i]));
}

similarListElement.appendChild(fragment);

var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var inputUserName = document.querySelector('.setup-user-name');
var setupWizard = userDialog.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireballWrap = userDialog.querySelector('.setup-fireball-wrap');

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
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  var color = getRandomElement(COAT_COLORS);
  wizardCoat.style.fill = color;
  userDialog.querySelector('input[name="coat-color"]').value = color;
});

wizardEyes.addEventListener('click', function () {
  var color = getRandomElement(EYES_COLOR);
  wizardEyes.style.fill = color;
  userDialog.querySelector('input[name="eyes-color"]').value = color;
});

setupFireballWrap.addEventListener('click', function () {
  var color = getRandomElement(FIREBALL_COLOR);
  setupFireballWrap.style.backgroundColor = color;
  userDialog.querySelector('input[name="fireball-color"]').value = color;
});
