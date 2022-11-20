
import React, { Component, useState } from 'react'
import zoubaida from "./pic.jpg"
import Listprofiles from './components/Listprofiles';
export default class App extends Component {
  
  state = {
    Person: 
      {
        id: Math.random(),
        fullName: "zoubaida Driss",
        bio: "hello there !!",
        imgSrc: zoubaida,
        profession: "developer",
      },
      shows:true
    ,
    count:0
  };
myshowfunct=()=>{

  this.setState({shows:!this.state.shows} )

}
componentDidMount() {
  setInterval(() => {
   this.setState({count:this.state.count++})
  }, 1000);
}
  render() {
    console.log(this.state.Person.shows)
    return (
      <div>
      <h1>The component has been rendered for {this.state.count} seconds</h1>
        <Listprofiles profiles={this.state.Person} showing={this.myshowfunct} show={this.state.shows}></Listprofiles>
        {/* the button in comp profiles doesn't work i think the problem in parameter of the function 
        i can't find a sol for it sorry for that  */}
      </div>
    )
  }
}
