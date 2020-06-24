import React, { Component } from 'react'
import { render } from 'react-dom';

//创建context对象
const UserContext = React.createContext({
  nickname:"aaaa",
  leve:-1
});//可传入默认值
const ThemeContext = React.createContext({
  color:"red"
})
// class ProfileHeader extends Component{
//   constructor(props){
//     super(props);
    
//   }
//   render(){
//     return (
//       <div>
//         <h2>用户昵称：{this.context.nickname}</h2>
//         <h2>用户等级：{this.context.level}</h2>
//       </div>
//     )
//   }
// }

function ProfileHeader(){
  return (
    <UserContext.Consumer>
      {
        value=>{
          return (
            <ThemeContext.Consumer>
              {
                theme=>{
                  return (
                  <h2>{theme.color}</h2>
                  )
                }
              }
            </ThemeContext.Consumer>
          )
        }
      }
    </UserContext.Consumer>
  )
}
class Profile extends Component{
  render(){
    return (
      <div>
       {/* <ProfileHeader/>*/}
        <ul>
          <li>设置1</li>
          <li>设置1</li>
          <li>设置1</li>
          <li>设置1</li>
        </ul>
      </div>
    );
  }
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
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{color:"green"}}>
            <Profile />
            <ProfileHeader/>
          </ThemeContext.Provider>
        </UserContext.Provider>
        
      </div>
    )
  }
}
