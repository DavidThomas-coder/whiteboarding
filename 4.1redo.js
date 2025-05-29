// Given an array of numbers, write a function that will return whether the array is sorted (low-to-high) or not

const numbersArraySorted = [1, 2, 3, 4, 5]
const numbersArrayUnsorted = [2, 3, 4, 1, 5]

function isSorted(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false
        }
    }
    return true
}

console.log(isSorted(numbersArrayUnsorted))
