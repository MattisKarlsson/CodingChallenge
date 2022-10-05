function validateUrl(url) {
  // https://stackoverflow.com/questions/1410311/regular-expression-for-url-validation-in-javascript
  return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
}

module.exports = { validateUrl };