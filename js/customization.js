'use strict';

(function () {
  var fireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var randomColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var randomEyes = ['black', 'red', 'blue', 'yellow', 'green'];
  var avatar = document.querySelector('.setup-wizard');
  var avatarCoat = avatar.querySelector('.wizard-coat');
  var avatarEye = avatar.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballValue = fireball.querySelector('input');

  window.castomizer = {
    coat: function () {
      avatarCoat.style = 'fill:' + randomColors[window.randomizer(randomColors)];
    },
    eyes: function () {
      avatarEye.style = 'fill:' + randomEyes[window.randomizer(randomEyes)];
    },
    fireball: function () {
      var value = fireballs[window.randomizer(fireballs)];
      fireball.style = 'background-color:' + value;
      fireballValue.setAttribute('value', value);
    }
  };
})();
