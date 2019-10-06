// 8. A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
// Ignore numbers and punctuation.

// длинный вариант:

function isPangram(string) {
    var strAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    var separatedArr = strAlphabet.split('');

    var strLowerCase = string.toLowerCase();
    var separatedStr = strLowerCase.split('');

    var booleanArr = [];

    for (var i = 0; i < separatedArr.length; i++) {
        var findedLetter = separatedStr.indexOf(separatedArr[i]);
        if (findedLetter != -1 || typeof separatedArr[i] != typeof 'str') {
            booleanArr.push(true);
        } else {
            booleanArr.push(false);
        }
    }
    var findedBoolean = booleanArr.indexOf(false);
    if (findedBoolean == -1) {
        return true;
    } else {
        return false;
    }
}
var string = "The quick brown fox jumps over the lazy dog."
isPangram(string); // true

var string = "This is not a pangram."
isPangram(string); // false

// короткий вариант:

function isPangram(string) {
    var strAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    var separatedArr = strAlphabet.split('');

    var strLowerCase = string.toLowerCase();
    var separatedStr = strLowerCase.split('');

    for (var i = 0; i < separatedArr.length; i++) {
        var findedLetter = separatedStr.indexOf(separatedArr[i]);
        if (findedLetter != -1 || typeof separatedArr[i] != typeof 'str') {
            continue;
        } else {
            return false;
        }
    }
    return true;
}
var string = "The quick brown fox jumps over the lazy dog."
isPangram(string); // true