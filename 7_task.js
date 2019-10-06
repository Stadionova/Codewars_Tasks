// 7. Given: an array containing hashes of names.
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

// первый вариант:

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

// второй вариант:

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