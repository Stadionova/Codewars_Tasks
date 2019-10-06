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

// первый недоделанный вариант:

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

// второй работающий вариант:

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

// тот же вариант, но с вызовом из кодварс:

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