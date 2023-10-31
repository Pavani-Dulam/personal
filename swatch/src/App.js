import React,{useEffect} from "react";
import "./App.css";
const App=()=>{
  const Click=()=> {
    var deg=-90;
    document.querySelectorAll(".swatches > div").forEach((a)=>{
     a.style.cssText=`transform:rotate(${deg}deg);`;
     deg=deg+15;
    
})}

const remove=()=>{
  var deg=90;
  document.querySelectorAll(".swatches > div").forEach((a)=>{
   a.style.cssText=`transform:rotate(${deg}deg);`;


}
  )}


 
  return(
    <div className="container">
      <div className="swatches"onClick={Click}>
          <div>
            <h2>pavani</h2>
          </div>
          <div>
            <h2>pavani</h2>
          </div>
          <div>
            <h2>pavani</h2>
          </div>
          <div>
            <h2>pavani</h2>
          </div>
          <div>
            <h2>pavani</h2>
          </div>
          <div>
            <h2>pavani</h2>
          </div>
          <div>
            <h2>pavani</h2>
          </div>
          <div>
            <h2>pavani</h2>
          </div>
          <div>
            <h2>pavani</h2>
          </div>
          <div>
            <h2>pavani</h2>
          </div>
          <div>
            <h2>pavani</h2>
          </div>
          <div>
            <h2>pavani</h2>
          </div>
          <div>
            <h2>pavani</h2>
          </div>
         
         
          
          
       
      </div>
      <button onClick={remove}>button</button>
     
    </div>
    

  )
}
export default App;