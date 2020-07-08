import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      color:"yellow"
    }
  }
  render() {
    const pStyle={
      color:"tomato",
      textDecoration:"underline"
    }
    return (
      <div>
        <h2 style={{fontSize:'20px',color:'red'}}>内联样式</h2>
        <h3 style={pStyle}>内联样式1</h3>
        <h4 style={{color:this.state.color}}>内联样式2</h4>
      </div>
    )
  }
}
