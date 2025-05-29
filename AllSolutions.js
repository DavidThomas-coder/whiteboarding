// ===================================================================
// JAVASCRIPT PROBLEM SOLUTIONS
// ===================================================================

// 1. Return all odd numbers from an array
// For Loop Solution:
function getOddNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

// More Efficient Solution:
function getOddNumbersEfficient(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// ===================================================================

// 2. Return new array that doubles each value
// For Loop Solution:
function doubleValues(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}

// More Efficient Solution:
function doubleValuesEfficient(arr) {
    return arr.map(num => num * 2);
}

// ===================================================================

// 3. Return the longest word in a sentence
// For Loop Solution:
function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = words[0];
    
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

// More Efficient Solution:
function longestWordEfficient(sentence) {
    return sentence.split(' ').reduce((longest, current) => 
        current.length > longest.length ? current : longest
    );
}

// ===================================================================

// 4. Sort array without using .sort()
// For Loop Solution (Bubble Sort):
function sortArray(array) {
    const sortedArray = [...array]

    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[i] > sortedArray[j]) {
                [sortedArray[i], sortedArray[j]] = [sortedArray[j], sortedArray[i]]
            }
        }
    }
    return sortedArray
}

console.log(sortArray(array))

// Note: Bubble sort is O(n²). More efficient sorting algorithms exist.

// ===================================================================

// 5. Toggle case of each character
// For Loop Solution:
function toggleCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === char.toLowerCase()) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
    }
    return result;
}

// More Efficient Solution:
function toggleCaseEfficient(str) {
    return str.split('').map(char => 
        char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    ).join('');
}

// ===================================================================

// 6. Return short+long+short string format
// For Loop Solution:
function shortLongShort(a, b) {
    let short, long;
    
    if (a.length < b.length) {
        short = a;
        long = b;
    } else {
        short = b;
        long = a;
    }
    
    return short + long + short;
}

// Note: This is already quite efficient.

// ===================================================================

// 7. Check if all numbers are even
// For Loop Solution:
function allEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

// More Efficient Solution:
function allEvenEfficient(arr) {
    return arr.every(num => num % 2 === 0);
}

// ===================================================================

// 8. Flatten array of arrays (without .flat())
// For Loop Solution:
function flattenArray(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j]);
        }
    }
    return result;
}

// Alternative Solution:
function flattenArrayEfficient(arr) {
    return arr.reduce((flat, subArr) => flat.concat(subArr), []);
}

// ===================================================================

// 9. Remove vowels from a word
// For Loop Solution:
function removeVowels(word) {
    const vowels = 'aeiouAEIOU';
    let result = '';
    
    for (let i = 0; i < word.length; i++) {
        if (!vowels.includes(word[i])) {
            result += word[i];
        }
    }
    return result;
}

// More Efficient Solution:
function removeVowelsEfficient(word) {
    return word.split('').filter(char => !'aeiouAEIOU'.includes(char)).join('');
}

// ===================================================================

// 10. Check if array is sorted (low to high)
// For Loop Solution:
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// More Efficient Solution:
function isSortedEfficient(arr) {
    return arr.every((num, i) => i === 0 || arr[i - 1] <= num);
}

// ===================================================================

// 11. Multiplication without * operator
// For Loop Solution:
function multiply(a, b) {
    if (b === 0) return 0;
    
    let result = 0;
    const isNegative = (a < 0) !== (b < 0);
    a = Math.abs(a);
    b = Math.abs(b);
    
    for (let i = 0; i < b; i++) {
        result += a;
    }
    
    return isNegative ? -result : result;
}

// Note: This uses repeated addition approach.

// ===================================================================

// 12. Word frequency in a paragraph
// For Loop Solution:
function wordFrequency(paragraph) {
    const words = paragraph.toLowerCase().split(' ');
    const frequency = {};
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        frequency[word] = (frequency[word] || 0) + 1;
    }
    
    return frequency;
}

// More Efficient Solution:
function wordFrequencyEfficient(paragraph) {
    return paragraph.toLowerCase().split(' ').reduce((freq, word) => {
        freq[word] = (freq[word] || 0) + 1;
        return freq;
    }, {});
}

// ===================================================================

// 13. Find elements that occur more than once
// For Loop Solution:
function findDuplicates(arr) {
    const frequency = {};
    const duplicates = [];
    
    // Count frequencies
    for (let i = 0; i < arr.length; i++) {
        frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
    }
    
    // Find duplicates
    for (let key in frequency) {
        if (frequency[key] > 1) {
            duplicates.push(parseInt(key)); // Convert back to number if needed
        }
    }
    
    return duplicates;
}

