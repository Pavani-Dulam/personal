// sum of natural numbers
const prompt = require("prompt-sync")({sigint:true});
console.log("sum of natural numbers")
var a=Number(prompt("enter a number"))
sum=a*(a+1)/2
console.log(sum)