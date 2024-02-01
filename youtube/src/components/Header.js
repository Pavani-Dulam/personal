import React from "react";
import "./sidebar.css";
const Header=({onHamburgerClick})=>{

    return(
       <header className="App-header p-3 headercom flex items-center " style={{backgroundColor:"white"}}>
        <img alt="hamburger"  className="w-6 h-4" onClick={onHamburgerClick}src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/hamburger-menu-icon.png"/>
         <img className="w-24 h-8"  src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"/><sup>IN</sup>
         <input placeholder="Serach" className="p-3 border h-8 mx-auto w-2/5 rounded-3xl" />
         <img src="https://cdn-icons-png.flaticon.com/128/10374/10374095.png" className=" head1 w-7"/>
         <img src="https://cdn-icons-png.flaticon.com/128/3602/3602145.png" className=" head2 mx-5 w-6"/>
         <img className="w-8 rounded-3xl" src="https://t3.ftcdn.net/jpg/04/98/72/34/240_F_498723403_z4fuq80BS1ncyslJlQVemyoF9CwNZaiu.jpg"/>
       </header>
    )

}
export default Header;