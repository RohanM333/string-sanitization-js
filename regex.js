function sanitizeInput(str) {
  const pattern = /^[a-zA-Z0-9_]*$/;
  return pattern.test(str) ? str : '';
}

const sanitizedInput = sanitizeInput('Valid_Input123');
console.log(sanitizedInput); // Valid_Input123
