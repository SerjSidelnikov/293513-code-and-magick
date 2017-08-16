'use strict';

window.renderStatistics = function (ctx, names, times) {

  renderStatisticsField(ctx, 100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);

  ctx.fillText('Список результатов:', 120, 60);

  ctx.textBaseline = 'top';

  var max = maxTime(times);
  var histogramHeight = 150;
  var step = histogramHeight / max;

  renderHistogram(ctx, step, 180, 250, 40, names, times);
};

function maxTime(times) {
  var max = -1;

  for (var i = 0; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }

  return max;
}

function renderHistogram(ctx, step, initialX, initialY, barWidth, names, times) {
  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, ' + Math.floor(Math.random() * 256) + ', 1)';
    }
    ctx.fillRect(initialX, initialY, -barWidth, -times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(times[i]), initialX - barWidth, initialY - times[i] * step - 20);
    ctx.fillText(names[i], initialX - barWidth, 255);
    initialX += 90;
  }
}

function renderStatisticsField(ctx, x, y, width, height) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(x + 10, y + 10, width, height);
  ctx.fillRect(x + 10, y + 10, width, height);

  ctx.fillStyle = '#ffffff';
  ctx.strokeRect(x, y, width, height);
  ctx.fillRect(x, y, width, height);
}
