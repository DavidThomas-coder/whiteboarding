// Given a string representing a sentence, 
// write a method that returns the longest word. 
// If there’s a tie, output the longest word that’s found first

const inputString = "David once ate an entire turkey";

const longestWord = (string) => {
    const splitWords = string.split(' ');
    let currentLongest = ''; 

    for (let i = 0; i < splitWords.length; i++) {
        if (splitWords[i].length > currentLongest.length) {
            currentLongest = splitWords[i];
        }
    }

    return currentLongest;
}

console.log(longestWord(inputString));

