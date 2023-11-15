// Given a string representing a paragraph, write a function to return the frequency of each word in the paragraph

const string = 'One time I went to this one place and then that time I met that one guy'

const wordFrequency = (string) => {
    const words = string.split(' ')
    const frequencyMap = {}

    for (let i = 0; i < words.length; i++) {

        const lowercaseWord = words[i].toLowerCase()
        frequencyMap[lowercaseWord] = (frequencyMap[lowercaseWord] || 0) + 1
    }

    return frequencyMap
}

console.log(wordFrequency(string))