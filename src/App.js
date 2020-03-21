import React, { Component } from 'react';
import './App.css';

import Nav from "./components/Nav/Nav";
import SidebarContactMe from "./components/SidebarContactMe/SidebarContactMe";
import Main from "./components/Main/Main";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        portfolio: false,
        about: false,
        intro: true,
    }
  }

  goToPortfolio = () =>{
    this.setState({
      portfolio: true,
      about: false,
      intro: false,
    })
    console.log("portfolio state is: " + this.state.portfolio)
  }

  goToAbout = () =>{
    this.setState({
      about: true,
      portfolio: false,
      intro: false,
    })
    console.log("about state is: " + this.state.about)
  }

  render(){
    return(
      <div>
        <Nav portfolio={this.goToPortfolio} about={this.goToAbout} portState={this.state.portfolio} aboutState={this.state.about}/>
        <SidebarContactMe/>
        <Main portState={this.state.portfolio} aboutState={this.state.about} introState={this.state.intro}/>
     </div>
    )
  }
}
    
export default App;
