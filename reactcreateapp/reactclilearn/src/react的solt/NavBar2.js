import React, { Component } from 'react';
import './style.css';
export default class NavBar extends Component {
  constructor(props){
    super(props);
    console.log(props)
  }
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-left">
          {this.props.leftSlot}
        </div>
        <div className="nav-center">
          {this.props.centerSlot}
        </div>
        <div className="nav-right">
          {this.props.rightSlot}
        </div>
      </div>
    )
  }
}
