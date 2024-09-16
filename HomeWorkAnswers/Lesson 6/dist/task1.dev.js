"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var grades = [];

for (var i = 0; i < 10; i++) {
  grades.push(Math.floor(Math.random() * 10) + 1);
}

function average(array) {
  var sum = 0;

  for (var _i = 0; _i < array.length; _i++) {
    sum += array[_i];
  }

  return sum / array.length;
}

function max(array) {
  return Math.max.apply(Math, _toConsumableArray(array));
}

function min(array) {
  return Math.min.apply(Math, _toConsumableArray(array));
}

alert("Average score among students: ".concat(average(grades)));
alert("Highest score: ".concat(max(grades)));
alert("Lowest score: ".concat(min(grades)));