function sayhello()
{
   console.log("hello")
}

sayhello()



let add = function(a,b)
{
    return a+b;
}
console.log(add(3,4))

let sum =(a,b) => {
    return a+b
}
console.log(sum(2,2))

let obj ={
    namee : "tony",
    "sur name" : "stark",

    func : () => {
        return "hello";
    }
}
console.log(obj.namee)

let obj1 ={
    namee : "kavy",
    "sur name" : "stark",

    func : () => {
        return "hello";
    }
}
let arr=[obj,obj1];
console.log(arr[0].namee);

console.log(obj.namee)
console.log(obj1)

let {namee}=obj1
console.log(namee)
