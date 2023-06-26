// Given an array of integers, return a new list that doubles each value

function doubleValues(arr) {
    var doubledList = [];
    
        for (var i = 0; i < arr.length; i++) {
        doubledList.push(arr[i] * 2);
        }
    
        return doubledList;
    }  

var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = doubleValues(numbers);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
    