'use strict';

// Constants
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_PADDING_X = 20;
var CLOUD_PADDING_Y = 10;
var GAP = 10;
var FONT_SIZE = 16;
var FONT_GAP = 20;
var GRAPH_PADDING = 40;
var GRAPH_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var PLAYER_BAR_COLOR = 'rgba(255, 0, 0, 1)';
var BAR_COLOR_HUE = '240';
var TEXT_COLOR = '#000000';
var PREFACE = [
  'Ура вы победили!',
  'Список результатов:',
];

// Variables
var barSpace = BAR_WIDTH + BAR_GAP;
var barValueHeight = FONT_GAP + GAP * 1.5;
var graphX = CLOUD_X + GRAPH_PADDING;
var graphY = (CLOUD_Y + CLOUD_PADDING_Y + FONT_GAP * PREFACE.length) + barValueHeight;
var barNameY = graphY + GRAPH_HEIGHT + FONT_GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  if (!arr.length) {
    return 0;
  }

  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.font = FONT_SIZE + 'px "PT Mono"';
  ctx.fillStyle = TEXT_COLOR;

  // Preface
  for (var i = 0; i < PREFACE.length; i++) {
    ctx.fillText(PREFACE[i], CLOUD_X + CLOUD_PADDING_X, CLOUD_Y + CLOUD_PADDING_Y + FONT_GAP * (i + 1));
  }

  // Graph
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var barValue = Math.round(times[i]);
    var barHeight = Math.floor((times[i] / maxTime) * GRAPH_HEIGHT);
    var barX = graphX + barSpace * i;
    var barDiff = GRAPH_HEIGHT - barHeight;
    var barY = graphY + barDiff;
    var barValueY = graphY - GAP + barDiff;


    if (names[i] === 'Вы') {
      ctx.fillStyle = PLAYER_BAR_COLOR;
    } else {
      ctx.fillStyle = 'hsl(' + BAR_COLOR_HUE + ', ' + (15 * (i + 1)) + '%, 50%)';
    }

    ctx.fillRect(barX, barY, BAR_WIDTH, barHeight);

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(barValue, barX, barValueY);
    ctx.fillText(names[i], barX, barNameY);
  }
};
