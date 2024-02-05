const prompt = require("prompt-sync")({sigint:true});
console.log("area of triangle")
var base=Number(prompt("enter base value"))
var height=Number(prompt("enter height value"))
area=0.5*base*height
console.log(area)
