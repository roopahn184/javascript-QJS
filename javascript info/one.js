//write a function that takes string as input and returns the reverse of that string.
function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString("Hello Goodmorning"));

//check if a string as a palindrome

function palindrome(str){
    const reversedStr = str.split('').reverse().join('')
    return str == reversedStr
}
console.log(palindrome('racecar')); //true
console.log(palindrome('hello'));   // false

// find the maximum number in an array
function maxNumber(numbers){
    return Math.max(...numbers)
}
console.log(maxNumber([1,2,3,4,5,7,8,9,6])); // 9

// calculate the factorial of the number
function calculateFactorial(num){
    if(num ===1 || num ===0){
         return 1;
    }else{
        return num * calculateFactorial(num - 1)
    }
}
console.log(calculateFactorial(5)); // 120
console.log(calculateFactorial(2)); // 2

//remove duplicates from an array
function removeDuplicates(arr){
    return [...new Set(arr)]
}
console.log(removeDuplicates([1,2,3,2,4,5,6,4,6])); // 123456

