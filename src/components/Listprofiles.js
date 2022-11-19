import React, { Component } from 'react'
import Profile from './profile/Profile'

export default class Listprofiles extends Component {

  render() {
    console.log(this.props.profiles) 
    return (
      <div>
{
    this.props.profiles.map((el,index)=><Profile  showing={this.props.showing} myprofile={el}/>)
}
      </div>
    )
  }
}
