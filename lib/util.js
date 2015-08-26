var _ = require('lodash');
var endings = require('./patterns/endings');
var lettersToTonify = require('./patterns/letters-to-tonify');
var toneMap = require('./tone-map');
var toneNumbers = [1, 2, 3, 4, 5];

module.exports = {
  /**
   * @param {string} phrase
   * @return {array}
   */
  splitPhraseIntoWords: function(phrase) {
    return phrase.split(' ');
  },

  /**
   * @param {string} word
   * @return {number|null}
   */
  getTone: function(word) {
    var lastCharacter = parseInt(_.last(word), 10);
    return _.includes(toneNumbers, lastCharacter) ? lastCharacter : null;
  },

  /**
   * @param {string} word
   * @return {string|null}
   */
  getEnding: function(word) {
    var ending = null;

    _.forEach(endings, function(pattern, plainEnding) {
      if (word.match(pattern)) {
        ending = plainEnding;
      }
    });

    return ending;
  },

  /**
   * @param {string} ending
   * @param {number} tone
   * @return {string}
   */
  tonifyEnding: function(ending, tone) {
    var letter;

    _.forEach(lettersToTonify, function(letterAndPattern) {
      if (!letter && ending.match(letterAndPattern.pattern)) {
        letter = letterAndPattern.letter;
      }
    });

    if (!letter) {
      return ending;
    }

    return ending.replace(letter, this.tonifyLetter(letter, tone));
  },

  /**
   * @param {string} letter
   * @param {number} tone
   * @return {string}
   */
  tonifyLetter: function(letter, tone) {
    var keys = letter + '.' + tone;
    return _.get(toneMap, keys, letter);
  },

  /**
   * @param {string} word
   * @return {string}
   */
  stripToneNumber: function(word) {
    return _.trim(word, toneNumbers);
  },

  /**
   * @param {string} word
   * @return {string}
   */
  tonifyWord: function(word) {
    var tone = this.getTone(word);

    if (!tone) {
      return word;
    }

    var ending = this.getEnding(word);
    var tonifiedEnding = this.tonifyEnding(ending, tone);
    var tonifiedWord = word.replace(ending, tonifiedEnding);

    return this.stripToneNumber(tonifiedWord);
  },

  /**
   * @param {string} phrase
   * @return {string}
   */
  tonifyPhrase: function(phrase) {
    var self = this;
    var words = this.splitPhraseIntoWords(phrase);
    var tonifiedWords = [];

    _.forEach(words, function(word) {
      tonifiedWords.push(self.tonifyWord(word));
    });

    return tonifiedWords.join(' ');
  }
};
