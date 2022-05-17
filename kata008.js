//8kyu Stringy Strings

//Write a function named stringy that takes a size and returns a string of alternating 1 and 0.

//Should start with a 1.  Only takes whole and positive numbers.

function stringy(size) {
    //We need to initialize the variable that will hold the numbers here, for reasons of scope
    let numberString = '';
    //The for loop will iterate through the number input into the variable size, 
    for(let i = 0; i < size; i++){
        //Each time the loop runs it will check to see if the place the counter is at has a remainder of 0 when divided by 2(even numbers will pass this check).  Remember that our counter begins at 0, so the first time it runs it will return 1.
        if (i % 2 === 0){
            numberString += 1;
        //If the remainder of the counter number is not 0, this condition applies.  Odd numbers pass this check.
        }else{
            numberString += 0;
        }
    }
    //After the function has finished running we want the full resulting string of 1 and 0 to be returned here.
    return numberString;
  }

  //Here is a shorter solution that I like better but didn't think about until after it was submitted :)

  function stringy(size) {
    var str='';
    for( var i=1; i<=size; i++ )
      str+=i%2;
    return str;
  }