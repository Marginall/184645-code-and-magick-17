'use strict';
(function () {
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
  var avatarEye = avatar.querySelector('.wizard-eyes');
  var avatarCoat = avatar.querySelector('.wizard-coat');
  var fireball = document.querySelector('.setup-fireball-wrap');
  window.blockIsShow = false;

  window.wizardsGenerate();
  window.templateGenerate();

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
      window.castomizer.coat();
    }

    if (evt.target === avatarEye) {
      window.castomizer.eyes();
    }
  });

  fireball.addEventListener('click', window.castomizer.fireball);

})();
