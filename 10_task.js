// Write Number in Expanded Form.
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