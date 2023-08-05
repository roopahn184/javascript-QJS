// how do you check if a number is an  integer?

 function isInt(num){
    return num % 1 ===0
}
console.log(isInt(4)); // true
console.log(isInt(9)); // true
console.log(isInt(0.5)); // false

//what would be the fallowing code output
(function(){
    var a = b= 5;

} ())
console.log(b); //5

//write a function that would allow you to do this 
//multiply(5)(6);
function multifly(a){
    return function(b){
     return a*b
    }
 
}
console.log(multifly(5)(6)) // 30

//When would you use the bind function? - when you have a perticular function that you want to call with specific this keyword,
// we can use bind method to pass a object to function.

function fullName(){
    return "hello , this is " + this.first + this.last;
}
const person ={first:"boo", last:"bom"}
console.log(fullName.bind(person)())
//
function calculator(){
    return "sum is" + this.A +this.B
}
const value ={A:10, B:20}
console.log(calculator.bind(value)())

//what does use strict do? - is entered at the top of the javascript program or at the top of a function it helps to write safer js code and throwing error if a global variable crated by mistake.
function doSomething(val){
    "use strict"
    var x = val + 10;
}
//Explain what a callback function is and provide a simple example.
// callback function is a function that is passed another function as a arguement and is executed after some operation has been completed.
function modifyArray(arr, callback){
    arr.push(100)
    callback();

} 
var arr = [1, 2, 3, 4, 5]
modifyArray(arr, function(){
    console.log("arr has been modified", arr);
})