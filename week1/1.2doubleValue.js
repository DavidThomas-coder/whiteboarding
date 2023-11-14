// Given an array of integers, return a new list that doubles each value

array = [1,2,3,4,5]

const doubleValue = (array) => {
    return array.map((value => 2 * value))
}

console.log(doubleValue(array))