// More Efficient Solution:
function findDuplicatesEfficient(arr) {
    const frequency = arr.reduce((freq, item) => {
        freq[item] = (freq[item] || 0) + 1;
        return freq;
    }, {});
    
    return Object.keys(frequency).filter(key => frequency[key] > 1).map(Number);
}

// ===================================================================

// 14. Check if word is palindrome
// For Loop Solution:
function isPalindrome(word) {
    const str = word.toLowerCase();
    
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// More Efficient Solution:
function isPalindromeEfficient(word) {
    const str = word.toLowerCase();
    return str === str.split('').reverse().join('');
}

// ===================================================================

// 15. Map letters to their indices
// For Loop Solution:
function letterIndices(str) {
    const result = {};
    
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (!result[letter]) {
            result[letter] = [];
        }
        result[letter].push(i);
    }
    
    return result;
}

// More Efficient Solution:
function letterIndicesEfficient(str) {
    return str.split('').reduce((result, letter, index) => {
        if (!result[letter]) result[letter] = [];
        result[letter].push(index);
        return result;
    }, {});
}

// ===================================================================

// 16. Find most frequent integer
// For Loop Solution:
function mostFrequent(arr) {
    const frequency = {};
    let maxCount = 0;
    let mostFrequentNum = arr[0];
    
    // Count frequencies
    for (let i = 0; i < arr.length; i++) {
        frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
        
        if (frequency[arr[i]] > maxCount) {
            maxCount = frequency[arr[i]];
            mostFrequentNum = arr[i];
        }
    }
    
    return mostFrequentNum;
}

// More Efficient Solution:
function mostFrequentEfficient(arr) {
    const frequency = arr.reduce((freq, num) => {
        freq[num] = (freq[num] || 0) + 1;
        return freq;
    }, {});
    
    return Object.keys(frequency).reduce((a, b) => 
        frequency[a] > frequency[b] ? a : b
    );
}

// ===================================================================

// 17. Remove duplicate characters (keep first occurrence)
// For Loop Solution:
function removeDuplicateChars(str) {
    const seen = {};
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!seen[char]) {
            seen[char] = true;
            result += char;
        }
    }
    
    return result;
}

// More Efficient Solution:
function removeDuplicateCharsEfficient(str) {
    return [...new Set(str)].join('');
}

// ===================================================================

// 18. Characters found in both strings
// For Loop Solution:
function commonChars(str1, str2) {
    const chars1 = {};
    let result = '';
    
    // Track characters in first string
    for (let i = 0; i < str1.length; i++) {
        chars1[str1[i]] = true;
    }
    
    // Check second string for matches
    const added = {};
    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];
        if (chars1[char] && !added[char]) {
            result += char;
            added[char] = true;
        }
    }
    
    return result;
}

// More Efficient Solution:
function commonCharsEfficient(str1, str2) {
    const set1 = new Set(str1);
    return [...new Set(str2)].filter(char => set1.has(char)).join('');
}

// ===================================================================

// 19. Factorial
// For Loop Solution:
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Recursive Solution:
function factorialRecursive(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}

// ===================================================================

// 20. Fibonacci sequence up to n terms
// For Loop Solution:
function fibonacciSequence(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const sequence = [0, 1];
    
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    
    return sequence;
}

// Note: This is already quite efficient for generating the sequence.

// ===================================================================

// 21. Check if number is prime
// For Loop Solution:
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Note: This is already optimized by only checking odd divisors up to √n.

// ===================================================================
// TEST EXAMPLES
// ===================================================================

// Test the functions
console.log("=== TESTING FUNCTIONS ===");

// Test 1: Odd numbers
console.log("Odd numbers from [1,2,3,4,5]:", getOddNumbers([1,2,3,4,5])); // [1,3,5]

// Test 2: Double values
console.log("Double [1,2,3]:", doubleValues([1,2,3])); // [2,4,6]

// Test 3: Longest word
console.log("Longest word in 'hello world javascript':", longestWord("hello world javascript")); // "javascript"

// Test 4: Toggle case
console.log("Toggle case of 'Hello World':", toggleCase("Hello World")); // "hELLO wORLD"

// Test 5: All even
console.log("All even [2,4,6]:", allEven([2,4,6])); // true
console.log("All even [2,3,4]:", allEven([2,3,4])); // false

// Test 6: Is palindrome
console.log("Is 'racecar' a palindrome:", isPalindrome("racecar")); // true
console.log("Is 'hello' a palindrome:", isPalindrome("hello")); // false

// Test 7: Factorial
console.log("Factorial of 5:", factorial(5)); // 120

// Test 8: Is prime
console.log("Is 17 prime:", isPrime(17)); // true
console.log("Is 15 prime:", isPrime(15)); // false