'use strict';

var wizards = [];
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var randomColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var randomEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var openBlockButton = document.querySelector('.setup-open');
var block = document.querySelector('.setup');
var closeBlockButton = block.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var inputName = block.querySelector('.setup-user-name');

function wizardsGenerate() {
  for (var i = 1; i <= 4; i++) {
    var wizard = {
      name: names[randomizer(names)] + ' ' + lastNames[randomizer(lastNames)],
      coatColor: randomColors[randomizer(randomColors)],
      eyesColor: randomEyes[randomizer(randomEyes)]
    };
    wizards.push(wizard);
  }
}

function randomizer(arr) {
  return Math.floor(Math.random() * (arr.length - 0)) + 0;
}

function templateGenerate() {
  var list = document.querySelector('.setup-similar-list');
  var template = document.querySelector('#similar-wizard-template').content;
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    var element = template.cloneNode(true);
    var name = element.querySelector('.setup-similar-label');
    var coatColor = element.querySelector('.wizard-coat');
    var eyesColor = element.querySelector('.wizard-eyes');

    name.textContent = wizards[i].name;
    coatColor.setAttribute('fill', wizards[i].randomColors);
    eyesColor.setAttribute('fill', wizards[i].eyesColor);
    fragment.appendChild(element);
  }

  list.appendChild(fragment);
}

var onOpenBlockClick = function () {
  block.classList.remove('hidden');
  document.addEventListener('keydown', onBlockEscPress);
};

var onBlockEscPress = function(evt) {
  if (evt.keyCode === 27) {
    closeBlock();
  }
};

var onCloseBlockClick = function () {
  block.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var openBlock = function () {
   block.classList.remove('hidden');
   document.addEventListener('keydown', onBlockEscPress);
};

var closeBlock = function () {
  block.classList.add('hidden');
};

wizardsGenerate();
templateGenerate();

openBlockButton.addEventListener('click', onOpenBlockClick);
closeBlockButton.addEventListener('click', onCloseBlockClick);

inputName.addEventListener('focus', function (evt) {
  document.removeEventListener('keydown', onBlockEscPress);
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openBlock();
  }
});
