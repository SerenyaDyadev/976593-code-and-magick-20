'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    // console.log(fileChooser.files[0].name);
    var fileName = file.name.toLowerCase();
    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();
      // console.log(reader);
      reader.addEventListener('load', function () {
        // console.log(reader.result);
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();
