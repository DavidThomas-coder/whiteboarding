// Given an array of unsorted integers, 
// return a sorted array with the integers list from lowest to highest. 
// No .sort

array = [23, 17, 15, 29, 3]

const sortIntegers = (array) => {

    const sortedArray = [...array]

    for (i = 0; i < sortedArray.length; i++ ) {
        for (j = 0; j < sortedArray.length; j++) {
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