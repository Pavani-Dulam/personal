const prompt = require("prompt-sync")({sigint:true});
console.log("even odd program")
var num=Number(prompt("enter a number"))
if(num%2==0){
    console.log("even number")
}
else{
    console.log("odd number")
}