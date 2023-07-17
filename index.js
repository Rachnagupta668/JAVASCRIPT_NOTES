//map function

let arr=[1,5,6,7,8];
function dobule(x){
return x*2;
}
const newarr=arr.map(dobule);
console.log(newarr);

//arrow method
const arrs=[1,4,5];
 const mul = arrs.map((y)=> y*3);
 console.log(mul);
  

let sum=(a,b)=>(a+b);
console.log(sum(3,4));
const arrays=[3,6,9];
const devide= arrays.map((a)=>(a+1));
console.log(devide);


console.log("hello now fillter method");

//fillter method is use for fillter like odd even number find
const num=[1,2,4,5,8,9];
const ans= num.filter((n)=>(n<4 ));
console.log(ans);


//reduce 
const nums=[1,5,6,8]
const answer= nums.reduce(function(acc,curr){
    acc= acc+curr;
    return acc;

});
console.log(answer);
//find max value by using reduc function
const result= nums.reduce(function(max,curr){
   if(curr>max) {
    max=curr;
   }
    return max;
},0);
console.log(result);


const users=[
   { name:"riya", age:90},
   { name:"priya", age:30},
   { name:"suppriya", age:30},

];
const emp= users.map((x)=>(x.name  + x.age));
console.log(emp);


//event loop
console.log("hello");
setTimeout(function(ab){
    console.log("hello rima");

},2000);

console.log("bye");
  


//promisses
const promissesobj= new Promise((resolve,reject)=>{
    let req= false
    if(req==true){
        resolve("request sucess")
    }else{
        reject("request rejected")
    }
    

}).then(
    (value)=>{console.log(value)},
    (error)=>{console.log(error)},

);
//by using catch
const promis= new Promise((resolve,reject)=>{
    let register=true
    if(register==true){
        resolve("registerd sucessfully")
    }else{
        reject("rejected")
    }
}).then(
    (value)=>{console.log(value)}
    
).catch(
    (error)=>{console.log(error)}
)

 arr=[10,2,4,5];
 let arr2=[8,9];
let newarry= arr.concat(arr2);
 //arr.reverse();
 console.log(newarry);


