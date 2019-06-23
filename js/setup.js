'use strict';

var wizards = [];
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var randomColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var fireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var randomEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var openBlockButton = document.querySelector('.setup-open');
var block = document.querySelector('.setup');
var closeBlockButton = block.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var inputName = block.querySelector('.setup-user-name');
var form = block.querySelector('.setup-wizard-form');
var buttonSubmit = form.querySelector('.setup-submit');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var avatar = document.querySelector('.setup-wizard');
var avatarCoat = avatar.querySelector('.wizard-coat');
var avatarEye = avatar.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var fireballValue = fireball.querySelector('input');
window.blockIsShow = false;

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
    coatColor.style = 'fill:' + wizards[i].coatColor;
    eyesColor.style = 'fill:' + wizards[i].eyesColor;

    fragment.appendChild(element);
  }

  list.appendChild(fragment);
}

wizardsGenerate();
templateGenerate();

var openBlock = function () {
  block.classList.remove('hidden');
  window.blockIsShow = true;

  inputName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onCloseBlockEscPress);
  });

  document.addEventListener('keydown', onCloseBlockEscPress);
  closeBlockButton.addEventListener('click', onCloseBlockClick);

  closeBlockButton.addEventListener('focus', function () {
    document.addEventListener('keydown', onCloseBlockEnterPress);
  });

  buttonSubmit.addEventListener('focus', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      onOpenBlockSubmit();
    }
  });

  buttonSubmit.addEventListener('click', function () {
    form.submit();
  });

  window.reloadSetup(block);
};

var closeBlock = function () {
  block.classList.add('hidden');
  window.blockIsShow = false;
  document.removeEventListener('keydown', onCloseBlockEscPress);
};

var onOpenBlockSubmit = function () {
  form.submit();
};

var onOpenBlockClick = function () {
  openBlock();
};

var onCloseBlockClick = function () {
  closeBlock();
};

var onCloseBlockEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeBlock();
  }
};

var onOpenBlockEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openBlock();
  }
};

var onCloseBlockEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeBlock();
  }
};

openBlockButton.addEventListener('click', onOpenBlockClick);

setupOpenIcon.addEventListener('focus', function () {
  document.addEventListener('keydown', onOpenBlockEnterPress);
});

avatar.addEventListener('click', function (evt) {
  if (evt.target === avatarCoat) {
    avatarCoat.style = 'fill:' + randomColors[randomizer(randomColors)];
  }

  if (evt.target === avatarEye) {
    avatarEye.style = 'fill:' + randomEyes[randomizer(randomEyes)];
  }
});

fireball.addEventListener('click', function () {
  var value = fireballs[randomizer(fireballs)];
  fireball.style = 'background-color:' + value;
  fireballValue.setAttribute('value', value);
});
