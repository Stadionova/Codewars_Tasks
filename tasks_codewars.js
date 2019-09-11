// 1. In this kata you will create a function 
// that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// мой вариант решения верный:

function filter_list(l) {
    var fullCopy = [];
    for (var i = 0; i < l.length; i++) {
        var finded = l.indexOf(l[i]);
        if (typeof l[finded] !== typeof 'str') {
            fullCopy.push(l[finded]);
        }
    }
    return fullCopy;
}
filter_list([1, 2, 'a', 'b']) // [1,2]
filter_list([1, 'a', 'b', 0, 15]) // [1,0,15]
filter_list([1, 2, 'aasf', '1', '123', 123]) // [1,2,123]

// вариант чужой тоже верный и гораздо короче:

function filter_list(l) {
    return l.filter(function (v) { return typeof v == 'number' })
}
filter_list([1, 2, 'aasf', '1', '123', 123]) // [1,2,123]

// Антон объяснял, как работает filter:

[1, 2, "2312", {}].filter(function (e) { return e === 1 }) // [1]
[1, 2, "2312", {}].filter(function (e) { return e === {} }) // []
[1, 2, "2312", {}].filter(function (e) { return e > 1 }) // (2) [2, "2312"]

// 2. Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" 
// for the development and functioning of living organisms.
// If you want to know more http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// если по русски, то нужно A заменить на Т, а С заменить на G и наоборот:
// ура! получилось:

function DNAStrand(dna) {

    var lettersChange = {
        A: function (finded) {
            return separateLetters.splice(i, 1, 'T');
        },
        T: function (finded) {
            return separateLetters.splice(i, 1, 'A');
        },
        C: function (finded) {
            return separateLetters.splice(i, 1, 'G');
        },
        G: function (finded) {
            return separateLetters.splice(i, 1, 'C');
        },
    }

    var separateLetters = dna.split('');

    for (var i = 0; i < separateLetters.length; i++) {
        var finded = separateLetters[i];
        switch (finded) {
            case 'A':
                lettersChange.A();
                break;
            case 'T':
                lettersChange.T();
                break;
            case 'C':
                lettersChange.C();
                break;
            case 'G':
                lettersChange.G();
                break;
        }
    }
    return separateLetters.join('');
}
DNAStrand("ATTGC") // "TAACG"
DNAStrand("GTAT") // "CATA" 
DNAStrand("AAAA") // "TTTT"
DNAStrand("ATTGC") // "TAACG"
DNAStrand("GTAT", "CATA", "String GTAT is");

// 3. ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

// пин может содержать только 4 или 6 цифр, не больше и не меньше, и только цифры, буквы не допускаются:
// получилось, но не прохожу два теста с переносом строки:

function validatePIN(pin) {
    var separatedStr = pin.split('');
    if (separatedStr.length == 4 || separatedStr.length == 6) {
        var booleanResults = [];
        for (var i = 0; i < separatedStr.length; i++) {
            var finded = separatedStr.indexOf(separatedStr[i]);
            if (isNaN(separatedStr[finded]) == true) {
                booleanResults.push('false');
            } else {
                booleanResults.push('true');
            }
        }
        var checkBoolean = booleanResults.indexOf('false');
        if (checkBoolean == -1) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
validatePIN("1234"); // true
validatePIN("12345") // false
validatePIN("a234") // false

// как проверить, является ли содержимое строки допустимым числом:

isNaN('asd'); // true (является не числом => строка)
isNaN(123); // false (является числом)
isNaN('123'); // false (является числом)

// Тошино решение правильное, напрямую захардкодили перенос строки:

function validatePIN(pin) {
    var breakSymbol = `
`;
    var separatedStr = pin.split('');
    console.log('separatedStr: ' + separatedStr);
    if (separatedStr.length == 4 || separatedStr.length == 6) {
        var booleanResults = [];
        for (var i = 0; i < separatedStr.length; i++) {
            var finded = separatedStr.indexOf(separatedStr[i]);
            if (isNaN(separatedStr[finded]) == false
                && typeof +separatedStr[finded] == "number"
                && separatedStr[finded] != breakSymbol) {
                booleanResults.push('true');
            } else {
                console.log('is false:' + separatedStr[finded] + ":");
                booleanResults.push('false');
            }
        }
        var checkBoolean = booleanResults.indexOf('false');
        if (checkBoolean == -1) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
validatePIN("1234"); // true
validatePIN("12345") // false
validatePIN("a234") // false

// 4. You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

// если по русски, то нужно написать функцию, которая будет возвращать следующее число после переданного, 
// корень от которого берётся без остатка
// если из переданного числа нельзя взять корень без остатка, то возвращать -1

function findNextSquare(number) {
    if (number % Math.sqrt(number) == 0) {
        var sqrNumber = Math.sqrt(number);
        var nextNumber = ++sqrNumber ** 2;
        return nextNumber;
    } else {
        return -1;
    }
}
findNextSquare(121) // 11 // returns 144 --> 12
findNextSquare(625) // 25 // returns 676 --> 26
findNextSquare(114) // returns -1 since 114 is not a perfect

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

// 6. You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. 
// For 4 or more names, the number in and 2 others simply increases.
// It must return the display text as shown in the examples:

function likes(arr) {
    if (arr.length != 0) {
        switch (arr.length) {
            case 1:
                return arr[0] + ' likes this';
            case 2:
                return arr[0] + ' and ' + arr[1] + ' like this';
            case 3:
                return arr[0] + ', ' + arr[1] + ' and ' + arr[2] + ' like this';
            default:
                var arrLength = arr.length - 2;
                return arr[0] + ', ' + arr[1] + ' and ' + arrLength + ' others like this';
        }
    } else {
        return 'no one likes this';
    }
}
likes([]); // must be "no one likes this"
likes(["Peter"]); // must be "Peter likes this"
likes(["Jacob", "Alex"]); // must be "Jacob and Alex like this"
likes(["Max", "John", "Mark"]); // must be "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]); // must be "Alex, Jacob and 2 others like this"

// 7. Given: an array containing hashes of names.
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

// мой вариант:

function list(arr) {
    if (arr.length != 0) {
        var newStrArr = [];
        for (var i = 0; i < arr.length; i++) {
            newStrArr.push(arr[i].name);
        }
        switch (newStrArr.length) {
            case 1:
                return newStrArr[0];
            case 2:
                return newStrArr[0] + ' & ' + newStrArr[1];
            default:
                var newCopyArray = newStrArr.slice();
                var newCopyArrayLength = newCopyArray.length - 1;
                newCopyArray.splice(newCopyArrayLength);
                var newJoinArr = newCopyArray.join(', ');
                return newJoinArr + ' & ' + newStrArr[newCopyArrayLength];
        }
    } else {
        return '';
    }
}
list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]); // returns 'Bart, Lisa & Maggie'
list([{ name: 'Bart' }, { name: 'Lisa' }]); // returns 'Bart & Lisa'
list([{ name: 'Bart' }]); // returns 'Bart'
list([]); // returns ''

// Тошин вариант:

function list(arr) {
    let fisrtPart = arr.slice(0, -1);
    let lastElem = arr[arr.length - 1];

    if (arr.length === 1) {
        return lastElem.name;
    }

    if (arr.length === 0) {
        return '';
    }

    let firstPartString = fisrtPart.map(e => e.name).join(', ');
    return `${firstPartString} & ${lastElem.name}`;
}

list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'john' }]); // returns 'Bart, Lisa & Maggie'
list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]); // returns 'Bart, Lisa & Maggie'
list([{ name: 'Bart' }, { name: 'Lisa' }]); // returns 'Bart & Lisa'
list([{ name: 'Bart' }]); // returns 'Bart'
list([]); // returns ''

