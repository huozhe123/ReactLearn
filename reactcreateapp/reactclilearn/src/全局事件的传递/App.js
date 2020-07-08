import React, { PureComponent } from 'react'
import {EventEmitter} from 'events' 

const eventBus = new EventEmitter()
class Home extends PureComponent{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    eventBus.addListener("sayHello",this.handleEventListener)
  }
  componentWillUnmount(){
    eventBus.removeListener("sayHello",this.handleEventListener)
  }
  handleEventListener(str,num){
    console.log(str,num)
  }
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}
class Profile extends PureComponent{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        Profile
        <button onClick={()=>this.emitEvent()}>点击了profile按钮</button>
        <Home/>
      </div>
    )
  }
  emitEvent() {
    eventBus.emit("sayHello","Hello world",123)
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Profile/>
      </div>
    )
  }
}
