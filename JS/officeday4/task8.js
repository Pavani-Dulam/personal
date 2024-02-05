function cal()
{
let radius = document.getElementById('textfield').value;
let result=4/3*3.14*radius*radius*radius;
document.getElementById("demo").innerHTML = result;
// a.innerHTML=result;
// document.write(result)
}
