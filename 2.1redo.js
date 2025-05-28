// Given an array of unsorted integers, 
// return a sorted array with the integers list from lowest to highest. 
// No .sort

const array = [29, 4, 16, 9, 22]

function sortIntegers(array) {
    for (let i = 0; i < array.length; i++) {
        let minValue = array[i]
        let minIndex = i
        for (let j = i; j < array.length; j++) {
            if (array[j] < minValue) {
                minValue = array[j]
                minIndex = j
            }
        }
        let temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    }
    return array
}

console.log(sortIntegers(array))