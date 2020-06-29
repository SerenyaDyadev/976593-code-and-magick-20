'use strict';

(function () {
  var MAX_SIMILAR_WIZARD_COUNT = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.render = function (data) {
    similarListElement.innerHTML = '';
    var fragment = document.createDocumentFragment();
    var takeNumber = data.length > MAX_SIMILAR_WIZARD_COUNT ? MAX_SIMILAR_WIZARD_COUNT : data.length;
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    similarListElement.appendChild(fragment);
  };
})();
