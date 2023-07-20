//remove duplicates from an array

const fruits =["orange", "grapes", "kiwi","orange", "banana", "kiwi"]
function removeDuplicatesArray(arr) {
    return arr.filter((item, index)=> arr.indexOf(item)==index);
    
}
console.log( removeDuplicatesArray(fruits));