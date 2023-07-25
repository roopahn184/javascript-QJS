let Obj ={
    id:21,
    name:"jokie",
    skills:["html", "js"]
}
console.log(Obj);

New_Arr ={...Obj, ...Obj.skills.push("redux", "mangodb")}
console.log(New_Arr);