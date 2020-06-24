import React, { Component } from 'react'

function ProfileHeader(props){
  return (
    <div>
      <h2>用户昵称：{props.nickname}</h2>
      <h2>用户等级：{props.level}</h2>
    </div>
  )
}
function Profile(props){
  const prop={"nickname":props.nickname,"level":props.level}
  return (
    <div>
      <ProfileHeader {...prop}/>
      <ul>
        <li>设置1</li>
        <li>设置1</li>
        <li>设置1</li>
        <li>设置1</li>
      </ul>
    </div>
  )
}
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      nickname:"haaahsdj",
      level:99
    }
  }
  render() {
    const {nickname,level}=this.state
    return (
      <div>
        <Profile {...this.state}/>
      </div>
    )
  }
}
