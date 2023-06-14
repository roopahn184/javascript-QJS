let Obj = {
    id:1,
    name:"Gandhi",
    skills:["html", "css", "js"]

}
console.log(Obj);

new_Obj = {...Obj, ...Obj.skills.push("react", "redux")}
console.log(new_Obj);