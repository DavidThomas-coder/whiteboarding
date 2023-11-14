// Given an array of unsorted integers, 
// return a sorted array with the integers list from lowest to highest. 
// No .sort

const array = [29, 4, 16, 9, 22]

const sortIntegers = (array) => {
    const sortedArray = [...array]

    for (i = 0; i < sortedArray.length; i++) {
        for (j = 0; j < sortedArray[i].length; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                const temp = sortedArray[j + 1]
                sortedArray[j] = sortedArray[j + 1]
                sortedArray[j + 1] = temp
            }
        }
    }

    return sortedArray
}

console.log(sortIntegers(array))