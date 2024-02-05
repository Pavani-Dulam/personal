const prompt = require("prompt-sync")({sigint:true});
var a=Number(prompt("enter 1st number"))
var b=Number(prompt("enter 2nd number"))
var c=Number(prompt("enter 3rd number"))
if((a>b)&&(a>c))
{
    console.log("a is big"+a)
}
else if((b>c)){
    console.log("b is big"+b)
}
else{
    console.log("c is big"+c)
}