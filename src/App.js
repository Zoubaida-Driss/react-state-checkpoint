
import React, { Component, useState } from 'react'
import zoubaida from "./pic.jpg"
import Listprofiles from './components/Listprofiles';
export default class App extends Component {
  
  state = {
    Person: [
      {
        id: Math.random(),
        fullName: "zoubaida Driss",
        bio: "hello there !!",
        imgSrc: zoubaida,
        profession: "developer",
        shows:true
      }
    ],
    count:0
  };
myshowfunct=(i)=>{

  this.setState({shows:!this.state.Person.map((el,index)=> el===i ? {...el,shows:!el.shows}:el )

})}
componentDidMount() {
  setInterval(() => {
   this.setState({count:this.state.count++})
  }, 1000);
}
  render() {
    // console.log(this.state.Person.shows)=>undifined pourquoi ??
    return (
      <div>
      <h1>The component has been rendered for {this.state.count} seconds</h1>
        <Listprofiles profiles={this.state.Person} showing={this.myshowfunct}></Listprofiles>
        {/* the button in comp profiles doesn't work i think the problem in parameter of the function 
        i can't find a sol for it sorry for that  */}
      </div>
    )
  }
}
