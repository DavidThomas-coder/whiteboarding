const highestAverage = (array, integer) => {
    let highestSum = -Infinity;
    
    for (let i = integer; i <= array.length; i++) {
        const sum = array.slice(i - integer, i).reduce((acc, num) => acc + num, 0);

        if (sum > highestSum) {
            highestSum = sum;
        }
    }

    return Math.ceil(highestSum / integer);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(highestAverage(array, 1));


