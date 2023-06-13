// setTimeOut interval

for(let i=1;i<=5; i++){
    setTimeout(()=>{
        console.log(i);
    },i*2000)
}
for(let i=1;i<=5;i++){
    setInterval(()=>{
        console.log(i);
    },i*2000)
}