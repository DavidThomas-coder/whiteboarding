// Given an array of integers, create a function that returns true 
// if all numbers found in the array are even, otherwise return false

const arrayEven = [2, 4, 6, 8]
const arrayBoth = [1, 3, 6, 8]

const evenOrNot = (array) => {
    const evenNumbers = []

    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i])
        }
    }

    return evenNumbers.length === array.length
}

console.log(evenOrNot(arrayBoth))