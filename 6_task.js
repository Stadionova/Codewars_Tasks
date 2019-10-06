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