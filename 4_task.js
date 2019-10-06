// 4. You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

// нужно написать функцию, которая будет возвращать следующее число после переданного, 
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