// Given an array of arrays, create a function that puts all elements in a single array 
// (without using the JS Array method .flat())

arrayOfArrays =[[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const singleArray = (array) => {
    const combinedArray = []

    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array[i].length; j++) {
            combinedArray.push(array[i][j])
        }
    }

    return combinedArray
}

console.log(singleArray(arrayOfArrays))