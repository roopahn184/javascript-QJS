var myArray = ["john", "jan", "coffee"]
myArray.push(["happy", "sad"]);
console.log(myArray);

var myArray = [1,2,3]
var removedArray = myArray.pop()
console.log(myArray)

var ourArray =["stimpson", "j", ["cat"]];
var removedArray = ourArray.shift();
console.log(ourArray);

ourArray.unshift("happy");
console.log(ourArray);

//passing function as a argument

function ourfunctionwithArgs(a, b){
    console.log(a-b);
}
ourfunctionwithArgs(10, 5)

//global scope and functions
var myGlobal = 10;
function fun1(){
    oopsGlobal = 5;
}

function fun2(){
    var output ="";
    if(typeof myGlobal != "undefined"){
       output+="myGlobal:" + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output +="oopsGlobal:" +oopsGlobal;
    }
    console.log(output);
}

fun1()
fun2()

//local scoped 
function localScope(){
    var outnum = 10
    return outnum;
}
console.log(localScope());


//return a value from a func with return
function minusSeven (num){
   return num - 7
}
console.log(minusSeven(10));


function returnValue(num){
   return num *5
}
console.log(returnValue(5));

// understanding undefined value return from a function
var sum = 0;
function addThree(){
    sum = sum = 3
}

//assignment with a return value

var changed = 0;
function change(num){
    return (num+5)/3;
}
changed = change(10);

// use conditional logic with if statement

function ourTrueorFalse(isItTrue){
    if(isItTrue){
        return "yes, it's true";
    }
    return "no, its false";
}
console.log(ourTrueorFalse(true));

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "yes, that was true"
    }
    return "no, that was false"
}
console.log(trueOrFalse(true));

// comparison bitween equals operator

function  testEqual(val){
    if(val == 12){
    return "equal";
}
return "not equal";
}
console.log( testEqual(15));

// strict equality operator

function strictEqual(val){
    if(val === 15){
       return "equal"
    }return "not equal"
}
console.log(strictEqual(15));

//comparison with the strict inequality operator

function testStrictNotEqual(val){
    if(val !==6){
        return "not equal"
    }
    return "equal"
}
console.log(testStrictNotEqual(8));

//Logical and operator

function testGreaterOrEqual(val){
    if(val>=20){
        return "20 or over"
    }
    if(val>=10){
        return "10 or over"
    }
    return "less than 10"
}
console.log(testGreaterOrEqual(20));

//comparison with less than operator
function testLessOperator(val){
    if(val<20){
        return "under 25"
    }
    if(val< 55){
        return "under 55"
    }
    return "55 or over"
}
console.log(testLessOperator(60));

//logical or operator

function LogicalOroparator(val){
    if(val <10 || val >20){
       return "outside"
    }
    return "inside"
}
console.log(LogicalOroparator(11));

//if else statements

function func3val(val){
 if(val <5){
   result = "smaller than 5"
 }
 else{
    result = "bigger than 5"
 }
 return result;
}
console.log(func3val(6));

//switch statements
function sequentialSizes(val) {
     var answer ="";
     switch (val) {
        case 1:
        case 2:
        case 3: 
            answer ="low" ; 
            break;
           case 4:
           case 5:
           case 6:
             answer ="mid"
            break;
     }
     return answer
}
console.log(sequentialSizes(2));
