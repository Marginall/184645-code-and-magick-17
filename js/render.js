'use strict';

(function () {
  window.randomizer = function (arr) {
    return Math.floor(Math.random() * (arr.length - 0)) + 0;
  };

  window.templateGenerate = function (wizards) {
    var list = document.querySelector('.setup-similar-list');
    var template = document.querySelector('#similar-wizard-template').content;
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      var element = template.cloneNode(true);
      var name = element.querySelector('.setup-similar-label');
      var coatColor = element.querySelector('.wizard-coat');
      var eyesColor = element.querySelector('.wizard-eyes');
      var numberWizard = wizards[window.randomizer(wizards)];

      name.textContent = wizards[i].name;
      coatColor.style = 'fill:' + numberWizard.colorCoat;
      eyesColor.style = 'fill:' + numberWizard.colorEyes;

      fragment.appendChild(element);
    }

    list.innerHTML = '';
    list.appendChild(fragment);
  };

})();
