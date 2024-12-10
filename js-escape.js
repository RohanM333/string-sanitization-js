function escapeJavaScript(str) {
  return str.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

const sanitizedJS = escapeJavaScript('Hello "World"');
console.log(sanitizedJS); // Hello \"World\"
