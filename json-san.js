function sanitizeJSON(json) {
  const replacer = (key, value) => {
    if (typeof value === 'string') {
      return value.replace(/[&<>"'\/]/g, (match) => {
        const escape = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
          '/': '&#x2F;',
        };
        return escape[match];
      });
    }
    return value;
  };
  return JSON.parse(JSON.stringify(json, replacer));
}

const dirtyJSON = {
  name: '<script>alert("XSS")</script>',
  age: 25
};
const sanitizedJSON = sanitizeJSON(dirtyJSON);
console.log(sanitizedJSON); // { name: '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;', age: 25 }
