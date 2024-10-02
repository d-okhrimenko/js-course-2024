"use strict";

function getCircleAreaAndPerimeter(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  var perimeter = 2 * Math.PI * radius;
  return {
    area: Math.floor(area),
    perimeter: Math.floor(perimeter)
  };
}

function getRectangleAreaAndPerimeter(length, width) {
  var area = length * width;
  var perimeter = 2 * (length + width);
  return {
    area: Math.floor(area),
    perimeter: Math.floor(perimeter)
  };
}

function getTriangleAreaAndPerimeter(a, b, c) {
  var perimeter = a + b + c;
  var p = perimeter / 2;
  var area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  return {
    area: Math.floor(area),
    perimeter: Math.floor(perimeter)
  };
}

function calculateCircle() {
  var radius = document.getElementById("circleRadius").value;
  var result = getCircleAreaAndPerimeter(parseFloat(radius));
  document.getElementById("circleResult").innerText = "Area: ".concat(result.area, ", Perimeter: ").concat(result.perimeter);
}

function calculateRectangle() {
  var length = document.getElementById("rectLength").value;
  var width = document.getElementById("rectWidth").value;
  var result = getRectangleAreaAndPerimeter(parseFloat(length), parseFloat(width));
  document.getElementById("rectResult").innerText = "Area: ".concat(result.area, ", Perimeter: ").concat(result.perimeter);
}

function calculateTriangle() {
  var a = document.getElementById("triA").value;
  var b = document.getElementById("triB").value;
  var c = document.getElementById("triC").value;
  var result = getTriangleAreaAndPerimeter(parseFloat(a), parseFloat(b), parseFloat(c));
  document.getElementById("triResult").innerText = "Area: ".concat(result.area, ", Perimeter: ").concat(result.perimeter);
}