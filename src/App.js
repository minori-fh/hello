import React from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from "./components/Nav/Nav";
import SidebarContactMe from "./components/SidebarContactMe/SidebarContactMe";

function App() {
  return (
    <div className="App">
      <Nav/>
      <SidebarContactMe/>
    </div>
  );
}

export default App;
