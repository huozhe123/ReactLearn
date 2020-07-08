import React, { PureComponent, createRef } from 'react'

class Home extends PureComponent{
  constructor(props){
    super(props)
    // this.title = createRef()
  }
  render(){
    return (
      <div>
        {/* <h2 ref={this.titleRef}>Hello React</h2> */}
        {/* <h2 ref={(args)=>{this.titleEl=args}}>Hello React</h2> */}
        <button onClick={()=>this.changeText()}></button>
      </div>
    )
  }
  changeText(){
    console.log(123)
    // this.refs.titleRef.innerHTML="sd"
    // this.titleRef.current.innerHTML = "zhangsan"
    // this.titleEl.innerHTML = "lisi"
  }
}
export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.titleRef = createRef()
    // this.titleEl = null
  }
  render() {
    return (
      
      <div>
        {/*<div>
        <h2 ref="titleRef">Hello React</h2>
        <button onClick={()=>this.changeText()}></button>
      </div> */}
        <Home ref={this.titleRef}/>
       <button onClick={()=>this.add()}>aaaa</button>
      </div>
    )
  }
    add() {
      this.refs.titleRef.current.changeText()
    }
}
