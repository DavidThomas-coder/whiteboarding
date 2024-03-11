// // Given an array of integers, return a new list that doubles each value

array = [1, 2, 3, 4, 5, 6]

const doubleValue = (array) => {
    const doubledArray = array.map((x) => x * 2)
    return doubledArray
}

console.log(doubleValue(array))