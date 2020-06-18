'use strict';
(function () {
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

  var renderText = function (ctx, textString) {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    var arrayOfString = textString.split('\n');

    for (var i = 0; i < arrayOfString.length; i++) {
      ctx.fillText(arrayOfString[i], CLOUD_X + TEXT_GAP, CLOUD_Y + (TEXT_GAP + TEXT_GAP * i));
    }
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

  var renderColumn = function (ctx, players, times) {
    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - TEXT_GAP);
      ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - (BAR_HEIGHT_MAX * times[i] / maxTime) - BAR_GAP);

      ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240,' + (Math.round(100 * Math.random())) + '%, 50%)';

      ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - TEXT_GAP - BAR_TEXT_GAP, BAR_WIDTH, -(BAR_HEIGHT_MAX * times[i] / maxTime));
    }
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    renderText(ctx, TEXT_MESSAGE);
    renderColumn(ctx, players, times);
  };
})();
