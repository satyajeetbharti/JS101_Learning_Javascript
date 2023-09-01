// Problem 3 : Given an array of numbers find the average of all the even numbers.

let arr=[12,13,13,17,20,24,6,]
let even=0;

for(let i=0;i<arr.length;i++){
  if(arr[i]%2===0){
    // console.log(arr[i])
    even+=arr[i]
  }
}
console.log(even)

