// Given an array of unsorted integers, 
// return a sorted array with the integers list from lowest to highest. 
// No .sort


const array = [23, 17, 15, 29, 3]

const sortIntegers = (array) => {
    const sortedArray = [...array];

    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[i] > sortedArray[j]) {
                [sortedArray[i], sortedArray[j]] = [sortedArray[j], sortedArray[i]];
            }
        }
    }
    return sortedArray;
}