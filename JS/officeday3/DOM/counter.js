var countdownElement=document.getElementById('countdown');
var initialCountDown=countdownElement.innerHTML;
// console.log(countdownElement)
// console.log( initialCountDown)
setInterval(function(){
    initialCountDown=initialCountDown>0 ? initialCountDown-1:0;
    countdownElement.innerHTML=initialCountDown;
    countdownElement.style.fontSize=initialCountDown*100+"px";
},1000)
