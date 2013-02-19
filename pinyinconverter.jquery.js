/**
 * PinyinConverter
 *
 * @author Eric Nishio <http://ericnishio.com/pinyinconverter/>
 * @copyright Copyright &copy; Eric Nishio 2013
 * @license http://www.opensource.org/licenses/bsd-license.php New BSD License
 * @version 1.0.1
 */

(function ($) {
	$.fn.PinyinConverter = function (button, options) {
		/**
		 * Toggle console.log messages
		 */
		var oldConsoleLog = console.log;
		console.log = function () {
			if (options.consoleMessages === true) {
				oldConsoleLog.apply(this, arguments);
			}
		};

		/**
		 * Pinyin endings
		 */
		var endings = {
			a: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*a(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*a$|^a(?=[1-4](?!\w))/,
			ai: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*ai(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*ai$|^ai(?=[1-4](?!\w))/,
			an: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*an(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*an$|^an(?=[1-4](?!\w))/,
			ang: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*ang(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*ang$|^ang(?=[1-4](?!\w))/,
			ao: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*ao(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*ao$|^ao(?=[1-4](?!\w))/,
			e: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*e(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*e$|^e(?=[1-4](?!\w))/,
			ei: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*ei(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*ei$|^ei(?=[1-4](?!\w))/,
			en: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*en(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*en$|^en(?=[1-4](?!\w))/,
			eng: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*eng(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*eng$|^eng(?=[1-4](?!\w))/,
			er: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*er(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*er$|^er(?=[1-4](?!\w))/,
			i: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*i(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*i$|^i(?=[1-4](?!\w))/,
			ia: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*ia(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*ia$|^ia(?=[1-4](?!\w))/,
			ian: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*ian(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*ian$|^ian(?=[1-4](?!\w))/,
			iang: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*iang(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*iang$|^iang(?=[1-4](?!\w))/,
			iao: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*iao(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*iao$|^iao(?=[1-4](?!\w))/,
			ie: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*ie(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*ie$|^ie(?=[1-4](?!\w))/,
			in: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*in(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*in$|^in(?=[1-4](?!\w))/,
			ing: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*ing(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*ing$|^ing(?=[1-4](?!\w))/,
			io: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*io(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*io$|^io(?=[1-4](?!\w))/,
			iong: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*iong(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*iong$|^iong(?=[1-4](?!\w))/,
			iu: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*iu(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*iu$|^iu(?=[1-4](?!\w))/,
			o: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*o(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*o$|^o(?=[1-4](?!\w))/,
			ong: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*ong(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*ong$|^ong(?=[1-4](?!\w))/,
			ou: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*ou(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*ou$|^ou(?=[1-4](?!\w))/,
			u: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*u(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*u$|^u(?=[1-4](?!\w))/,
			ua: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*ua(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*ua$|^ua(?=[1-4](?!\w))/,
			uai: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*uai(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*uai$|^uai(?=[1-4](?!\w))/,
			uan: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*uan(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*uan$|^uan(?=[1-4](?!\w))/,
			uang: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*uang(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*uang$|^uang(?=[1-4](?!\w))/,
			ue: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*ue(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*ue$|^ue(?=[1-4](?!\w))/,
			ui: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*ui(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*ui$|^ui(?=[1-4](?!\w))/,
			un: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*un(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*un$|^un(?=[1-4](?!\w))/,
			uo: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*uo(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*uo$|^uo(?=[1-4](?!\w))/,
			v: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*v(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*v$|^v(?=[1-4](?!\w))/,
			ü: /[bcdfghjklmnpqrstwxyz][^aeiouüv]*ü(?=[1-4](?!\w))|[bcdfghjklmnpqrstwxyz][^aeiouüv]*ü$|^ü(?=[1-4](?!\w))/
		};

		/**
		 * Split a phrase into individual terms
		 * @param {String} phrase Phrase with more than one term
		 * @return {Array} Individual terms
		 */
		function splitPhrase(phrase) {
			phrase = phrase.replace(/\s{2,}/g, ' '); // only allow single spaces
			phrase = phrase.replace(/^\s+|\s+$/g, ''); // trim whitespace from beginning and end

			if (phrase.match(/\s/)) { // if string contains a space
				console.log('Multiple terms detected.');
				return phrase.split(' ');
			} else {
				console.log('One term detected.');
				return phrase;
			}
		}

		/**
		 * Match and deconstruct a term
		 * @param {String} term Term
		 * @return {String} Parts of a term
		 */
		function matchTerm(term) {
			console.log('Matching \'' + term + '\'...');
			var parts = ['', '', ''],
				key,
				value;
			for (key in endings) {
				if (endings.hasOwnProperty(key)) {
					value = endings[key];
					if (term.match(value)) {
						console.log('Term matched with ending \'' + key + '\'.');
						var termHasTone = term.match(/1|2|3|4/);
						if (termHasTone && term.indexOf(termHasTone) + 1 < term.length) {
							// remove unseparated text and punctuation after tone number
							term = term.substring(0, term.indexOf(Number(termHasTone)) + 1);
						}
						parts = term.split(key);
						parts.push(key);
					}
				}
			}
			if (parts[0] === '' && parts[1] === '' && parts[2] === '') {
				console.log('No matches.');
			}
			return parts;
		}

		/**
		 * Reconstruct a term ending
		 * @param {String} ending Term ending
		 * @param {number} tone Tone number
		 * @return {String} Finalized ending
		 */
		function reconstructEnding(ending, tone) {
			if (tone !== '' && ending !== '') {
				console.log('Reconstructing ending \'' + ending + '\' with Tone ' + tone + '...');
				var markedLetter,
					parts,
					reconstructedEnding;
				if (ending.match(/.*a(?![aeiouü])/)) {
					markedLetter = convertLetter('a' + tone);
					parts = ending.split('a');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*ai(?![aeiouü])/)) {
					markedLetter = convertLetter('a' + tone);
					parts = ending.split('a');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*ao(?![aeiouü])/)) {
					markedLetter = convertLetter('a' + tone);
					parts = ending.split('a');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*e(?![aeiouü])/)) {
					markedLetter = convertLetter('e' + tone);
					parts = ending.split('e');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*ei(?![aeiouü])/)) {
					markedLetter = convertLetter('e' + tone);
					parts = ending.split('e');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*i(?![aeiouü])/)) {
					markedLetter = convertLetter('i' + tone);
					parts = ending.split('i');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*ia(?![aeiouü])/)) {
					markedLetter = convertLetter('a' + tone);
					parts = ending.split('a');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*iao(?![aeiouü])/)) {
					markedLetter = convertLetter('a' + tone);
					parts = ending.split('a');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*ie(?![aeiouü])/)) {
					markedLetter = convertLetter('e' + tone);
					parts = ending.split('e');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*io(?![aeiouü])/)) {
					markedLetter = convertLetter('o' + tone);
					parts = ending.split('o');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*iu(?![aeiouü])/)) {
					markedLetter = convertLetter('u' + tone);
					parts = ending.split('u');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*o(?![aeiouü])/)) {
					markedLetter = convertLetter('o' + tone);
					parts = ending.split('o');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*ou(?![aeiouü])/)) {
					markedLetter = convertLetter('o' + tone);
					parts = ending.split('o');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*u(?![aeiouü])/)) {
					markedLetter = convertLetter('u' + tone);
					parts = ending.split('u');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*ua(?![aeiouü])/)) {
					markedLetter = convertLetter('a' + tone);
					parts = ending.split('a');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*uai(?![aeiouü])/)) {
					markedLetter = convertLetter('a' + tone);
					parts = ending.split('a');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*ue(?![aeiouü])/)) {
					markedLetter = convertLetter('e' + tone);
					parts = ending.split('e');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*ui(?![aeiouü])/)) {
					markedLetter = convertLetter('i' + tone);
					parts = ending.split('i');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*uo(?![aeiouü])/)) {
					markedLetter = convertLetter('o' + tone);
					parts = ending.split('o');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*v(?![aeiouü])/)) {
					markedLetter = convertLetter('v' + tone);
					parts = ending.split('v');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				} else if (ending.match(/.*ü(?![aeiouü])/)) {
					markedLetter = convertLetter('ü' + tone);
					parts = ending.split('ü');
					reconstructedEnding = parts[0] + markedLetter + parts[1];
				}
				// TODO: Add better support for -r (e.g. dian3r -> diǎnr)
				console.log('Created ending \'' + reconstructedEnding + '\'.');
			} else {
				reconstructedEnding = ending;
				console.log('Didn\'t create a new ending.');
			}
			return reconstructedEnding;
		}

		/**
		 * Convert a letter into a marked letter
		 * @param {String} letter Letter + tone number to be converted
		 * @return {String} Converted letter
		 */
		function convertLetter(letter) {
			var convertedLetter;
			switch (letter) {
				// a
				case 'a1':
					convertedLetter = 'ā';
					break;
				case 'a2':
					convertedLetter = 'á';
					break;
				case 'a3':
					convertedLetter = 'ǎ';
					break;
				case 'a4':
					convertedLetter = 'à';
					break;
				// e
				case 'e1':
					convertedLetter = 'ē';
					break;
				case 'e2':
					convertedLetter = 'é';
					break;
				case 'e3':
					convertedLetter = 'ě';
					break;
				case 'e4':
					convertedLetter = 'è';
					break;
				// i
				case 'i1':
					convertedLetter = 'ī';
					break;
				case 'i2':
					convertedLetter = 'í';
					break;
				case 'i3':
					convertedLetter = 'ǐ';
					break;
				case 'i4':
					convertedLetter = 'ì';
					break;
				// o
				case 'o1':
					convertedLetter = 'ō';
					break;
				case 'o2':
					convertedLetter = 'ó';
					break;
				case 'o3':
					convertedLetter = 'ǒ';
					break;
				case 'o4':
					convertedLetter = 'ò';
					break;
				// u
				case 'u1':
					convertedLetter = 'ū';
					break;
				case 'u2':
					convertedLetter = 'ú';
					break;
				case 'u3':
					convertedLetter = 'ǔ';
					break;
				case 'u4':
					convertedLetter = 'ù';
					break;
				// v
				case 'v1':
					convertedLetter = 'ǖ';
					break;
				case 'v2':
					convertedLetter = 'ǘ';
					break;
				case 'v3':
					convertedLetter = 'ǚ';
					break;
				case 'v4':
					convertedLetter = 'ǜ';
					break;
				// ü
				case 'ü1':
					convertedLetter = 'ǖ';
					break;
				case 'ü2':
					convertedLetter = 'ǘ';
					break;
				case 'ü3':
					convertedLetter = 'ǚ';
					break;
				case 'ü4':
					convertedLetter = 'ǜ';
					break;
			}
			return convertedLetter;
		}

		var textField = this;

		/**
		 * Perform conversion
		 */
		button.on('click', function () {
			if (textField.val() !== '') {
				var userInput = textField.val(); // save text inputted by user
				textField.val(''); // reset the text field

				var phrases = splitPhrase(userInput); // create an array comprising the terms
				if (typeof phrases !== 'string') {
					var termParts,
						convertedEnding,
						convertedTerm,
						key,
						value;
					for (key in phrases) {
						if (phrases.hasOwnProperty(key)) {
							value = phrases[key];
							termParts = matchTerm(value);
							convertedEnding = reconstructEnding(termParts[2], termParts[1]);
							convertedTerm = termParts[0] + convertedEnding;

							if (termParts[1] !== '') { // if conversion was made // TODO: Improve this check.
								if (textField.val() !== '') {
									textField.val(textField.val() + ' ' + convertedTerm); // append the term
								} else {
									textField.val(convertedTerm);
								}
							} else { // if no conversion was made
								if (textField.val() !== '') {
									textField.val(textField.val() + ' ' + value); // append the term
								} else {
									textField.val(value);
								}
							}
						}
					}
				} else {
					termParts = matchTerm(userInput);
					convertedEnding = reconstructEnding(termParts[2], termParts[1]);
					convertedTerm = termParts[0] + convertedEnding;
					if (convertedTerm !== '') {
						textField.val(convertedTerm);
					} else {
						textField.val(userInput);
					}
				}

				if (options.focusAfterConvert === true) {
					textField.focus();
				}
			}
		});
	};
})(jQuery);
