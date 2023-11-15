// Given a word, create a function that returns the same word without any vowels

word = 'fruit'

const noVowels = (word) => {
    return word.split('').filter(letter => !['a', 'e', 'i', 'o', 'u'].includes(letter)).join('')
}

console.log(noVowels(word))