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
    if(array.indexOf(3) !== -1){
       console.log("element is there");
    }
    else{
        console.log("element does not exist");
    }
   
  // How do you remove an element from an array at a specific index?
  let fruits = ["banana", "mango", "orange","grapes","apple"]
  // to remove the elements
  fruits.splice(2,1)
  console.log(fruits);
  // to add the elements
  fruits.splice(2,0, "cherry", "sweet");
  console.log(fruits)

  //How do you concatenate two arrays in JavaScript?
  let x= [1,2];
  let y =[3,4];
  let newArray = x.concat(y)
  console.log(newArray);

  //  What is the difference between .filter() and .find()?
  // filter() method - return new array with all elements
  const numbers = [1, 2, 3, 4,5]
  const evenNumbers = numbers.filter(num => num % 2 === 0)
  console.log(evenNumbers);

  const addNumbers = numbers.filter(num => num % 2 === 1)
  console.log(addNumbers);

  //find() method - it return the value of the first element in the array
  const firstEvenNumbers = numbers.find(num => num % 2 === 0)
  console.log(firstEvenNumbers);

//How do you sort an array in JavaScript?
const users = ["roopa", "divya", "sushmitha", "shravs"]
users.sort();
console.log(users);

//How do you flatten a nested array in JavaScript?
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = nestedArray.reduce((accumulator, current)=>{
    return accumulator.concat(current);
}, [])
console.log(flattenedArray)