// пример использования map:

[{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'john' }]
    .map(function (elem) {
        return elem.name + '___'
    })

// 8. A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

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

// 9. The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. 
// What's the use of saying "Eureka"? Because this sum gives the same number.
// In effect: 89 = 8^1 + 9^2
// The next number in having this property is 135.
// See this property again: 135 = 1^1 + 3^2 + 5^3
// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) 
// and outputs a list of the sorted numbers in the range that fulfills the property described above.

sumDigPow(1, 10) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
sumDigPow(1, 100) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []

// мой недоделанный вариант:

function sumDigPow(startElem, endElem) {
    let arrElem = [];
    let newArrElem = [];
    for (let i = startElem; i <= endElem; i++) {
        arrElem.push(i);
        var separated = arrElem[i - 1] + '';
        var newSeparated = separated.split('');
        let powShortElem, powLongElem;
        if (+newSeparated.length == 1) {
            powShortElem = Math.pow(newSeparated, 1);
        } else {
            powLongElem = Math.pow(newSeparated[0], 1) + Math.pow(newSeparated[1], 2);

        }
        if (separated == powShortElem) {
            newArrElem.push(powShortElem);
        } else if (separated == powLongElem) {
            newArrElem.push(powLongElem);
        } else {
            continue;
        }
    }
    return newArrElem;
}
sumDigPow(1, 10) // [1, 2, 3, 4, 5, 6, 7, 8, 9] 89 = 8^1 + 9^2

// работающий вариант Тоши:

function calcSumPowsDigits(num) {
    let digitsArr = (num).toString().split('');
    sumOfPows = 0;
    digitsArr.forEach((digit, i) => {
        let digitPowed = Math.pow(digit, i + 1);
        sumOfPows += digitPowed;
    })
    return sumOfPows;
}

function generateNumbersArr(start, end) {
    let numbersArr = [];
    for (let i = start; i <= end; i++) {
        numbersArr.push(i);
    }
    return numbersArr;
}

function findMagicNumbers(numbersArr) {
    let findedMagicNumbers = [];
    numbersArr.forEach((number, i) => {
        let sumPows = calcSumPowsDigits(number);
        if (sumPows === number) {
            findedMagicNumbers.push(number);
        }
    });
    return findedMagicNumbers;
}

let numbersArr = generateNumbersArr(1, 100);
findMagicNumbers(numbersArr);

// тот же Тошин вариант, но с вызовом из кодварс:

function calcSumPowsDigits(num) {
    let digitsArr = (num).toString().split('');
    sumOfPows = 0;
    digitsArr.forEach((digit, i) => {
        let digitPowed = Math.pow(digit, i + 1);
        sumOfPows += digitPowed;
    })
    return sumOfPows;
}

function sumDigPow(start, end) {
    let numbersArr = [];
    for (let i = start; i <= end; i++) {
        numbersArr.push(i);
    }
    let findedMagicNumbers = [];
    numbersArr.forEach((number, i) => {
        let sumPows = calcSumPowsDigits(number);
        if (sumPows === number) {
            findedMagicNumbers.push(number);
        }
    });
    return findedMagicNumbers;
}

sumDigPow(1, 10);

// 10. Write Number in Expanded Form.
// You will be given a number and you will need to return it as a string in Expanded Form.
// All numbers will be whole numbers greater than 0.

function expandedForm(x) {
    var strX = x.toString().split('');
    var lengthX = strX.length;
    var arr = [];
    for (var i = 0; i < lengthX; i++) {
        if (strX[i] > 0) {
            var countZeroes = '0'.repeat(lengthX - i - 1);
            arr.push(+strX[i] + countZeroes);
        }
    }
    return arr.join(' + ');
}

expandedForm(74036); // "70000 + 4000 + 30 + 6"

// 11. If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
    var mulArr = [];
    var sumElemArr = 0;
    for (var i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            mulArr.push(i);
            sumElemArr += i;
        }
    }
    return sumElemArr;
}

solution(56);

// 12. Pete likes to bake some cakes. He has some recipes and ingredients. 
// Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
// and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts 
// (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// другой способ, но через него не решила:

