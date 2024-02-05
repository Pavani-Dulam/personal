const prompt = require("prompt-sync")({sigint:true});
console.log("check number is positive or not")
var a=Number(prompt("enter a number"))
if(a>0){
    console.log("positive number")
}
else if(a<0)
{
    console.log("negative number")
}
else{
    console.log("zero")
}
