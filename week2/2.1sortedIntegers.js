// Given an array of unsorted integers, 
// return a sorted array with the integers list from lowest to highest. 
// No .sort


const array = [23, 17, 15, 29, 3]

const sortIntegers = (array) => {
    const sortedArray = [...array];

    for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = 0; j < sortedArray.length - 1 - i; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                // Swap the elements if they are in the wrong order
                const temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
        }
    }

    return sortedArray;
}

console.log(sortIntegers(array))