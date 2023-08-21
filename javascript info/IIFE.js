//IIFE- this is a javascript design pattern that involves defining and 
//executing a function immediatly after its creation.

(function (){
    var message = "Hello from inside the IIFE";
    console.log(message);
})()

// example
let count = (function(){
    var count = 0;
    return {
       increment: function(){
          count++
       },
        decrement: function(){
         count--
       },
       getCount: function(){
        return count
       }
    };
})();
console.log(count.getCount());
count.increment();
count.increment();
count.increment();
console.log(count.getCount());