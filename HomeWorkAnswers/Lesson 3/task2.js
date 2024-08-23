let today = new Date().getDay();
console.log(today);
let userName = prompt("Enter your name");
console.log(userName);
if (today === 0) {
    alert("Hello, " + userName + ", today is Sunday")
};
if (today === 1) {
    alert("Hello, " + userName + ", today is Monday")
};
if (today === 2) {
    alert("Hello, " + userName + ", today is Tuesday")
};
if (today === 3) {
    alert("Hello, " + userName + ", today is Wendesday")
};
if (today === 4) {
    alert("Hello, " + userName + ", today is Thursday")
};
if (today === 5) {
    alert("Hello, " + userName + ", today is Friday")
};
if (today === 6) {
    alert("Hello, " + userName + ", today is Saturday")
};