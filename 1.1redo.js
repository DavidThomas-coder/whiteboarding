// Given an array of integers, return a list of all odd numbers found in the list

array = [1,2,3,4,5]

const oddNumbers = (array) => {
    return array.filter(number => number % 2 !== 0)
}

console.log (oddNumbers(array))