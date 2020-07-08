import React, { Component } from 'react'
import NavBar from './NavBar'
import NavBar2 from './NavBar2'
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <span>aaa</span>
          <span>bbb</span>
          <span>ccc</span>
        </NavBar>
        <NavBar2 leftSolt={<span>aaa</span>}
                 centerSolt={<span>bbb</span>}
                 rightSolt={<span>ccc</span>}>
        </NavBar2>
      </div>
    )
  }
}
