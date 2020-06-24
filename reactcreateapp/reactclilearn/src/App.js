import React, { Component } from 'react'
import PropTypes from 'prop-types';
// ChildCpn.propTypes={
//   name: PropTypes.array.isRequired
// }
// ChildCpn.defaultProps={
//   age:12
// }
class ChildCpn extends Component{
  constructor(props){
    super()
    console.log(this.props)
  }
  componentDidMount(){
    console.log(this.props)
  }
  render(){
   
    return (
      <button onClick={this.props.name}>+1</button>
    )
  }
}
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      counter:0
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={()=>{this.add()}}>+1</button>
        <ChildCpn name={()=>{this.add()}} />
      </div>
    )
  }
  add(){
    this.setState({
      counter:this.state.counter+1
    })
  }
}
