'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 20;
var CLOUD_GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_X = 120;
var BAR_Y = 40;
var FONT = 'bold 16px PT Mono';
var FONT_GAP = 20;
var userBarColor = 'rgba(255, 0, 0, 1)';
var innerUserBarColor = 'blue';
var verticalGap = FONT_GAP / 2;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = color;
};

var renderText = function (ctx, text, x, y, font) {
  ctx.fillText(text, x, y);
  ctx.font = font;
};

var renderPreview = function (ctx) {
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  renderCloud(ctx, CLOUD_X - CLOUD_GAP, CLOUD_Y - CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderText(ctx, 'Ура вы победили!', BAR_X, BAR_Y, FONT);
  renderText(ctx, 'Список результатов:', BAR_X, BAR_Y + FONT_GAP, FONT);
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
  var startNamePositionX = BAR_X + FONT_GAP;
  var startNamePositionY = CLOUD_HEIGHT - verticalGap;
  console.log(startNamePositionY);

  for (var i = 0; i < names.length; i++) {
    renderText(ctx, names[i], startNamePositionX, startNamePositionY, FONT);
    ctx.fillRect(BAR_X + FONT_GAP, CLOUD_HEIGHT - FONT_GAP - verticalGap - BAR_HEIGHT, BAR_WIDTH, BAR_HEIGHT);
    renderText(ctx, Math.floor(times[i]), startNamePositionX, CLOUD_HEIGHT - FONT_GAP - verticalGap - BAR_HEIGHT - verticalGap, FONT);
    startNamePositionX = startNamePositionX + BAR_WIDTH + BAR_GAP;
  }

};
