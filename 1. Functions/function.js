//normal function 
const getName = function(fName, lName) {
    return '${fName} ${lName}';
};


//Arrow Function
const getName = function(fName, lName) => {
    return '${fName} ${lName}';
};

// Arrow Function with No return 
const getName = function(fName, lName) => {'${fName} ${lName}'};


//Generator 
function* getFirstName(){
    yield "Ram";
}

