import React, { useState } from "react";
import './App.css';
import "./components/sidebar.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App relative shadow-lg">
      <div className="sticky top-0">
        <Header onHamburgerClick={toggleSidebar} />
      </div>

      <div className="flex pt-1">
        <Sidebar isOpen={isSidebarOpen} />
        <Body />
      </div>
    </div>
  );
}

export default App;
