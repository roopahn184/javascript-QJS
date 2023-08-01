//functions in javascript
// what is function declaration
function square(num){
  return num*num
}
console.log(square(5));

//what is function expression- store a variable inside of a variable

const squareNum =function(num){
    return num*num
}
console.log(squareNum(10));

//what are first class finctions
function square(num){
    return num*num
}
function displaySquare(fn){
    console.log("square is" + fn(5));
}
displaySquare(square)

// what is IIFE-immidiatly invoked function expression.
(function square(num){
  console.log(num*num);
})(5);

// otp based IIFE
(function multifly(x){
    (function multifly(y){
        console.log(x);
    })(2);
})(1);