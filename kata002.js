//8kyu Sum of Positives May 7 2022
function positiveSum(arr) {
    //Use a .reduce method to iterate through the array, summing all numbers that are greater than currentValue
      return arr.reduce((sumValue,currentValue) => sumValue + (currentValue > 0 ? currentValue : 0), 0)
    }