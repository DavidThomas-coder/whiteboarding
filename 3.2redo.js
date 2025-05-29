// Given an array of arrays, create a function that puts all elements in a single array 
// (without using the JS Array method .flat())

arrayOfArrays =[[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function combineArrays(array) {
    let singleArray = []

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            singleArray.push(array[i][j])
        }
    }
    return singleArray
}

console.log(combineArrays(arrayOfArrays))