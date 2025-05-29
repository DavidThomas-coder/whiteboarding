// 1. Return all odd numbers in an array
function getOddNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) result.push(arr[i]);
    }
    return result;
  }
  
  // 2. Double each value in an array
  function doubleValues(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * 2);
    }
    return result;
  }
  
  // 3. Longest word in a sentence
  function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longest = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    return longest;
  }
  
  // 4. Sort array without .sort
  function manualSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
    return arr;
  }
  
  // 5. Swap case in a string
  function swapCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      result += char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase();
    }
    return result;
  }
  
  // 6. Short + Long + Short string
  function shortLongShort(a, b) {
    return a.length < b.length ? a + b + a : b + a + b;
  }
  
  // 7. Check if all numbers are even
  function allEven(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) return false;
    }
    return true;
  }
  
  // 8. Flatten an array of arrays
  function flatten(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    }
    return result;
  }
  
  // 9. Remove vowels from a word
  function removeVowels(word) {
    let result = "";
    for (let i = 0; i < word.length; i++) {
      if (!"aeiouAEIOU".includes(word[i])) {
        result += word[i];
      }
    }
    return result;
  }
  
  // 10. Check if array is sorted
  function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) return false;
    }
    return true;
  }
  
  // 11. Multiplication without *
  function multiply(a, b) {
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
      result += a;
    }
    return b < 0 ? -result : result;
  }
  
  // 12. Word frequency in a paragraph
  function wordFrequency(paragraph) {
    const words = paragraph.toLowerCase().split(/\W+/);
    const freq = {};
    for (let word of words) {
      if (word) freq[word] = (freq[word] || 0) + 1;
    }
    return freq;
  }
  
  // 13. Elements that occur more than once
  function findDuplicates(arr) {
    const seen = {};
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      seen[arr[i]] = (seen[arr[i]] || 0) + 1;
    }
    for (let key in seen) {
      if (seen[key] > 1) result.push(Number(key));
    }
    return result;
  }
  
  // 14. Check if a word is a palindrome
  function isPalindrome(word) {
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
      if (word[i] !== word[word.length - 1 - i]) return false;
    }
    return true;
  }
  
  // 15. Letter index mapping
  function letterIndices(str) {
    const result = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!result[char]) result[char] = [];
      result[char].push(i);
    }
    return result;
  }
  
  // 16. Most frequent integer
  function mostFrequent(arr) {
    const count = {};
    let maxFreq = 0;
    let mostFreq = null;
    for (let i = 0; i < arr.length; i++) {
      count[arr[i]] = (count[arr[i]] || 0) + 1;
      if (count[arr[i]] > maxFreq) {
        maxFreq = count[arr[i]];
        mostFreq = arr[i];
      }
    }
    return mostFreq;
  }
  
  // 17. Remove duplicate characters (keep first occurrences)
  function removeDuplicates(str) {
    let seen = new Set();
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (!seen.has(str[i])) {
        seen.add(str[i]);
        result += str[i];
      }
    }
    return result;
  }
  
  // 18. Common characters in two strings
  function commonChars(a, b) {
    let result = "";
    const setB = new Set(b);
    for (let i = 0; i < a.length; i++) {
      if (setB.has(a[i]) && !result.includes(a[i])) {
        result += a[i];
      }
    }
    return result;
  }
  
  // 19. Factorial
  function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // 20. Fibonacci sequence
  function fibonacci(n) {
    let a = 0, b = 1;
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(a);
      [a, b] = [b, a + b];
    }
    return result;
  }
  
  // 21. Is the array sorted (again)
  // (Already covered as #10)
  
  // 22. Is a number prime
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  