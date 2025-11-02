// for(let i=0;i<5;i++){
//     console.log(i);
// }

 let arr=[10,20,30,40,50];

// for(let num of arr)
// {
//     console.log(num);
// }
// let i=0;
// while(i>0)
// {
//     console.log(i);
//     i--;
// };
// i=0;
// do{
//  console.log(i);
//  i--;
// }while(i>0);

// let arr1 =[10,20,30,40,50];

// let newarr=arr1.map(neww => neww+10);
// console.log(newarr);

// let newarr2=arr.map(function(neww)
//     {
//         return neww**20;
//     }
// );
// function change(i){
//     return i+1;
// }
// let a= arr.map(change);
// console.log(a)

// let filter=arr.filter(num => num>20);
// console.log(filter);

let reduce= arr.reduce((sum,current) => sum+current,0);
console.log(reduce);