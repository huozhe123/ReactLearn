import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      username: "",
      friuts:"banner"
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e=>this.handleSubmit(e)}>
          <label htmlFor="username">用户</label>
          <input type="text" id="username" name="username" onChange={(e)=>{this.handleChange(e)}} value={this.state.username}/>
          <select name="friuts" onChange={e=>this.handleSelect(e)} value={this.state.friuts}>
            <option value="banner">香蕉</option>
            <option value="apple">苹果</option>
          </select>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }
  handleSubmit(event){
    event.preventDefault();
  }
  handleChange(e) {
    this.setState({
      username:e.target.value
    })
  }
  handleSelect(e){
    console.log(e.target.name)
    this.setState({
      friuts:e.target.value
    },()=>{
      console.log(this.state.friuts)
    })
  }
}
