'use strict';

(function () {
  window.colorize = function (element, colors, inputName) {
    element.addEventListener('click', function () {
      var color = window.util.getRandomElement(colors);
      inputName.value = color;
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
})();
