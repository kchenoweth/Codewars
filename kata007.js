//8kyu Remove String Spaces

//Remove the spaces from a string and return the resultant string.

//There are as usual multiple ways to accomplish this, even just using array methods.  I will use the split and join methods.

function noSpace(x){
    return x.split(' ').join('');
}

//The .replace method is also available for this task.  In order to have every space in the string deleted instead of just the first one, we will need to use the /g global flag.  We can also use the regex \s, which represents white space.  We may also choose here to use \s+, which is not necessary to get the desired result but affects how the white spaces are treated.  The + allows groups of multiple white spaces to be replaced as one unit, which means the number of actual things being replaced by the method is different depending on which one you use.  Without + each individual space character is changed, and WITH + each contiguous group of spaces is treated as one unit and replaced.  Quibbling difference but it could be useful in other applications :)  Anyway it looks like this:

function noSpace(x){
    return x.replace(/\s/g, '');
}