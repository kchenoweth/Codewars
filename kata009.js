//7kyu Coding Meetup #14 - Higher-Order Functions Series - Order the Food

//  In this assignment we are given an array that contains information about developers signed up to attend the next coding meetup that you're organizing.  The task is to RETURN an OBJECT which includes the COUNT OF FOOD options selected by the developers on the meetup sign-up form.  The array is given:

var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
      meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
      meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
      meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
      meal: 'vegetarian' },
  ];
//Each type of diet is represented by a numeric value in this exercise.
// { vegetarian: 2, standard: 1, vegan: 1 }
//There are also two other cases, 'diabetic' and 'gluten-intolerant'


 //A for-of loop can be used to target each item in the list and extract the 'meal' category using the .meal notation.   
function orderFood(list){
    let orders = {}
    for (dev of list) {
        orders[dev.meal] = orders[dev.meal] + 1 || 1
    }
    return orders
}
// .hasOwnProperty can be used to determine whether the meal property exists
function orderFood(list){
let mealResult ={}
    for (let i = 0; i < list.length; i++){
        if (mealResult.hasOwnProperty(list[i].meal)){
            mealResult[list[i].meal]++;
        }else{
            mealResult[list[i].meal] = 1 ;
        }
        
    }
    return mealResult
}