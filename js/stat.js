'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#ffffff';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
      maxIndex = i;
    }
  }

  max = max.toFixed(2);

  ctx.fillText('Худшее время: ' + max, 120, 60);

  var histogramHeight = 150;
  var step = histogramHeight / max;

  ctx.fillText('Худшее время: ' + max + 'мс у игрока ' + names[maxIndex], 120, 60);

  ctx.textBaseline = 'top';

  var initialX = 180;
  var initialY = 250;
  var barWidth = 40;

  for (var j = 0; j < times.length; j++) {
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, ' + Math.floor(Math.random() * (255 + 1)) + ', 1)';
    }
    ctx.fillRect(initialX, initialY, -barWidth, -times[j] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(times[j]), initialX - barWidth, initialY - times[j] * step - 20);
    ctx.fillText(names[j], initialX - barWidth, 255);
    initialX += 90;
  }
};
