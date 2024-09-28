"use strict";

var currentDate = new Date().getDay();

if (currentDate === 0) {
  alert("Today is Sunday");
} else if (currentDate === 1) {
  alert("Today is Monday");
} else if (currentDate === 2) {
  alert("Today is Tuesday");
} else if (currentDate === 3) {
  alert("Today is Wednesday");
} else if (currentDate === 4) {
  alert("Today is Thursday");
} else if (currentDate === 5) {
  alert("Today is Friday");
} else if (currentDate === 6) {
  alert("Today is Saturday");
}