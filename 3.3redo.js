// Given a word, create a function that returns the same word without any vowels

word = 'fruit'

function noVowels(string) {
    let vowels = 'aeiouAEIOU'
    let newWord = ''

    for (let i = 0; i < string.length; i++) {
        if (!vowels.includes(word[i])) {
            newWord += word[i]
        }
    }
    return newWord
}

console.log(noVowels(word))