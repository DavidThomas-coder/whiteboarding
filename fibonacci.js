const fibonacci = (numTerms) => {
    // Initialize an array to store the Fibonacci sequence, starting with 0 and 1
    let fibSeq = [0, 1];

    // Loop to calculate the Fibonacci sequence up to the specified number of terms
    for (let i = 2; i < numTerms; i++) {
        // Each term is the sum of the two preceding terms
        fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
    }

    // Return the generated Fibonacci sequence
    return fibSeq;
}

// Set the number of terms you want in the Fibonacci sequence
const numTerms = 10;

// Print the generated Fibonacci sequence to the console
console.log(fibonacci(numTerms));