function cakes(recipe, available) { // это ассоциативный массив
    var newArrAssRecipe = Object.entries(recipe); // преобразовала объект recipe в Массив пар ключ-значение
    // 0: (2) ["flour", 500]
    // 1: (2) ["sugar", 200]
    // 2: (2) ["eggs", 1]
    var nameRecipe = newArrAssRecipe[0][0];
    var quantityRecipe = newArrAssRecipe[0][1];
    console.log(nameRecipe);
    console.log(quantityRecipe);

    var newArrAssAvailable = Object.entries(available); // преобразовала объект available в Массив пар ключ-значение
    // 0: (2) ["flour", 1200]
    // 1: (2) ["sugar", 1200]
    // 2: (2) ["eggs", 5]
    // 3: (2) ["milk", 200]
    var nameAvailable = newArrAssAvailable[0][0];
    var quantityAvailable = newArrAssAvailable[0][1];
    console.log(nameAvailable);
    console.log(quantityAvailable);
}
cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });

// Тошина помощь:

function cakes(recipe, available) {
    for (var key in recipe) {
        console.log("key:" + key + " av:" + available[key]);
    }
}
cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });
// key:flour av:1200
// VM1360:3 key:sugar av:1200
// VM1360:3 key:eggs av:5

// решила блять:

function cakes(recipe, available) {
    var arrRecipe = [];
    var arrAvailable = [];

    var arrRecipeNumber = [];
    var arrAvailableNumber = [];

    var finalSum = [];

    for (var key in recipe) {
        arrRecipe.push(key);
        var nameRecipe = key;
        arrRecipeNumber.push(recipe[key]);
    }

    for (var key in available) {
        arrAvailable.push(key);
        var nameAvailable = key;
        arrAvailableNumber.push(available[key]);

    }
    for (var i = 0; i < arrRecipe.length; i++) {
        var finded = arrAvailable.indexOf(arrRecipe[i]);

        if (finded == -1 || arrAvailableNumber[finded] < arrRecipeNumber[i]) {
            return 0;
        } else if (arrRecipeNumber[i] > arrAvailableNumber[finded]) {
            var delRecipe = Math.floor(arrRecipeNumber[i] / arrAvailableNumber[finded]);
            finalSum.push(delRecipe);
        } else {
            var delAvailable = Math.floor(arrAvailableNumber[finded] / arrRecipeNumber[i]);
            finalSum.push(delAvailable);
        }
    }
    finalSum.sort(function (a, b) {
        return a - b;
    });

    return finalSum[0];
}

cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });
cakes({ "sugar": 1, "butter": 66, "cream": 20 }, {
    "cocoa": 8500, "chocolate": 7200, "butter": 7800, "apples": 1900,
    "crumbles": 5400, "milk": 9400, "pears": 6300, "nuts": 700, "flour": 2900, "cream": 700, "oil": 3400, "sugar": 100, "eggs": 7900
});

// 13. You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071

// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// Test.assertEquals(nextBigger(12), 21)
// Test.assertEquals(nextBigger(513), 531)
// Test.assertEquals(nextBigger(2017), 2071)
// Test.assertEquals(nextBigger(414), 441)
// Test.assertEquals(nextBigger(144), 414)

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var stringN = n + '';
    var separatedN = stringN.split('');
    do {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
    } while (n >= fullRandomArr);
    return fullRandomArr;
}
nextBigger(12);




function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    do {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        if (fullRandomArr > n) { // исключает рандомные варианты меньше переданного числа
            arrAllVariants.push(fullRandomArr);
        }
    } while (n >= fullRandomArr);
    return arrAllVariants;
}
nextBigger(12);






function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    while (n >= fullRandomArr) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        arrAllVariants.push(fullRandomArr);
        if (arrAllVariants.length == 0) {
            return -1;
        }
    }
    return arrAllVariants;
}
nextBigger(25);





// новый ход решения:

function nextBigger(n) {
    var stringN = n + '';
    var separatedN = stringN.split('');
    separatedN.sort(function (a, b) {
        return a - b;
    });
    console.log(separatedN);
}
nextBigger(598123);






function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    do {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        if (fullRandomArr > n) {
            arrAllVariants.push(fullRandomArr);
            if (arrAllVariants.length == 0) {
                return -1;
            } else {
                continue;
            }
        }
    } while (n >= fullRandomArr)
    return arrAllVariants;
}
nextBigger(25);





function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    do {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        if (fullRandomArr >= n) {
            arrAllVariants.push(fullRandomArr);
            var indexN = arrAllVariants.indexOf(n);
            delete arrAllVariants[indexN];
            if (fullRandomArr[0] == n) {
                return -1;
            } else {
                continue;
            }
        }
    } while (n >= fullRandomArr)
    return arrAllVariants;
}
nextBigger(566);










function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    do {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        if (fullRandomArr >= n) {
            arrAllVariants.push(fullRandomArr);
            var indexN = arrAllVariants.indexOf(n);
            delete arrAllVariants[indexN];
            if (fullRandomArr[0] == n) {
                return -1;
            } else {
                continue;
            }
        }
    } while (n >= fullRandomArr)
    arrAllVariants.sort(function (a, b) {
        return a - b;
    });
    return arrAllVariants[0];
}
nextBigger(566);






function factorial(separatedN) {
    var numberLength = separatedN.length;
    return numberLength ? numberLength * factorial(numberLength - 1) : 1;
}
var factorialN = factorial(separatedN);

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    do {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        if (fullRandomArr >= n) {
            arrAllVariants.push(fullRandomArr);
            var indexN = arrAllVariants.indexOf(n);
            delete arrAllVariants[indexN];
            if (fullRandomArr[0] == n) {
                return -1;
            } else {
                continue;
            }
        }
    } while (n >= fullRandomArr)
    return arrAllVariants;
}
nextBigger(566);




// работает что-то, но неправильно:

