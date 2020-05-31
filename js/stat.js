'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var TEXT_GAP = 20;
var BAR_TEXT_GAP = 10;
var BAR_GAP = 50;
var BAR_HEIGHT_MAX = 150;
var BAR_WIDTH = 40;
var TEXT_MESSAGE = 'Ура вы победили!\nСписок результатов:';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var renderColumn = function (ctx, players, times, maxTime, i) {
  if (players === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  }

  return ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - TEXT_GAP - BAR_TEXT_GAP, BAR_WIDTH, -(BAR_HEIGHT_MAX * times / maxTime));
};

var renderText = function (textString, numberSubString) {
  var arrayOfString = textString.split('\n');
  return arrayOfString[numberSubString];
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(renderText(TEXT_MESSAGE, 0), CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP);
  ctx.fillText(renderText(TEXT_MESSAGE, 1), CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - TEXT_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - (BAR_HEIGHT_MAX * times[i] / maxTime) - BAR_GAP);
    ctx.fillStyle = 'hsl(240,' + (Math.round(100 * Math.random())) + '%, 50%)';

    renderColumn(ctx, players[i], times[i], maxTime, i);
  }
// Содержимое этого цикла давай также оформим как отдельная фукция отрисовки одного столбца.
// Так в дальнейшем будет проще редактировать стиль отрисовки при изменении.
};
