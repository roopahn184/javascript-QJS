// find the sum of all numbers in an array
const numbers =[1, 2, 3, 4, 5]
function sumOfArray(arr) {
    return arr.reduce((acc, crr)=> acc + crr, 0 )
}
console.log(sumOfArray(numbers));

//

let price =[10, 20, 30, 40, 50]
function sumOfPrice(arr) {
    return arr.reduce((acc, crr)=> acc+ crr, 0);
}
console.log(sumOfPrice(price));