function factorial(separatedN) {
    var numberLength = separatedN.length;
    return numberLength ? numberLength * factorial(numberLength - 1) : 1;
}

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var factorialN = factorial(separatedN);
    for (var i = 0; i <= factorialN; i++) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        if (fullRandomArr >= n) {
            arrAllVariants.push(fullRandomArr);
            var indexN = arrAllVariants.indexOf(n);
            delete arrAllVariants[indexN];
            if (fullRandomArr[0] == n) {
                return -1;
            } else {
                continue;
            }
        }
    }
    return arrAllVariants;
}
nextBigger(566);








function factorial(separatedN) {
    var numberLength = separatedN.length;
    return numberLength ? numberLength * factorial(numberLength - 1) : 1;
}

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var factorialN = factorial(separatedN);
    for (var i = 0; i < factorialN; i++) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        console.log(fullRandomArr);
        if (fullRandomArr > n) {
            arrAllVariants.push(fullRandomArr);
            var indexN = arrAllVariants.indexOf(n);
            delete arrAllVariants[indexN];
            if (fullRandomArr[0] == n) {
                return -1;
            } else {
                continue;
            }
        }
    }
    return arrAllVariants;
}
nextBigger(566);




// вроде правильно, но факторила считается неверно:

function factorial(separatedN) {
    var numberLength = separatedN.length;
    return numberLength ? numberLength * factorial(numberLength - 1) : 1;
}

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var factorialN = factorial(separatedN);
    for (var i = 0; i < factorialN; i++) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        console.log(fullRandomArr);
        if (fullRandomArr > n) {
            arrAllVariants.push(fullRandomArr);
            var indexN = arrAllVariants.indexOf(n);
            delete arrAllVariants[indexN];
            if (fullRandomArr[0] == n) {
                return -1;
            } else {
                continue;
            }
        }
    }
    arrAllVariants.sort(function (a, b) {
        return a - b;
    });
    return arrAllVariants[0];
}
nextBigger(5468);



// формула расчёта факториала:

var arr = [5, 7, 8];
var lengthArr = arr.length;

function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

var func = factorial(lengthArr);
console.log(func);






function factorial(lengthArr) { // расчёт факториала
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);
    if (lengthArr == 1) {
        return -1;
    }
    for (var i = 0; i <= func; i++) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        if (fullRandomArr > n) {
            arrAllVariants.push(fullRandomArr);
            var indexN = arrAllVariants.indexOf(n);
            delete arrAllVariants[indexN];
            if (fullRandomArr[0] == n) {
                return -1;
            } else {
                continue;
            }
        }
    }
    arrAllVariants.sort(function (a, b) {
        return a - b;
    });
    console.log(arrAllVariants);
    return arrAllVariants[0];
}
nextBigger(2017);





// бля почти:

function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);
    if (lengthArr == 1) {
        return -1;
    }
    for (var i = 0; i < func; i++) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;
        if (strToNumber > n) {
            arrAllVariants.push(strToNumber);
            var indexN = arrAllVariants.indexOf(n);
            delete arrAllVariants[indexN];
            i--;
        }
    }
    arrAllVariants.sort(function (a, b) {
        return a - b;
    });
    console.log(arrAllVariants);
    return arrAllVariants[0];
}
nextBigger(12);







function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);
    if (lengthArr == 1) {
        return -1;
    }
    for (var i = 0; i < func; i++) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;
        if (strToNumber > n) {
            arrAllVariants.push(strToNumber);
            //             var indexN = arrAllVariants.indexOf(n);
            //             delete arrAllVariants[indexN];
            // 			i--;
        } else {
            i--;
            continue;
        }
    }
    arrAllVariants.sort(function (a, b) {
        return a - b;
    });
    console.log(arrAllVariants);
    return arrAllVariants[0];
}
nextBigger(56);







// бляяяяяяя:

function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (lengthArr == 1) { // работает
        return -1;
    }

    for (var i = 0; i < func; i++) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;
        if (strToNumber > n) {
            arrAllVariants.push(strToNumber);
        }
        if (strToNumber == n) {
            i--;
        }
    }

    if (arrAllVariants.length == 0) {
        return -1;
    } else {
        arrAllVariants.sort(function (a, b) { return a - b; });
        console.log(arrAllVariants);
        return arrAllVariants[0];
    }
}
nextBigger(513);








function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var doubleNumbers = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (lengthArr == 1) { // работает
        return -1;
    }

    for (var i = 0; i < func; i++) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;
        if (strToNumber > n) {
            arrAllVariants.push(strToNumber);
        }
        if (strToNumber === n) {
            i--;
        }
        if (arrAllVariants.length > 1) {
            var indexN = arrAllVariants.indexOf(strToNumber);
            delete arrAllVariants[indexN];
        }
    }

    if (arrAllVariants.length == 0) {
        return -1;
    } else {
        arrAllVariants.sort(function (a, b) { return a - b; });
        console.log(arrAllVariants);
        return arrAllVariants[0];
    }
}
nextBigger(513);







function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (lengthArr == 1) {
        return -1;
    }

    var newSeparatedN = separatedN;
    var changeArr = newSeparatedN.sort(function (a, b) { return b - a; });
    var numberChange = changeArr.join('');

    if (+numberChange === +stringN) {
        return -1 + 'ha';
    }

    for (var i = 0; i < func;) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;

        if (strToNumber > n) {
            arrAllVariants.push(strToNumber);
            if (arrAllVariants.length > 2) {
                var indexN = arrAllVariants.indexOf(strToNumber);
                if (indexN != -1) {
                    var arr = ["Я", "изучаю", "JavaScript"];
                    arrAllVariants.splice(1, indexN);
                    //                 	delete arrAllVariants[indexN];
                } else {
                    i++;
                }
            } else {
                i++;
            }
        }
        if (strToNumber === n) {
            continue;
        }
    }
    arrAllVariants.sort(function (a, b) { return a - b; });
    console.log(arrAllVariants);
    return arrAllVariants[0];
}
nextBigger(2017);







