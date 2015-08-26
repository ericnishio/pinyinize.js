var tonify = require('./lib/tonify');

/**
 * @param {string} phrase
 * @return {string}
 */
module.exports = function(phrase) {
  return tonify(phrase);
};
