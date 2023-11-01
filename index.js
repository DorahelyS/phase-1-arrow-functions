// function expression divide
const divide = function (a,b){return a/b}

//arrow function square
const square = x => x*2

//arrow function square
const add = (a,b)=> a+b
























//---------------- end of lab -------------------------
//The original style for defining functions in JavaScript is the function declaration
//But JavaScript has two other ways to write functions:
//function expression & arrow function

//function declaration EX:
/*
function foo() {
    return 'bar';
  }
*/


//function expression
//called expression because everything to the right of = is an expression like 
//const sum = 1+1 --- 1+1 is the expression assigned to the variable sum
/*
const foo = function() {
    return 'bar';
  }
*/
// can also be written
//const foo = function() { return 'bar' }
// so with the above expressions we are saying the function is the expression assigned to const foo
// reminder the function is an anon function because it doesn't have a name
// and to evoke the function we must write foo()

//arrow expression
//basically just shorthad and don't have to write the word function 
/*
const add = (parameter1, parameter2) => parameter1 + parameter2;
//add(2,3); //=> 5
*/
// two things to note 
// 1: if body conists of  single expression do not have to write on {}
// 2: when there are no braces , arrow functions have an implicit return 
// meaning they return the result of the last expression & is the only time we don't need to write return

//If your arrow function has only one parameter, the () around the parameter becomes optional:
/*
const twoAdder = x => x + 2;
// is the same as
const twoAdder = (x) => x + 2;
*/


//If we need to do more work than return a single expression, we'll need {}
//and we'll have to declare a return
//The no-return syntax is only available if your function body is one expression long.
/*
const sum = (parameter1, parameter2) => {
    //console.log(`Adding ${parameter1}`);
    //console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
  }
  //sum(1,2); //=> 3
*/

/*
// written as a fucntion declartion 
function sum(num1,num2){
    return num1+num2
}
*/

/*
//written as function expression
const sum = function (num1,num2){return num1+num2}
*/


/*
//example of an arrow function using .map
// .map The .map() method is called on an Array and takes a function as an argument. 
//It iterates through the array, passing each element in turn to the function. 
//It then takes that function's return value and adds it to a new array, leaving the original array unchanged.
const nums = [1,2,3];
const squares = nums.map(x => x ** 2); 

//squares; //=> [1,4,9]
//nums; //=> [1,2,3]
*/
