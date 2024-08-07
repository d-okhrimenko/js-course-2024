console.log(new Date());

document.addEventListener("DOMContentLoaded", function() {
    let today = new Date();
    let dateString = today.toDateString();

    document.getElementById("my-date").textContent += dateString;
});