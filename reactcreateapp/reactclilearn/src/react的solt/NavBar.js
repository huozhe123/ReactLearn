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
          {this.props.children[0]}
        </div>
        <div className="nav-center">
          {this.props.children[1]}
        </div>
        <div className="nav-right">
          {this.props.children[2]}
        </div>
      </div>
    )
  }
}
