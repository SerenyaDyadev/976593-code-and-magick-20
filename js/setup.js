'use strict';

document.querySelector('.setup').classList.remove('hidden');
// Покажите блок .setup, убрав в JS-коде у него класс hidden.

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var familyNames = ['да Марьян', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// var getFullName = function (names, familyNames) {
//   var name = names[Math.round(Math.random() * (names.length - 1))];
//   var familyName = familyNames[Math.round(Math.random() * (familyNames.length - 1))];
//   return (name + ' ' + familyName);
// };

var getRandomElement = function (elements) {
  return elements[Math.round(Math.random() * (elements.length - 1))];
};

var fullName = getRandomElement(names) + ' ' + getRandomElement(familyNames);
console.log(fullName);

var fullCoatColor = getRandomElement(coatColor);
console.log(fullCoatColor);

var fullEyesColor = getRandomElement(eyesColor);
console.log(fullEyesColor);
// for (var i = 0; i < 4; i++) {
//   var names = [];
//   name[i] = getName(names, familyNames);
// }

// console.log(name);
/*


Создайте массив, состоящий из 4-х сгенерированных JS объектов, которые будут описывать похожих персонажей. Объекты должны содержать следующие поля:

На основе данных, созданных в предыдущем пункте и шаблона #similar - wizard - template создайте DOM - элементы, соответствующие случайно сгенерированным волшебникам, и заполните их данными из массива:

имя персонажа name запишите как текст в блок.setup - similar - label;
цвет мантии coatColor задайте как цвет заливки fill в стилях элемента.wizard - coat;
цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента.wizard - eyes.

Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list. Для вставки элементов используйте DocumentFragment.

Покажите блок .setup-similar, удалив у него CSS-класс hidden.
*/
// var name =
