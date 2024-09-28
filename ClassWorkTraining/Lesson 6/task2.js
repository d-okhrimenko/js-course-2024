let values = [10, 12, -8, 0, -10, 25, 158];

function changeValue(array) {

    for (let i = 0; i < values.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }  
    }
    return array;
}
console.log(changeValue(values));
