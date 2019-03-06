'use strict';
const BinaryTree = require('./interview-questions');

/*
The share price for a company over a week's trading is as follows: 

[128, 97, 121, 123, 98, 97, 105] 

If you had to buy shares in the company on one day, and sell the shares on one of the following days, 
write an algorithm to work out what the maximum profit you could make would be.
*/

const sharePrices = [128, 97, 121, 123, 98, 97, 105];

// Goal: Highest cumulative profit
// Options: Buy, Sell, Hold

// Get differences of every day
const diffs = sharePrices.reduce((acc, cv, i) => {
  if (Number(sharePrices[i+1])) {
    acc.push(sharePrices[i+1] - cv);
  }
  return acc;
}, []);

// Algorithm should be as simple as:
// Start with nothing
// If cumulative difference is positive, buy.
// If nothing, and cumulative difference is negative, do nothing
// If we have bought, and cumulative difference is positive, do nothing
// If we have bought, and cumulative difference is negative, sell
// Return max profit at the end

// Input: Array
// Output: Console log diary of what we did
// Recursive input: Difference between current and next
// Recursive Output: Console log of day and action

function maxProfit(arr, profit=0, buySellHold=0, i=0) {
  // Base case
  if (!(arr[i+1])) {
    console.log(`Our final, fat profit is ${profit}`);
    return profit;
  }
  let difference = arr[i+1] - arr[i];

  if (difference < 0) {
    console.log(`On day ${i+1}, we are selling for ${difference}`);
    return maxProfit(arr, profit, buySellHold, i+1);
  } else {
    console.log(`On day ${i+1}, we are buying for ${difference}...sweet!`);
    profit = profit + difference;
    return maxProfit(arr, profit, buySellHold, i+1);
  }
}

maxProfit(sharePrices);