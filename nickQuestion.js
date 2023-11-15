// Given an array of numbers, write a function to determine whether the array is sorted or unsorted (low to high)

const arraySorted = [1, 2, 3, 4]
const arrayUnsorted = [1, 2, 5, 3]

const isSorted = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false
        }
    }

    return true
}

console.log(isSorted(arraySorted))
console.log(isSorted(arrayUnsorted))