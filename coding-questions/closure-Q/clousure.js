// what is clousure in javascript - clouser is an inner function to acces the outer function variables,
// parameters, it allows to access and manipulate the outer function variables,
// even after outer function has returned.

//Can you give an example of a closure in JavaScript?
 function outerFunc(){
    var outerVariable = "hello";
    function innerFunc(name){
        console.log(outerVariable + name);
    }
    return innerFunc;

 }
 var inner = outerFunc();
  inner("john")

  // How do you use a closure in JavaScript?

  function createCounter(){
    var count = 0;
    function counter(){
        count++;
        console.log(count);
    }
    return counter;
  }
  var increment = createCounter();
  increment();
  increment();

  //What will be the output of the following code?
  function outer(){
    var x = 10;
    function inner(){
        console.log(x);
    }
    var x = 20
    return inner;
}
var increment = outer();
increment();