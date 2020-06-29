'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    window.render(wizards.slice().
      sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
        }
        return rankDiff;
      }));
  };

  window.wizard.onEyesChange = function (color) {
    eyesColor = color;
    updateWizards();
  };

  window.wizard.onCoatChange = function (color) {
    coatColor = color;
    updateWizards();
  };

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
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
