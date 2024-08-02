let year = prompt("Enter year");
console.log(year);
year = Number(year);
console.log("Type = " + typeof(year));

let res = year % 4;
const remainder = 0;
if (res == 0) {
    alert("Високосний рік");
}
else {
    alert("Невисокосний рік");
}
