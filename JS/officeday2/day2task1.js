// perform arithmetic operations for 3 numbers
const prompt = require("prompt-sync")({sigint:true});
console.log("1.adddition 2.substraction 3.multiplication 4.division 5.remainder")
var val=Number(prompt("enter your option"))
var a=Number(prompt("enter 1st number="))
var b=Number(prompt("enter 2nd number="))
var c=Number(prompt("enter 3rd number="))


switch(val){
    case 1:
        sum=a+b+c
        console.log("sum="+sum)
        break;
    case 2:
        sub=a-b-c
        console.log("sub="+sub)
        break;
    case 3:
        mul=a*b*c
        console.log("multiplication="+mul)
        break;
    case 4:
        div=a/b/c
        console.log("division="+div)
        break;
    case 5:
        rem=a%b%c
        console.log("remainder="+rem)
        break;
    default:
        console.log("enter valid option")

}