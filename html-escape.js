function escapeHTML(str) {
  return str.replace(/[&<>"'/]/g, (match) => {
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

const sanitizedHTML = escapeHTML('<script>alert("XSS")</script>');
console.log(sanitizedHTML); // &lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;
