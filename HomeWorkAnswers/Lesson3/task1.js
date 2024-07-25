let stop = false;
while (!stop) {
  let input = prompt('Enter your number:');
  if (input == 'exit' || input =='stop') {
    stop = true;
  } else {
    input_value = Number(input);

    if (!isNaN(input_value)) {
      if (input_value % 2 == 0) {
        alert(`The value ${input} is even.`);
      } else {
        alert(`The value ${input} is odd.`);
      }
    } else {
      alert(`The value ${input} is not a number!`);
    }
  }
}
