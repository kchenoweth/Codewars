//8kyu Count of Positives / Sum of Negatives Ma7 8 2022
function countPositivesSumNegatives(input) {
    //Account for null or empty array, returns an empty array these cases
      if (input === null || input.length < 1) {
      return []
    }else {
    //Filter the array into two new arrays, one with numbers > 0 and one with numbers <= 0
        let sumOfPositives = input.filter(x => x > 0),
            countOfNegatives = input.filter(x => x <= 0)
        //Return a new array that gives the length of the array of positive numbers.  Use the reducer method on the countOfNegatives array to get the sum of its contents, apply Math.floor to get rid of decimal weirdness and return it as the second element in the new array.
        return [sumOfPositives.length, Math.floor(countOfNegatives.reduce((s,v) => s + v,0))]
      }
    }

    //I realize I reversed the variable names in relation to the function that they are attached to, my bad :)