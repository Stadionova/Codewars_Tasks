// 5. Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples:

// если слово состоит из 5 и более букв - его нужно переворачивать
// иначе возвращать ту же переданную строку

function spinWords(str) {
    var separatedStr = str.split(' ');
    var newArr = [];
    for (var i = 0; i < separatedStr.length; i++) {
        if (separatedStr[i].length >= 5) {
            var separatedLetters = separatedStr[i].split('');
            var reverseWord = separatedLetters.reverse();
            var fullReverseWord = reverseWord.join('');
            newArr.push(fullReverseWord);
        } else {
            newArr.push(separatedStr[i]);
        }
    }
    return newArr.join(' ');
}
spinWords("Hey fellow warriors"); // returns "Hey wollef sroirraw"
spinWords("This is a test"); // returns "This is a test" 
spinWords("This is another test"); // returns "This is rehtona test"

// пора начать писать вот так:

function spinWords(words) {
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}