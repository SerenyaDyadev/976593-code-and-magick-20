'use strict';
(function () {




















  var URL = 'https://javascript.pages.academy/code-and-magick';

  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };













})();


'use strict';

(function () {
  var MAX_SIMILAR_WIZARD_COUNT = 4;
  /*
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

  */
  var userDialog = document.querySelector('.setup');

  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

    // wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    // wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;

    return wizardElement;
  };

  /*
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < personages.length; i++) {
    fragment.appendChild(renderWizard(personages[i]));
  }
  */
  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler);
  /*
  similarListElement.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
*/
  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.upload(new FormData(form), function () {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  });

})();
