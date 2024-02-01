import React from "react";
import "./sidebar.css";
const Sidebar = ({ isOpen }) => {
    return (
        <>

            <div class={`w-60 ${isOpen ? "block" : "hidden"} relative side1`} >
                <ul class="ml-2 pt-0  fixed top-12 left-0 hover:overflow-scroll " style={{ height: "100%" }}>

                    <header className="App-header p-2 flex items-center   hover:bg-gray-200 cursor-pointer">
                        <img alt="home" className="w-6 h-4" src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png" /><li className="px-5 py-0">Home</li>
                    </header>

                    <header className="App-header p-2 flex items-center   hover:bg-gray-200 cursor-pointe">
                        <img alt="shorts" className="w-6 h-4" src="https://www.iconpacks.net/icons/5/free-icon-youtube-shorts-logo-15253.png" /><li className="px-5 py-0">Shorts</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="sub" className="w-6 h-4" src="https://cdn-icons-png.flaticon.com/128/2989/2989849.png" /><li className="px-5 py-0">Subscriptions</li>
                    </header>
                    <b><hr></hr></b>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="lib" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/2989/2989835.png" /><li className="px-5 py-0">Library</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="his" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/2961/2961948.png" /><li className="px-5 py-0">History</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="your videos" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/8300/8300900.png" /><li className="px-5 py-0">Your videos</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="watch later" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/992/992700.png" /><li className="px-5 py-0">Watch later</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="liked videos" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/126/126473.png" /><li className="px-5 py-0">Liked videos</li>
                    </header>
                    <hr></hr>

                    <b><h1 className="px-3 py-0">Explore</h1></b>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="trending" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/1942/1942064.png" /><li className="px-5 py-0">Trending</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="shopping" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/2662/2662503.png" /><li className="px-5 py-0">Shopping</li>
                    </header>

                    <header className="App-header p-3 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="music" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/9396/9396862.png" /><li className="px-5 py-0">Music</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="movies" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/4241/4241295.png" /><li className="px-5 py-0">Movies</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer ">
                        <img alt="live" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/2989/2989838.png" /><li className="px-5 py-0">Live</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer ">
                        <img alt="gaming" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/686/686589.png" /><li className="px-5 py-0">Gaming</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="news" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/2537/2537926.png" /><li className="px-5 py-0">News</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer ">
                        <img alt="sports" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/1152/1152912.png" /><li className="px-5 py-0">Sports</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer ">
                        <img alt="learning" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/2961/2961545.png" /><li className="px-5 py-0">Learning</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="fashion" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/828/828474.png" /><li className="px-4 py-0">Fashion&Beauty</li>
                    </header>

                    <hr></hr>
                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="browse" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/11362/11362006.png" /><li className="px-4 py-0">Browse channels</li>
                    </header>
                    <hr></hr>

                    <b><h1 className="px-3 py-0">More from YouTube</h1></b>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="premium" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/400/400425.png" /><li className="px-4 py-0">YouTube Premium</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="music" className="w-6 h-5" src="https://as1.ftcdn.net/v2/jpg/03/01/15/82/1000_F_301158214_2A6zypf2tWDVqxtNnoBy1hRxfYMlhmVa.jpg" /><li className="px-4 py-0">YouTube Music</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="kids" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/3698/3698369.png" /><li className="px-4 py-0">YouTube Kids</li>
                    </header>
                    <hr></hr>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer
           cursor-pointer">
                        <img alt="settings" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/2040/2040504.png" /><li className="px-4 py-0">Settings</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer  ">
                        <img alt="report" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/2814/2814368.png" /><li className="px-4 py-0">Report history</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="help" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/471/471664.png" /><li className="px-4 py-0">Help</li>
                    </header>

                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="feeed" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/813/813419.png" /><li className="px-4 py-0">Send feedback</li>
                    </header>
                    <header className="App-header p-2 flex items-center    hover:bg-gray-200 cursor-pointer">
                        <img alt="feeed" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/813/813419.png" /><li className="px-4 py-0">Send feedback</li>
                    </header>





                </ul>
            </div>


            <div class={`w-48 ${!isOpen ? "block" : "hidden"} relative side2`} >
                <ul class="ml-2 pt-0  fixed top-12 left-0 hover:overflow-scroll " style={{ height: "100%" }}>
                    <header className="App-header p-2  items-center   hover:bg-gray-200 cursor-pointer
          ">
                        <img alt="home" className="w-6 h-4" src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png" /><li>Home</li>
                    </header>

                    <header className="App-header p-2 items-center   hover:bg-gray-200 cursor-pointer
          ">
                        <img alt="shorts" className="w-6 h-4" src="https://www.iconpacks.net/icons/5/free-icon-youtube-shorts-logo-15253.png" /><li>Shorts</li>
                    </header>

                    <header className="App-header p-2  items-center    hover:bg-gray-200 cursor-pointer
          ">
                        <img alt="his" className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/128/2961/2961948.png" /><li>History</li>
                    </header>

                    <header className="App-header p-2 items-center    hover:bg-gray-200 cursor-pointer
          ">
                        <img alt="sub" className="w-6 h-4" src="https://cdn-icons-png.flaticon.com/128/2989/2989849.png" /><li>Subscriptions</li>
                    </header>
                </ul>



            </div>
        </>

    )
}
export default Sidebar;