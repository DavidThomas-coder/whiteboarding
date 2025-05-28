// // Given an array of integers, return a new list that doubles each value

array = [1, 2, 3, 4, 5, 6]

function doubleNumbers(array) {
    let doubled = []
    for (let i = 0; i < array.length; i++) {
        doubled.push(array[i] * 2)
    }
    return doubled
}

console.log(doubleNumbers(array))