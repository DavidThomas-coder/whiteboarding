const mostFrequentCities = (cities) => {
    const frequencyMap = {};
    // initialize a new variable and array to keep track of mostFrequent and mostFrequentCities
    let mostFrequent = 0;
    const mostFrequentCities = [];

    // populate the frequencyMap.  if it's already in there, add 1.  if it's not, initialize it with 1

    for (const city of cities) {
        frequencyMap[city] = (frequencyMap[city] || 0) + 1;

    // if any city's frequency exceeds the current highest frequency, make a new array and push that in.

        if (frequencyMap[city] > mostFrequent) {
            mostFrequent = frequencyMap[city];
            mostFrequentCities.length = 0; // Ensure previous mostFrequentCity is removed
            mostFrequentCities.push(city);
    // if another city has the same frequency, add it to the array
        } else if (frequencyMap[city] === mostFrequent) {
            mostFrequentCities.push(city);
        }
    }

    // Sort it AT THE END GEEZ
    mostFrequentCities.sort();

    return mostFrequentCities;
};

// Example usage
const cities = ["Los Angeles", "Los Angeles", "Chicago", "Chicago", "Boston"];

console.log(mostFrequentCities(cities));


