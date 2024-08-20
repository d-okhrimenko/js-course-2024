"use strict";
//function for calculating  circumference of a circle
function calculateCircumference(radius) {
  const circumference = (2 * Math.PI * radius).toFixed(2);
  return circumference;
}

// function for calculating area of a circle
function calculateCircleArea(radius) {
  const area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
  return area;
}

//function for calculating  perimeter of a rectangle
function calculateRectanglePerimeter(length, width) {
  const perimeter = ((length + width) * 2).toFixed(2);
  return perimeter;
}

//function for calculating area of a rectangle
function calculateRectangleArea(length, width) {
  return (length * width).toFixed(2);
}

// function for calculating perimeter of a triangle
function calculateTrianglePerimeter(a, b, c) {
  const perimeter = (a + b + c).toFixed(2);
  return perimeter;
}

// function for calculating area of a triangle
function calculateTriangleArea(a, b, c) {
  const p = (a + b + c) / 2;
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);
  return area;
}

// getting a random integer between two values, inclusive
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function that takes an array of integers and return average
function getAverage(arr) {
  const sum = arr.reduce((acum, curr) => acum + curr, 0);
  return (sum / arr.length).toFixed(2);
}

// function that takes an array of integers and return minimum integer
function getMinInteger(arr) {
  return Math.min(...arr);
}

// function that takes an array of integers and return maximum integer
function getMaxInteger(arr) {
  return Math.max(...arr);
}
