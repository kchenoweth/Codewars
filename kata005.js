//8kyu Convert a Boolean to a String

function booleanToString(b){
        return String(b);
    }
//We can also use the .toString() method to achieve the same thing, as well as a ternary operator

function booleanToString(b){
    return b.toString();
}

function booleanToString(b){
    return b ? 'true' : 'false';
}