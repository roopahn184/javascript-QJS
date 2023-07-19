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