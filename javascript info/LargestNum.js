// Find the largest number in an array of integers.
    
function findLargestNumber(arr){
    let largest = arr[0]
    for(i=1; i< arr.length; i++){
        if(arr[i] > largest){
             largest= arr[i] 
        }
    }
    return largest
}

// Example usage:
const numbers = [10, 3, 7, 15, 21, 4];
console.log(findLargestNumber(numbers)); 

let price = [2000, 4000, 5000, 80000]
function findlargestnumber(arr){
    let largest = arr[0]
    for(i=1; i< arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    } return largest
    
}
console.log(findlargestnumber(price));
