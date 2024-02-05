const prompt = require("prompt-sync")({sigint:true});
var a=Number(prompt("enter 1st number"))
count=0
for(var i=0;i<a/2;i++){
    if(a%i==0)
    {
        count++
    }
}
if(count==1)
{
    console.log("given number is prime")
}
else{
    console.log("not prime number")
}