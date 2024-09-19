console.log("my_library.js")

function isValidNumber(input) {
  return typeof input === 'string' && input.trim() !== '' && !isNaN(input)
}