// what is object- colletion of property and key value pairs
// how to create object

let make ={
    id:101,
    name:"roopa"
}
console.log(make)

// how to access the object data
// they are two ways-1. dot notation 2. square bracket notation
console.log(make.id)
console.log(make.name)

//using square[] notation
console.log(make["id"])
console.log(make["name"])

// difference between dot notation and square bracket notation
//dot - it allows static keys
//square bracket - it allows dynamic keys

//how to add new property to the object
make.location = "bangalore";
console.log(make)

//how to remove property in object
delete make.id
console.log(make);

// how to check the property in object
console.log(make.hasOwnProperty("name"))
console.log(make.hasOwnProperty("location"))

//how to check property is there or not in object using for loop
for( let name in make){
    console.log("yes")
}

//object destructuring
const{name, location}=make
console.log(name);
console.log(location);

//using constructor how to call object
function user(age, name){
    this.age= age;
    this.name =name
}
let person = new user(22, "john")
console.log(person);

// difference between constructor property and string literal
//constructor property- we can create multiple properties
//string literal - we can create only one property