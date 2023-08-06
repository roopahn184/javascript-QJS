//How do you create an empty array in JavaScript?
//we can create two types
let arr =[];
console.log(arr);
// let arr = newArray();

//How do you access the first and last elements of an array?
let val =[1, 2, 3, 4,]
let firstElement =val[0]
let lastElement = val[val.length - 1]
console.log(firstElement, lastElement);

//How do you add an element to the end of an array?
let string = [1, 2, 3, 4, 5]
string.push(6)
console.log(string);

//How do you remove the last element from an array?
string.pop()
console.log(string);

//How do you loop through an array in JavaScript?
//using for loop 
let array =[1, 2, 3]
for(let i =0; i<array.length; i++){
    console.log(array[i]) 
}
//using forEach()
    array.forEach(function(element){
        console.log(element);
    }
    )
  
 // How do you check if an element exists in an array?
    