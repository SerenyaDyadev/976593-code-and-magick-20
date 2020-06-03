'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var familyNames = ['да Марьян', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomElement = function (elements) {
  return elements[Math.round(Math.random() * (elements.length - 1))];
};

var getObjectPerson = function () {
  var person = {
    name: getRandomElement(names) + ' ' + getRandomElement(familyNames),
    coatColor: getRandomElement(coatColors),
    eyesColor: getRandomElement(eyesColors)
  };

  return person;
};

// можно добавить параметр для колличества генерируемых персон
var getArrayPersonages = function () {
  var arrayPersonages = [];
  for (var i = 0; i < 4; i++) {
    arrayPersonages[i] = getObjectPerson();
  }

  return arrayPersonages;
};

var personages = getArrayPersonages();
// Создайте массив, состоящий из 4-х сгенерированных JS объектов, которые будут описывать похожих персонажей. Объекты должны содержать следующие поля:

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
// Покажите блок .setup, убрав в JS-коде у него класс hidden.

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
// шаблона #similar - wizard - template

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
