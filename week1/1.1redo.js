// Given an array of integers, return a list of all odd numbers found in the list

array = [1,2,3,4,5]

const oddNumbers = (array) => {
    return array.map(number => number * 2)
}

console.log(oddNumbers(array))