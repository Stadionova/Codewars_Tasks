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

// решение правильное, напрямую захардкодила перенос строки:

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