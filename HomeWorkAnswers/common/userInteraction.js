function inputNumberUser(title = "Enter a number") {
    while (true) {
        let number = prompt(title);
        number = parseInt(number);
        if (!isNaN(number)) {
            return number;
        } else {
            alert("Please enter a valid number");
            
        }
    }
}