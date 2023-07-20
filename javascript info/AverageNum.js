// find the Average of all numbers in an array
const numbers=[1, 2, 3, 4, 5]
function averageofNumber(arr) {
    if(arr.length === 0)
        return 0
        const sum = arr.reduce((acc, crr)=> acc + crr, 0);
        return sum/ arr.length;

    
}
console.log(averageofNumber(numbers) );

//
 var price =[2, 4, 6, 8, 10]
function findAverage(arr) {
    if(arr.length === 0)
    return 0
    const sum = arr.reduce((acc, crr)=> acc + crr, 0);
    return sum/arr.length;
}
console.log( findAverage(price));