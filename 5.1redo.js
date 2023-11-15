// Given an array, write a function that returns the list of elements that occur more than once

const array = [1, 1, 2, 2, 3, 4, 5, 6, 6]

const moreThanOnce = (array) => {
    const frequencyMap = {}

    for (let i = 0; i < array.length; i++) {
        frequencyMap[array[i]] = (frequencyMap[array[i]] || 0) + 1
    }
    const frequencyArray = []
    for (const key in frequencyMap) {
        if (frequencyMap[key] > 1) {
            frequencyArray.push(key)
        }
    }

    return frequencyArray
}

console.log(moreThanOnce(array))