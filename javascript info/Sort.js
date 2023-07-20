
// sort the array of objects alphabetically
const users =[
    {id:101, name:"jan"},
    {id:102, name:"cat"},
    {id:103, name:"barbie"},
    ];
    users.sort((a, b)=> a.name.localeCompare(b.name));
    console.log(users)
    
    //sort the array of numbers 
    const numbers =[4, 6, 2, 1, 3]
    numbers.sort((a,b)=>a-b);
    console.log(numbers)

    //sort the array of objects property
    const people = [
        
        {name:"alice", age:35},
        {name:"bae", age:30},
        {name:"jan", age:40}]
        
        people.sort((person1, person2)=>person1.age - person2.age)
        console.log(people)

        // sort the array with alphabetically
        const fruits =["apple", "Orange", "banana", "grapes"]
        fruits.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()))
        console.log(fruits)
        
   