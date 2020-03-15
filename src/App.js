import React, { Component } from 'react';
import './App.css';

import Nav from "./components/Nav/Nav";
import SidebarContactMe from "./components/SidebarContactMe/SidebarContactMe";
import { getRoles } from '@testing-library/react';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        portfolio: false,
        about: false,
    }
  }

  goToPortfolio = () =>{
    this.setState({
      portfolio: true,
      about: false,
    })
    console.log("portfolio state is: " + this.state.portfolio)
  }

  goToAbout = () =>{
    this.setState({
      about: true,
      portfolio: false,
    })
    console.log("about state is: " + this.state.about)
  }

  render(){
    return(
      <div>
        <Nav portfolio={this.goToPortfolio} about={this.goToAbout} portState={this.state.portfolio} aboutState={this.state.about}/>
        <SidebarContactMe/>
     </div>
    )
  }
}
    
export default App;
