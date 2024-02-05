function gettodo()
{
    var http=new XMLHttpRequest();
    http.onreadystatechange=function(){
        if(this.readyState==4)
        { 
            console.log(JSON.parse(this.responseText));
        }
    }
    http.open('GET',"https://json.placeholder.typicode.com/todos",true);
    http.send();
}
gettodo()