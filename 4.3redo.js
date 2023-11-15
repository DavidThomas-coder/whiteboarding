// Given a string representing a paragraph, write a function to return the frequency of each word in the paragraph

const string = 'This one time it was a time when this time was at Subway'

const wordFrequency = (string) => {
    const wordsArray = string.split(' ')
    const frequencyMap = {}

    for (let i = 0; i < wordsArray.length; i++) {
        const lowercaseWord = wordsArray[i].toLowerCase()
        frequencyMap[lowercaseWord] = (frequencyMap[lowercaseWord] || 0) + 1
    }

    return frequencyMap
}

console.log(wordFrequency(string))