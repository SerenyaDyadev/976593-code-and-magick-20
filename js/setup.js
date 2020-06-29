'use strict';

(function () {

  var userDialog = document.querySelector('.setup');

  var successHandler = function (wizards) {
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
