'use strict';

(function () {
  window.backend = {
    load: function (onLoad, onError) {
      var url = url || 'https://js.dump.academy/code-and-magick/data';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('GET', url);
      xhr.send();

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError();
        }
      });
    },
    save: function (data, onLoad, onError) {
      var url = url || 'https://js.dump.academy/code-and-magick/';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('GET', url);
      xhr.send(data);

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError();
        }
      });

      xhr.addEventListener('error', onError);
    }
  };

  window.onLoad = function (wizards) {
    window.templateGenerate(wizards);
  };

  window.onError = function () {
    var errorBlock = document.querySelector('.error');
    errorBlock.classList.remove('hidden');

    setTimeout(function () {
      errorBlock.classList.add('hidden');
    }, 3000);
  };

})();
