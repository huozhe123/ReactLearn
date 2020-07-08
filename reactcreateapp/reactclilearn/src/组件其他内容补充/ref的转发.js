import React, { PureComponent, createRef, forwardRef } from 'react'

class Home extends PureComponent{
  constructor(props){
    super(props)
  }
  render(){
    return <h2>Home</h2>
  }
}
//高阶组件forwardRef
const AboutCpn = forwardRef(function(props,ref){
  return <h2 ref={ref}>About</h2>
})

//通过ref获取DOM
export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.titleRef = createRef()
    this.homeRef = createRef()
    this.aboutRef = createRef()
  }
  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello World</h2>
        <Home ref={this.homeRef}/>
        <AboutCpn ref={this.aboutRef}/>
        <button onClick={()=>{this.printRef()}}>打印ref</button>
      </div>
    )
  }
  printRef(){
    console.log(this.aboutRef)
  }
}
