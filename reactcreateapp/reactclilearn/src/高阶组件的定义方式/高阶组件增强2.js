import React, { PureComponent, createContext } from 'react'

const UserContext = createContext({
  name:"zhangsan",
  age:"18",
  region:"中国"
})
// class Home extends PureComponent{
//     render(){
//       return (
//         <UserContext.Consumer>
//           {
//             user => {
//               return (
//               <div>{`姓名：${user.name},年龄：${user.age}，国家:${user.region}`}</div>
//               )
//             }
//           }
//         </UserContext.Consumer>
//       )
//     }
// }
class Home extends PureComponent{
  render(){
    console.log(this.props)
    return (
            <div>{`姓名：${this.props.name},年龄：${this.props.age}，国家:${this.props.region}`}</div>
    )
  }
}
//高阶组件
function withRouter(WrapperComponent){
  return (props => {
    return (<UserContext.Consumer>
      {
        user=>{
          return (
            <WrapperComponent {...user} {...props} />
          )
        }
      }
    </UserContext.Consumer>
  )})
}
const HomeComponent = withRouter(Home);
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{name:"lisi",age:"88"}}>
          <HomeComponent/>
        </UserContext.Provider>
      </div>
    )
  }
}
