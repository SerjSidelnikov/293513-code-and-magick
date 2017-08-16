'use strict';

window.renderStatistics = function (ctx, names, times) {

  renderStatisticsField(ctx, 100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);

  ctx.fillText('Список результатов:', 120, 60);

  ctx.textBaseline = 'top';

  var max = maxValue(times);
  var histogramHeight = 150;
  var step = histogramHeight / max;

  renderHistogram(ctx, step, 180, 250, 40, names, times);
};

/**
 * Возвращает максимальное значение из массива
 * @param {Array} array
 * @return {number}
 */
function maxValue(array) {
  var max = -1;

  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

/**
 * Отрисовывает гистограму с подписями имён и значений гистограмы
 * @param {Object} ctx Объект канваса
 * @param {number} step Шаг
 * @param {number} initialX Координат по оси Х
 * @param {number} initialY Координат по оси Y
 * @param {namber} barWidth Ширина колонки
 * @param {Array} names Массив имён
 * @param {Array} times Массив времён
 */
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

/**
 * Отрисовывает прямоугльник с тенью
 * @param {Object} ctx Объект канваса
 * @param {number} x Координат по оси Х
 * @param {numder} y Координат по оси Y
 * @param {number} width Ширина прямоугольника
 * @param {number} height Высота прямоугольника
 */
function renderStatisticsField(ctx, x, y, width, height) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(x + 10, y + 10, width, height);
  ctx.fillRect(x + 10, y + 10, width, height);

  ctx.fillStyle = '#ffffff';
  ctx.strokeRect(x, y, width, height);
  ctx.fillRect(x, y, width, height);
}
