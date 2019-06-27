'use strict';

(function () {
  var wizards = [];
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var randomColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var randomEyes = ['black', 'red', 'blue', 'yellow', 'green'];

  window.wizardsGenerate = function () {
    for (var i = 1; i <= 4; i++) {
      var wizard = {
        name: names[window.randomizer(names)] + ' ' + lastNames[window.randomizer(lastNames)],
        coatColor: randomColors[window.randomizer(randomColors)],
        eyesColor: randomEyes[window.randomizer(randomEyes)]
      };
      wizards.push(wizard);
    }
  };

  window.randomizer = function (arr) {
    return Math.floor(Math.random() * (arr.length - 0)) + 0;
  };

  window.templateGenerate = function () {
    var list = document.querySelector('.setup-similar-list');
    var template = document.querySelector('#similar-wizard-template').content;
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
      var element = template.cloneNode(true);
      var name = element.querySelector('.setup-similar-label');
      var coatColor = element.querySelector('.wizard-coat');
      var eyesColor = element.querySelector('.wizard-eyes');

      name.textContent = wizards[i].name;
      coatColor.style = 'fill:' + wizards[i].coatColor;
      eyesColor.style = 'fill:' + wizards[i].eyesColor;

      fragment.appendChild(element);
    }

    list.appendChild(fragment);
  };

})();
