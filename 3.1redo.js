// Given an array of integers, create a function that returns true 
// if all numbers found in the array are even, otherwise return false

array = [2, 4, 6, 7]

function isEven(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            return false
        }
    }
    return true
}

console.log(isEven(array))