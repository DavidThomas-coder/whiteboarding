// Given a string representing a sentence, 
// write a method that returns the longest word. 
// If there’s a tie, output the longest word that’s found first

string = "David once ate an entire turkey and it was bonkers forrealzzz"

const longestWord = (string) => {
    let currentLongest = ''
    let splitString = string.split(' ')

    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i].length > currentLongest.length ) {
            currentLongest = splitString[i]
        }
    }

    return currentLongest

}

console.log(longestWord(string))