function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (lengthArr == 1) {
        return -1;
    }

    var newSeparatedN = separatedN;
    var changeArr = newSeparatedN.sort(function (a, b) { return b - a; });
    var numberChange = changeArr.join('');

    if (+numberChange === +stringN) {
        return -1 + 'ha';
    }

    for (var i = 0; i < func;) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;

        if (strToNumber > n) {
            arrAllVariants.push(strToNumber);
        }

        if (arrAllVariants.length > 1) {
            var indexN = arrAllVariants.indexOf(strToNumber);
            if (indexN != -1) {
                arrAllVariants.splice(1, indexN);
            } else {
                i++;
            }
        }

        if (strToNumber === n) {
            continue;
        }
    }
    arrAllVariants.sort(function (a, b) { return a - b; });
    console.log(arrAllVariants);
    return arrAllVariants[0];
}
nextBigger(2017);












function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var indexN;
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (lengthArr == 1) {
        return -1;
    }

    var newSeparatedN = separatedN; // проверка на отсутствие вариантов больше n
    var changeArr = newSeparatedN.sort(function (a, b) { return b - a; });
    var numberChange = changeArr.join('');
    if (+numberChange === +stringN) {
        return -1 + 'ha';
    }

    for (var i = 0; i < func; i++) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;
        console.log('random number ' + strToNumber);

        if (strToNumber > n) { // заходим
            arrAllVariants.push(strToNumber);
            console.log('запушила в массив число больше n ' + arrAllVariants);
            indexN = arrAllVariants.indexOf(strToNumber);
            if (indexN != -1) {
                arrAllVariants.splice(1, indexN);
            }
        } else if (strToNumber <= n) {
            continue;
        }
    }
    arrAllVariants.sort(function (a, b) { return a - b; });
    return arrAllVariants[0];
}
nextBigger(2017); // 2071











function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var indexN;
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);
    console.log('factorial ' + func);

    if (lengthArr == 1) {
        return -1;
    }

    var newSeparatedN = separatedN; // проверка на отсутствие вариантов больше n
    var changeArr = newSeparatedN.sort(function (a, b) { return b - a; });
    var numberChange = changeArr.join('');
    if (+numberChange === +stringN) {
        return -1 + 'ha';
    }

    for (var i = 0; i < func; i++) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;
        console.log('random number ' + strToNumber);

        if (strToNumber > n) { // заходим
            arrAllVariants.push(strToNumber);
            console.log('запушила в массив число больше n ' + arrAllVariants);
            if (arrAllVariants.length > 1) {
                indexN = arrAllVariants.indexOf(strToNumber);
                console.log('index ' + indexN);
                if (indexN != -1) {
                    arrAllVariants.splice(1, indexN);
                }
            }
        } else {
            i--;
        }

    }
    arrAllVariants.sort(function (a, b) { return a - b; });
    return arrAllVariants[0];
}
nextBigger(2017); // 2071













function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);
    console.log('factorial ' + func);

    if (lengthArr == 1) {
        return -1;
    }

    var newSeparatedN = separatedN; // проверка на отсутствие вариантов больше n
    var changeArr = newSeparatedN.sort(function (a, b) { return b - a; });
    var numberChange = changeArr.join('');
    if (+numberChange === +stringN) {
        return -1 + 'ha';
    }

    for (var i = 0; i < func;) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;
        console.log('random number ' + strToNumber);

        if (strToNumber > n) { // заходим
            arrAllVariants.push(strToNumber);
            console.log('итого массив ' + arrAllVariants);
        } else {
            continue;
        }

        if (arrAllVariants.length > 1) {
            var indexN = arrAllVariants.indexOf(strToNumber);
            console.log('index ' + indexN);
            if (indexN != -1) {
                arrAllVariants.splice(1, indexN);
            }
        } else {
            i++;
            continue;
        }
    }
    arrAllVariants.sort(function (a, b) { return a - b; }));
    return arrAllVariants[0];
}
nextBigger(2017); // 2071





function factorial(lengthArr) { // функция факторила
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) { // функция рандома
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function unique(arrAllVariants) { // функция проверки на уникальность
    var obj = {};
    for (var i = 0; i < arrAllVariants.length; i++) {
        var str = arrAllVariants[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (lengthArr == 1) {
        return -1;
    }

    var newSeparatedN = separatedN; // проверка на отсутствие вариантов больше n
    var changeArr = newSeparatedN.sort(function (a, b) { return b - a; });
    var numberChange = changeArr.join('');
    if (+numberChange === +stringN) {
        return -1;
    }

    for (var i = 0; i < func;) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;

        if (strToNumber > n) {
            arrAllVariants.push(strToNumber);
            var newUniqueArr = unique(arrAllVariants);
            i++;
        } else {
            continue;
        }
    }
    newUniqueArr.sort(function (a, b) { return a - b; });
    return +newUniqueArr[0];
}
nextBigger(2017); // 2071






// функция проверки на уникальность:

var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];

function unique(arr) {
    var newArr = [];
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
    }

    return Object.keys(obj); // или собрать ключи перебором для IE8-

    for (var key in strings) {
        newArr.push(key);
    }

    console.log(newArr)
}

unique(strings); // кришна, харе, 8-()







