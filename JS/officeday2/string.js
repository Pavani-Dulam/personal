console.log("string functions")
var num1=10;
// toString()   number as input and returns a string
console.log(typeof(num1.toString()))

// parseInt( ) string numeral as input and returns a number
var num2="10";
console.log(parseInt(num2));
// input "10" output=10

// parseFloat()
var num3="10.5"
console.log(parseFloat(num3))
// input="10.5" output=10.5

var num4="ABC"
console.log(parseFloat(num4))
// it will gives output as NaN
 
// toFixed() takes floating numbers and rounds it off to given position
var num4=87.0908888
console.log(num4.toFixed())
console.log(num4.toFixed(2))
console.log(num4.toFixed(5))
console.log(num4.toFixed(10))
// single and double quote strings
var string1="i love js"
var string2='i love js'
var singlequotestring='this is \'java\''
var doublequotestring="This is a \"javascript\" string"
console.log(typeof(string1))
console.log(typeof(string2))
console.log(doublequotestring )
console.log(singlequotestring)
var MyString="this is a string for javascript functions javascript"
console.log(MyString.length)
console.log(MyString.indexOf('Javascript'))
console.log(MyString.indexOf('javascript'))
console.log(MyString.lastIndexOf('javascript'))
console.log(MyString.indexOf('this'))
console.log(MyString.lastIndexOf('this'))
console.log(MyString.slice(0,4))
console.log(MyString.slice(21,31))
console.log(MyString.slice(-10))
console.log(MyString.slice(5))
// get sub string functions substr(startpos,length)
console.log(MyString.substring(0,2))
console.log(MyString.substring(3))

var examplestr="this is javascript tutorial"
// toUpperCase()=>convert our string uppercase
console.log(examplestr.toUpperCase())
// toLowerCase()=>coverts to lowercase
console.log(examplestr.toLowerCase())
// concat
var ex1="Javascript"
var ex2="playground"
console.log(examplestr.concat(ex1))
console.log(examplestr.concat(ex1,ex2))
console.log(ex1+''+ex2)
// trim() it removes extra spaces
var extra='      mystring  '
console.log(extra)
console.log(extra.trim())
var middle="  my string   "
console.log(middle.trim())
// trim can only removes first and last extra space not in the middle
  
// charAt()
var charat="this is my test string"
console.log(charat.charAt(5))

// split split the string on the basis of arguments passed
 var sample="this is sample string"
 console.log(sample.split(''))
 console.log(sample.split(',')) 
 console.log(sample.split())
   
//  null and undefined
var x
console.log(x)
var y=null
console.log(y)



















































































 


 
 





 



 

