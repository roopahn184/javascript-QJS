let Array = [1,2,3,4,5,6]

let n=8

for(let a of Array){
    for(let x of Array){
        if(a+x===8){
            console.log(a);
        }
    }
}