function factorial(lengthArr) { // функция факторила
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) { // функция рандома
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function unique(arrAllVariants) { // функция проверки на уникальность
    var obj = {};
    for (var i = 0; i < arrAllVariants.length; i++) {
        var str = arrAllVariants[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (lengthArr == 1) {
        return -1;
    }

    var newSeparatedN = separatedN; // проверка на отсутствие вариантов больше n
    var changeArr = newSeparatedN.sort(function (a, b) { return b - a; });
    var numberChange = changeArr.join('');
    if (+numberChange === +stringN) {
        return -1;
    }

    for (var i = 0; i < func;) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;

        if (strToNumber > n) {
            arrAllVariants.push(strToNumber);
            var newUniqueArr = unique(arrAllVariants);
            if (newUniqueArr.length <= 1) {
                i--;
            }
            i++;
        } else {
            continue;
        }
    }
    newUniqueArr.sort(function (a, b) { return a - b; });
    console.log(newUniqueArr);
    return +newUniqueArr[0];
}
nextBigger(144); // 414






function factorial(lengthArr) { // функция факторила
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) { // функция рандома
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function unique(arrAllVariants) { // функция проверки на уникальность
    var obj = {};
    for (var i = 0; i < arrAllVariants.length; i++) {
        var str = arrAllVariants[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (lengthArr == 1) {
        return -1;
    }

    var newSeparatedN = separatedN; // проверка на отсутствие вариантов больше n
    var changeArr = newSeparatedN.sort(function (a, b) { return b - a; });
    var numberChange = changeArr.join('');
    if (+numberChange === +stringN) {
        return -1;
    }

    for (var i = 0; i < func;) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;

        if (strToNumber > n) {
            arrAllVariants.push(strToNumber);
            var newUniqueArr = unique(arrAllVariants);
            if (newUniqueArr.length <= 1 && i == func) {
                i--;
            }
            i++;
        } else {
            continue;
        }

        if (newUniqueArr.length == func) {
            break;
        }
    }
    newUniqueArr.sort(function (a, b) { return a - b; });
    console.log(arrAllVariants);
    console.log(newUniqueArr);
    return +newUniqueArr[0];
}
nextBigger(2017); // 414







// через indexOf:

function factorial(lengthArr) { // функция факторила
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) { // функция рандома
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function unique(arrAllVariants) { // функция проверки на уникальность
    var obj = {};
    for (var i = 0; i < arrAllVariants.length; i++) {
        var str = arrAllVariants[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (lengthArr == 1) {
        return -1;
    }

    var newSeparatedN = separatedN; // проверка на отсутствие вариантов больше n
    var changeArr = newSeparatedN.sort(function (a, b) { return b - a; });
    var numberChange = changeArr.join('');
    if (+numberChange === +stringN) {
        return -1;
    }

    for (var i = 0; i < func;) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;

        if (strToNumber > n) {
            var indexN = arrAllVariants.indexOf(strToNumber);
            if (indexN != -1) {
                arrAllVariants.splice(1, indexN);
                continue;
            } else {
                arrAllVariants.push(strToNumber);
                i++;
            }
        } else {
            continue;
        }
    }
    arrAllVariants.sort(function (a, b) { return a - b; });
    console.log(arrAllVariants);
    return +arrAllVariants[0];
}
nextBigger(2017); // 414





// ну сука почти:

function factorial(lengthArr) { // функция факторила
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) { // функция рандома
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function unique(arrAllVariants) { // функция проверки на уникальность
    var obj = {};
    for (var i = 0; i < arrAllVariants.length; i++) {
        var str = arrAllVariants[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (lengthArr == 1) {
        return -1;
    }

    var newSeparatedN = separatedN; // проверка на отсутствие вариантов больше n
    var changeArr = newSeparatedN.sort(function (a, b) { return b - a; });
    var numberChange = changeArr.join('');
    if (+numberChange === +stringN) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;

        if (strToNumber > n) {
            arrAllVariants.push(strToNumber);
            var indexN = arrAllVariants.indexOf(strToNumber);
            if (indexN != -1) {
                continue;
            }
        } else {
            continue;
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    console.log(arrAllVariants);
    return +arrAllVariants[0];
}
nextBigger(2017); // 414










function factorial(lengthArr) { // функция факторила
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) { // функция рандома
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function unique(arrAllVariants) { // функция проверки на уникальность
    var obj = {};
    for (var i = 0; i < arrAllVariants.length; i++) {
        var str = arrAllVariants[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (lengthArr == 1) {
        return -1;
    }

    var newSeparatedN = separatedN; // проверка на отсутствие вариантов больше n
    var changeArr = newSeparatedN.sort(function (a, b) { return b - a; });
    var numberChange = changeArr.join('');
    if (+numberChange === +stringN) {
        return -1;
    }

    while (arrAllVariants.length != func - 1) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;

        if (strToNumber > n) {
            var indexN = arrAllVariants.indexOf(strToNumber);
            if (indexN == -1) {
                arrAllVariants.push(strToNumber);
            }
        }

    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    console.log(arrAllVariants);
    return +arrAllVariants[0];
}
nextBigger(2017);









function factorial(lengthArr) { // функция факторила
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) { // функция рандома
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function unique(arrAllVariants) { // функция проверки на уникальность
    var obj = {};
    for (var i = 0; i < arrAllVariants.length; i++) {
        var str = arrAllVariants[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;

        var indexN = arrAllVariants.indexOf(strToNumber);
        if (indexN == -1) {
            arrAllVariants.push(strToNumber);
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    var indexNumber = arrAllVariants.indexOf(n);
    var fullArr = arrAllVariants.slice(indexNumber + 1);
    return +fullArr[0];
}
nextBigger(2017);











function factorial(lengthArr) { // функция факторила
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) { // функция рандома
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function unique(separatedN) { // функция проверки на уникальность
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var newUniqueArr = unique(separatedN);
    var lengthArr = newUniqueArr.length;
    var func = factorial(lengthArr);

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;

        var indexN = arrAllVariants.indexOf(strToNumber);
        if (indexN == -1) {
            arrAllVariants.push(strToNumber);
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    var indexNumber = arrAllVariants.indexOf(n);
    var fullArr = arrAllVariants.slice(indexNumber + 1);
    return +fullArr[0];
}
nextBigger(414);








function factorial(lengthArr) { // функция факторила
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) { // функция рандома
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function unique(separatedN) { // функция проверки на уникальность
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr) {
        var func = factorial(lengthArrShort);
    }

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;

        var indexN = arrAllVariants.indexOf(strToNumber);
        if (indexN == -1) {
            arrAllVariants.push(strToNumber);
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    var indexNumber = arrAllVariants.indexOf(n);
    var fullArr = arrAllVariants.slice(indexNumber + 1);
    console.log(arrAllVariants);
    return +fullArr[0];
}
nextBigger(144);









function factorial(lengthArr) { // функция факторила
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) { // функция рандома
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function unique(separatedN) { // функция проверки на уникальность
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr) {
        func = lengthArr;
    }

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;

        var indexN = arrAllVariants.indexOf(strToNumber);
        if (indexN == -1) {
            arrAllVariants.push(strToNumber);
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    var indexNumber = arrAllVariants.indexOf(n);
    var fullArr = arrAllVariants.slice(indexNumber + 1);
    console.log(arrAllVariants);
    return +fullArr[0];
}
nextBigger(144);







function factorial(lengthArr) { // функция факторила
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) { // функция рандома
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function unique(separatedN) { // функция проверки на уникальность
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr) {
        func = lengthArr;
    }

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');
        var strToNumber = +fullRandomArr;

        var indexN = arrAllVariants.indexOf(strToNumber);
        if (indexN == -1) {
            arrAllVariants.push(strToNumber);
        }
        for (var i = 0; i < func; i++) {
            if (i == func && arrAllVariants.length == 1) {
                return n;
            }
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    var indexNumber = arrAllVariants.indexOf(n);
    var fullArr = arrAllVariants.slice(indexNumber + 1);
    console.log(arrAllVariants);
    return +fullArr[0];
}
nextBigger(144);











function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function unique(separatedN) {
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (separatedN.every((val, i, separatedN) => val === separatedN[0]) == true) {
        console.log(n);
    }

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr) {
        func = lengthArr;
    }

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = +randomArr.join('');

        var indexN = arrAllVariants.indexOf(fullRandomArr);
        if (indexN == -1) {
            arrAllVariants.push(fullRandomArr);
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });

    if (arrAllVariants[lengthArr - 1] == n) {
        return n;
    }

    let testFilter = arrAllVariants.filter(element => element > n);
    return testFilter[0];
}
nextBigger(111);





















// готово:

function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function unique(separatedN) {
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (separatedN.every((val, i, separatedN) => val === separatedN[0]) == true) {
        console.log(n);
    }

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr) {
        func = lengthArr;
    }

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = +randomArr.join('');

        var indexN = arrAllVariants.indexOf(fullRandomArr);
        if (indexN == -1) {
            arrAllVariants.push(fullRandomArr);
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });

    if (arrAllVariants[lengthArr - 1] == n) {
        return n;
    }

    let testFilter = arrAllVariants.filter(element => element > n);
    return testFilter[0];
}

nextBigger(111);









function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function unique(separatedN) {
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (separatedN.every((val, i, separatedN) => val === separatedN[0]) == true) {
        console.log(n);
    }

    if (lengthArr == 1) {
        return -1;
    }

    for (var i = 0; i < func;) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = +randomArr.join('');

        var indexN = arrAllVariants.indexOf(fullRandomArr);
        if (indexN == -1) {
            arrAllVariants.push(fullRandomArr);
            i++;
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });

    if (arrAllVariants[arrAllVariants.length - 1] == n) {
        return n;
    }

    let testFilter = arrAllVariants.filter(element => element > n);
    return testFilter[0];
}

nextBigger(316);








function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function unique(separatedN) {
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (separatedN.every((val, i, separatedN) => val === separatedN[0]) == true) {
        console.log(n);
    }

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr) {
        func = lengthArr;
    }

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = +randomArr.join('');

        var indexN = arrAllVariants.indexOf(fullRandomArr);
        if (indexN == -1) {
            arrAllVariants.push(fullRandomArr);
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });

    if (arrAllVariants[arrAllVariants.length - 1] == n) {
        return n;
    }

    let testFilter = arrAllVariants.filter(element => element > n);
    return testFilter[0];
}

nextBigger(111);







function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function unique(separatedN) {
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (separatedN.every((val, i, separatedN) => val === separatedN[0]) == true) {
        console.log(n);
    }

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr) {
        func = (lengthArr * 2) + 2;
    }

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = +randomArr.join('');

        var indexN = arrAllVariants.indexOf(fullRandomArr);
        if (indexN == -1) {
            arrAllVariants.push(fullRandomArr);
        }
    }

    if (arrAllVariants[arrAllVariants.length - 1] == n) {
        return n;
    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    console.log(arrAllVariants);
    return arrAllVariants[1];
}

nextBigger(3356);






function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function unique(separatedN) {
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (separatedN.every((val, i, separatedN) => val === separatedN[0]) == true) {
        console.log(n);
    }

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr && lengthArr >= 4) { //для 12333
        func = (lengthArr * 4); // !4
    }

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = +randomArr.join('');

        var indexN = arrAllVariants.indexOf(fullRandomArr);
        if (indexN == -1) {
            arrAllVariants.push(fullRandomArr);
        }
    }

    if (arrAllVariants[arrAllVariants.length - 1] == n) {
        return n;
    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    console.log(arrAllVariants);
    return arrAllVariants[1];
}

nextBigger(12333);










function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function unique(separatedN) {
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (separatedN.every((val, i, separatedN) => val === separatedN[0]) == true) {
        console.log(n);
    }

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr) { // для 566
        func = lengthArr; // !3
    }

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr && lengthArr >= 4) { //для 1599
        func = (lengthArr * 2) + 3; // !11
    }

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr && lengthArr >= 4) { //для 1222
        func = lengthArr; // !4
    }

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr && lengthArr >= 4) { //для 12333
        func = lengthArr; // !4
    }

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = +randomArr.join('');

        var indexN = arrAllVariants.indexOf(fullRandomArr);
        if (indexN == -1) {
            arrAllVariants.push(fullRandomArr);
        }
    }

    if (arrAllVariants[arrAllVariants.length - 1] == n) {
        return n;
    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    console.log(arrAllVariants);
    return arrAllVariants[1];
}

nextBigger(1222);








// итоговый вариант:

function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function unique(separatedN) {
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (separatedN.every((val, i, separatedN) => val === separatedN[0]) == true) {
        console.log(n);
    }

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr && lengthArr >= 4) { //для 12388
        func = lengthArr; // !30
    }

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = +randomArr.join('');

        var indexN = arrAllVariants.indexOf(fullRandomArr);
        if (indexN == -1) {
            arrAllVariants.push(fullRandomArr);
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    console.log(arrAllVariants);

    if (arrAllVariants[arrAllVariants.length - 1] == n) {
        return n;
    }

    let testFilter = arrAllVariants.filter(element => element > n);
    return testFilter[0];
}

nextBigger(1222);

















function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function unique(separatedN) {
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (separatedN.every((val, i, separatedN) => val === separatedN[0]) == true) {
        console.log(n);
    }

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr && lengthArr >= 4) { // для числа с двумя уникальными значениями
        func = lengthArr;
    }

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = +randomArr.join('');

        var indexN = arrAllVariants.indexOf(fullRandomArr);
        if (indexN == -1) {
            arrAllVariants.push(fullRandomArr);
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    console.log(arrAllVariants);

    if (arrAllVariants[arrAllVariants.length - 1] == n) {
        return n;
    }

    let testFilter = arrAllVariants.filter(element => element > n);
    return testFilter[0];
}

nextBigger(12222);





// САМЫЙ ИТОГОВЫЙ ВАРИК:

function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function unique(separatedN) {
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr && lengthArr >= 3) {
        func = lengthArr;
    }

    if (lengthArrShort < lengthArr && lengthArrShort == 1) {
        func = lengthArrShort;
    }

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = +randomArr.join('');

        var indexN = arrAllVariants.indexOf(fullRandomArr);
        if (indexN == -1) {
            arrAllVariants.push(fullRandomArr);
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    console.log(arrAllVariants);

    if (arrAllVariants[arrAllVariants.length - 1] == n) {
        return n;
    }

    let testFilter = arrAllVariants.filter(element => element > n);
    return testFilter[0];
}

nextBigger(88);













// две проверки для двух условий написала:

function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function unique(separatedN) {
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr && lengthArr >= 3) { // для числа с 2 уникал знач
        func = lengthArr;
    }

    if (lengthArrShort < lengthArr && lengthArrShort == 1) { // для числа с 1 уникал знач
        return -1;
    }

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = +randomArr.join('');

        var indexN = arrAllVariants.indexOf(fullRandomArr);
        if (indexN == -1) {
            arrAllVariants.push(fullRandomArr);
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    console.log(arrAllVariants);

    if (arrAllVariants[arrAllVariants.length - 1] == n) {
        return -1;
    }

    let testFilter = arrAllVariants.filter(element => element > n);
    return testFilter[0];
}

nextBigger(531);
















// ну почти бляяяяя:

function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function unique(separatedN) {
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    if (lengthArrShort < lengthArr && lengthArrShort == 1) { // для числа с 1 уникал знач
        return -1;
    }

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr && lengthArr >= 3) { // для числа с 2 уникал знач
        func = lengthArr;
    }

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr && lengthArr >= 3) { // для числа с 2 уникал знач
        func = lengthArr;
    }

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = +randomArr.join('');

        var indexN = arrAllVariants.indexOf(fullRandomArr);
        if (indexN == -1) {
            arrAllVariants.push(fullRandomArr);
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    console.log(arrAllVariants);

    if (arrAllVariants[arrAllVariants.length - 1] == n) {
        return -1;
    }

    let testFilter = arrAllVariants.filter(element => element > n);
    return testFilter[0];
}

nextBigger(566);









function factorial(separatedN) {
    var numberLength = separatedN.length;
    return numberLength ? numberLength * factorial(numberLength - 1) : 1;
}

function compareRandom(a, b) {
    var randomNumber = Math.random() - 0.5;
    return randomNumber;
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';
    var separatedN = stringN.split('');
    var factorialN = factorial(separatedN);
    for (var i = 0; i <= factorialN; i++) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = randomArr.join('');

        arrAllVariants.push(fullRandomArr);
        var indexN = arrAllVariants.indexOf(n);
        delete arrAllVariants[indexN];
        if (fullRandomArr[0] == n) {
            return -1;
        } else {
            continue;
        }

    }
    return arrAllVariants;
}
nextBigger(655);











// без исключения вариантов меньше переданного числа

function factorial(lengthArr) {
    return (lengthArr != 1) ? lengthArr * factorial(lengthArr - 1) : 1;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function unique(separatedN) {
    var obj = {};
    for (var i = 0; i < separatedN.length; i++) {
        var str = separatedN[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function nextBigger(n) {
    var arrAllVariants = [];
    var stringN = n + '';

    var separatedN = stringN.split('');
    var lengthArr = separatedN.length;
    var func = factorial(lengthArr);

    var newUniqueArr = unique(separatedN);
    var lengthArrShort = newUniqueArr.length;
    if (lengthArrShort < lengthArr && lengthArr >= 3) {
        func = lengthArr;
    }

    if (lengthArrShort < lengthArr && lengthArrShort == 1) {
        func = lengthArrShort;
    }

    if (lengthArr == 1) {
        return -1;
    }

    while (arrAllVariants.length != func) {
        var randomArr = separatedN.sort(compareRandom);
        var fullRandomArr = +randomArr.join('');

        var indexN = arrAllVariants.indexOf(fullRandomArr);
        if (indexN == -1) {
            arrAllVariants.push(fullRandomArr);
        }
    }

    arrAllVariants.sort(function (a, b) { return a - b; });
    console.log(arrAllVariants);

    if (arrAllVariants[arrAllVariants.length - 1] == n) {
        return n;
    }

}

nextBigger(655);