// Stolen from https://github.com/angus-c/just/blob/master/packages/string-kebab-case/index.js.
// any combination of spaces and punctuation characters
// thanks to http://stackoverflow.com/a/25575009
var wordSeparators = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/;
var capitals = /[A-Z\u00C0-\u00D6\u00D9-\u00DD]/g;

export function kebabCase(str) {
  //replace capitals with space + lower case equivalent for later parsing
  str = str.replace(capitals, function(match) {
    return ' ' + (match.toLowerCase() || match);
  });
  return str
    .trim()
    .split(wordSeparators)
    .join('-');
}
