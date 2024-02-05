// function functionName(para1,para2....paraNa){
     //block of code
// }
function sum(){
    var num1=10;
    var num2=9;
    var sum=num1+num2;
    return sum;
}
console.log(sum())
// function arguments
function greetings(person){
    console.log('welcome');
    console.log(person)
}
greetings("pavani")
greetings("hi")
// sum
function totalsum(num1,num2){
    console.log(num1+num2)
}
totalsum(2,4)
// scope
var n1=10; 
// n1 is global variable
function sum(n2){
    var total=n1+n2;
    // total is local variable
    console.log(total)
}
sum(10)
// 
var h1=10;
function summ(num1){
    var total;
    console.log(total)
    total=h1+num1;
    console.log(total)
}
summ(10)
summ(20)