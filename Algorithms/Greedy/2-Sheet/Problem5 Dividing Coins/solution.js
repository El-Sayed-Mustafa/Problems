function minimumCoinsToTake(coins) {
    const sum = coins.reduce((total, coin) => total + coin, 0); // Calculate the sum of all coins
    const halfSum = Math.ceil(sum / 2); // Calculate half the sum, rounding up if necessary
    const sortedCoins = coins.sort((a, b) => b - a); // Sort the coins in descending order

    let currentSum = 0;
    let numCoins = 0;

    for (let i = 0; i < sortedCoins.length; i++) {
        currentSum += sortedCoins[i];
        numCoins++;

        if (currentSum > halfSum) {
            break; // Stop when the current sum exceeds half the sum
        }
    }

    return numCoins;
}

// Example usage:
const coins = [3, 3, 2]; // [3, 3, 2] represents coin values of 3, 3, and 2
const minimumNumCoins = minimumCoinsToTake(coins);
console.log('Minimum number of coins to take:', minimumNumCoins);
