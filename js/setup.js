'use strict';

(function () {
  var userDialog = document.querySelector('.setup');

  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend('https://javascript.pages.academy/code-and-magick', 'POST', function () {
      userDialog.classList.add('hidden');
    }, new FormData(form));
    evt.preventDefault();
  });

})();
