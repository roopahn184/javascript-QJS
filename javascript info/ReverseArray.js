const numbers =[1, 2, 3, 4, 5]
function reverseOfArray(arr){
   for(i=0; i<arr.length/2; i++){
      let temp = arr[i];
      arr[i] = arr[arr.length-1-i]
      arr[arr.length-1-i]=temp
   }
   return arr;
} 
console.log(reverseOfArray(numbers));

//
let price =[10, 20, 30, 40, 50]
function reversePrice(arr) {
    for(i=0; i<arr.length/2; i++){
        let temp = arr[i]
        arr[i]= arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr;
    
}
console.log( reversePrice(price));