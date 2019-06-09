'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TEXT_X = 120;
var TEXT_Y = 40;
var FONT = 'bold 16px PT Mono';
var FONT_GAP = 20;
var mainColor = '#fff';
var darkColor = 'rgba(0, 0, 0, 0.7)';
var userBarColor = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y, font) {
  ctx.fillText(text, x, y);
  ctx.font = font;
  ctx.fillStyle = darkColor;
};

var renderPreview = function (ctx) {
  renderCloud(ctx, CLOUD_X, CLOUD_Y, darkColor);
  renderCloud(ctx, CLOUD_X - CLOUD_GAP, CLOUD_Y - CLOUD_GAP, mainColor);
  renderText(ctx, 'Ура вы победили!', TEXT_X, TEXT_Y, FONT);
  renderText(ctx, 'Список результатов:', TEXT_X, TEXT_Y + FONT_GAP, FONT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return Math.floor(maxElement);
};

window.renderStatistics = function (ctx, names, times) {
  renderPreview(ctx);
  var maxTime = getMaxElement(times);
  var positionForTotalX = TEXT_X + FONT_GAP;
  var positionForTotalY = TEXT_Y + FONT_GAP + FONT_GAP;

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = darkColor;
    renderText(ctx, names[i], positionForTotalX, CLOUD_HEIGHT - FONT_GAP, FONT);
    renderText(ctx, Math.floor(times[i]), positionForTotalX, positionForTotalY + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime), FONT);

    if (names[i] === 'Вы') {
      ctx.fillStyle = userBarColor;
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + parseFloat(Math.random()) + ')';
    }

    ctx.fillRect(positionForTotalX, (positionForTotalY + FONT_GAP) + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, ((BAR_HEIGHT * times[i]) / maxTime) - FONT_GAP);

    positionForTotalX = positionForTotalX + BAR_WIDTH + BAR_GAP;
  }
};
