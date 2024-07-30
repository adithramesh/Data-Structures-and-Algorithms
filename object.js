obj={
    name:"Adith",
    age:33,
    "my-occupation":"RITES",
    hobby:"F1",
    sayMyName:function(){
        console.log("My name is ", this.name);
        return this.name
    }
}
obj['job']="Engineer"
delete obj.hobby
console.log(obj);
console.log(obj.sayMyName());

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
