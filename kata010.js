function even_or_odd(number) {
    //The fastest way to print an "even" or "odd" result  is to use the modulus operator.  If the number divided by 2 has a remainder of 0, the number is even.
    if (number%2 == 0) {
      return "Even";
      //We can set a specific condition to determine "odd"ness, but it isn't necessary for this program.  Any case where the remainder is not 0 will return an "odd" result.
    } else {
      return "Odd";
    }
  }

  //There is a shorter way to write this using the ternary operator:  
  function even_or_odd(number){
      //It relies on the idea that 0 is considered a "falsy" value, and therefore any time you get a 0 remainder the ternary operator will choose the option on the right side.  True values are always on the left when using ternary operators, and numbers that aren't 0 have a "truthy" quality.
      return number % 2 ? "Odd" : "Even"
  }
  