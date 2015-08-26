var util = require('./lib/util');

/**
 * @param {string} phrase
 * @return {string}
 */
module.exports = function(phrase) {
  return util.tonifyPhrase(phrase);
};
