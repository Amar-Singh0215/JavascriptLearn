console.log("Hello World!");

let age=16;

if(age>=18)
{
    console.log("You're eligible");
}
else
{
    console.log("You're not eligible");
}

let a=10,b=15;

if(a>b)
{
    console.log("a>b");
}
else if(b>a)
{
    console.log("b>a");
}
else
{
    console.log("a==b");
}

let ch=5;
switch(ch)
{
 case 1: console.log("1"); break;
 case 1: console.log("2"); break;
 case 1: console.log("3"); break;
 default: console.log("Any ");
}

for(var i=0;i<=10;i++)
{
    console.log(`Hello ${i}`);
}
var i=0;
while(i<11)
{
    console.log(`World ${i}`);
    i++;
}
do
{
    console.log(`Hellos ${i}`);
    i++;
}while(i<11)

//variables

// let
// var
// const

"use strict" 
// to apply constraints for declaration
// a=5 will give error
//we need to use let , var or const for declaration


//Primitive data type
// 1 number
let num=50;
console.log(typeof num);
// 2 string
let str=`hello`;
console.log(typeof str);
// 3 Boolean
let bool=true;
console.log(typeof bool);
// 4 null
let n=null;
console.log(typeof n);
// 5 undefined
let c;
console.log(typeof c);

(function(){
    console.log("Hello from self invoke function");
})();

let a1=(a,b)=> console.log(a+b);
a1(2,3);

let name=["Amar","Chauhan",1 ,5 ,true]
console.log(name);
name.push("At last push");
console.log(name);
name.unshift("At first push");
console.log(name);
name.splice("At any mid pos",1,1)
console.log(name);

let nums=[10,20,30,40,50];

nums.forEach((val,index,array)=>{
    console.log(val+" "+index+" "+array);
})

let numsMap=nums.map((val,index)=>{
    return val+10;
})
console.log(nums);
console.log(numsMap);

console.log(nums.concat(numsMap));
console.log(nums.concat(numsMap).indexOf(10));
console.log(nums.reverse());
// console.log(nums.slice(1,4))
// console.log(nums.splice(1,4))
// console.log(nums.reverse());
let numsA=nums.filter((val)=>{
    if(val>20)
    {
        return val;
    }
})
console.log(numsA);
let numsB=nums.find((val)=>{
    return val==20;
})
console.log(numsB);
let numsC=nums.findIndex((val)=>{
    return val==20;
})
console.log(numsC);
let numsD=nums.findLastIndex((val)=>{
    return val==30;
})
console.log(numsD);

let arrA='10,20,30';

arrA.split(',');
