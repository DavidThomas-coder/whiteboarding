// Given an array of integers, write a function to find the most frequent integer in the array

integerArray = [1, 1, 1, 1, 1, 2, 3, 4, 4, 5, 5, 5]

const mostFrequentInteger = (array) => {
    frequencyMap = {}

    for (let i = 0; i < array.length; i++) {
        frequencyMap[array[i]] = (frequencyMap[array[i]] || 0) + 1
    }

    let frequencyCount = 0
    let frequentInteger 

    for (const key in frequencyMap) {
        if (frequencyMap[key] > frequencyCount) {
            frequencyCount = frequencyMap[key]
            frequentInteger = key
        }
    }

    return frequentInteger
}

console.log(mostFrequentInteger(integerArray))