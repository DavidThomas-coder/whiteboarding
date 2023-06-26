// Given an array of integers, return a list of 
// all odd numbers found in the list

function findOddNumbers(arr) {
    var oddNumbers = [];
    
        for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i]);
        }
        }
    
        return oddNumbers;
    }  

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = findOddNumbers(numbers);

console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]
