let x=[1,2,3,4,5]
let y=[2,4,6,5,8]
function commonelement(){
    let common =[]
    for(a of x){
        if(y.includes(a)){
            common.push(a)
        }
    }
    console.log(common)
};
commonelement()


// let a =[1,2,3,4,5]
// let b =[2,3,5]

// function commonelement(){
//     let common=[]
//     for(x of a){
//         if(b.includes(x)){
//             common.push(x)
//         }
//     }
//     console.log(common);

// }
// commonelement()