// Given a string representing a sentence, 
// write a method that returns the longest word. 
// If there’s a tie, output the longest word that’s found first

function findLongestWord(sentence) {
    var words = sentence.split(' ');
    var longestWord = '';
    
        for (var i = 0; i < words.length; i++) {
        var word = words[i].replace(/[^\w]/g, ''); // Remove non-word characters
    
        if (word.length > longestWord.length) {
            longestWord = word;
        }
        }
    
        return longestWord;
    }  

var sentence = "The quick brown fox jumped over the lazy dog";
var longestWord = findLongestWord(sentence);

console.log(longestWord); // Output: "jumped"
    