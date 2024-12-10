import DOMPurify from 'dompurify';

const dirty = '<img src="javascript:alert(\'XSS\')">';
const clean = DOMPurify.sanitize(dirty);
console.log(clean); // <img>
