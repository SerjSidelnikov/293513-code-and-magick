'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizards = [];

// Заполняем массив объектами
for (var i = 0; i < 4; i++) {
  wizards.push({
    name: names[generateRandomNumber(0, 7)],
    lastName: lastNames[generateRandomNumber(0, 7)],
    coatColor: coatColors[generateRandomNumber(0, 5)],
    eyesColor: eyesColors[generateRandomNumber(0, 4)]
  });
}

// Заполняем шаблон данными
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.lastName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Рендерим получившиеся объекты
var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

/**
 * Возвращает случайное число от min до max
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function generateRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
