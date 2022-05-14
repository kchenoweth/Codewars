//8 kyu Sum Mixed Array

//There are many ways to loop through an array to change strings into numbers, including the .map array method, but it isn't necessary in this case.  We can use the .reduce method to loop through the array, converting the strings to numbers as we go using the unary plus operator.  The + before the current value variable slot converts whatever comes after it into a number.  I like this solution because I do not need to fuss about with figuring out how to combine the map and reduce functions.

sumMix = x => x.reduce((prev,curr) => +curr + prev,0)