import React, { Component } from 'react'
import TabControl from './TabControl.js'
export default class App extends Component {
  titles=["新款","流行","精选"];
  constructor(props){
    super(props)
    this.state={
      currentTitle:"新款"
    }
  }
  render() {
    return (
      <div>
        <TabControl titles={this.titles} itemClick={(index)=>{this.itemClick(index)}}/>
        <h2>{this.state.currentTitle}</h2>
      </div>
    )
  }
  itemClick(index){
    this.setState({
      currentTitle:this.titles[index]
    })
  }
}
