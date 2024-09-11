"use strict";

function categoryIMT(kg, height) {
  var squareHeight = height * height;
  var result = kg / squareHeight;

  if (result < 18.5) {
    alert("You are underweight");
  } else if (result >= 18.5 && result < 24.9) {
    alert("You have a normal weight");
  } else if (result >= 25 && result < 29.9) {
    alert("You are overweight");
  } else if (result >= 30) {
    alert("You are obese");
  }
}

var kg = parseFloat(prompt("Enter your weight in kilograms:"));
var height = parseFloat(prompt("Enter your height in meters:"));
categoryIMT(kg, height);