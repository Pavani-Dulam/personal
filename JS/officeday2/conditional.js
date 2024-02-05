const prompt = require("prompt-sync")({sigint:true});
if(5>7){
    console.log(true)
}
else{
    console.log(false)
}
let current=prompt("enter day")
switch(current)
{
    case "1":
        console.log('monday')
        break;
    case "2":
        console.log("tuesday")
        break;
    default:
        console.log("enter valid")
}