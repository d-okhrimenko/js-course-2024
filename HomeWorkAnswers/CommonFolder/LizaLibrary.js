function getStringValue(message) {
  while (true) {
      let value = prompt(message);
      let isValid = isNaN(value) && value !== "" && value !== null;
      if (isValid) return value;
  }
}