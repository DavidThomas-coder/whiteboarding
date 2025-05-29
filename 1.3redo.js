// Given a string representing a sentence, 
// write a method that returns the longest word. 
// If there’s a tie, output the longest word that’s found first

string = "David once ate an entire turkey and it was bonkers forrealzzzforrealzzz"

function longestWord(string) {
    let splitWords = string.split(' ')
    let longestWord = ''

    for (let i = 0; i < splitWords.length; i++) {
        if (splitWords[i].length > longestWord.length) {
            longestWord = splitWords[i]
        }
    }
    return longestWord
}

console.log(longestWord(string))