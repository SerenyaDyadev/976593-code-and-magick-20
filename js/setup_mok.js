'use strict';

(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var FAMILY_NAMES = ['да Марьян', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var NUMBER_PERSONS = 4;

  var getObjectPerson = function () {
    var person = {
      name: window.util.getRandomElement(NAMES) + ' ' + window.util.getRandomElement(FAMILY_NAMES),
      coatColor: window.util.getRandomElement(window.colors.COAT_COLORS),
      eyesColor: window.util.getRandomElement(window.colors.EYES_COLOR)
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
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

})();
