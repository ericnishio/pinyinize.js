var util = require('./lib/util');

/**
 * @param {string} wordsWithToneNumbers
 * @return {string}
 */
module.exports = function(wordsWithToneNumbers) {
  return util.convertPhrase(wordsWithToneNumbers);
};
