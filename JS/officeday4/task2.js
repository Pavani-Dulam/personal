var p1=document.getElementById('para1');
var p2=document.getElementById('para2');
var btn=document.getElementById('but');
btn.addEventListener('click',function(){
    p1.style.backgroundColor="blue";
    p2.style.backgroundColor="green";
    p2.style.width="120px";
    p1.style.width="120px";
})
