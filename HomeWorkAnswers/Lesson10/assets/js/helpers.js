export function checkInput(input) {
  const errorEl = input.nextElementSibling;

  if (!input.checkValidity()) {
    errorEl.textContent = input.validationMessage;
    errorEl.hidden = false;

    return false;

  } else {
    errorEl.textContent = '';
    errorEl.hidden = true;

    return true;
  }
}