// // Given an array of integers, return a new list that doubles each value

array = [1, 2, 3, 4, 5, 6]

const doubleValue = (array) => {
    return array.map((number) => number * 2)
}

console.log(doubleValue(array))