import React, { PureComponent } from 'react'

class CartPage extends PureComponent{
  render() {
    return (
      <div>CartPage</div>
    )
  }
}
class LoginPage extends PureComponent{
  render() {
    return (
      <div>LoginPage</div>
    )
  }
}
//登录鉴权
function withAuth(WrapperComponent){
  const NewCpn = (props) => {
    const {isLogin} = props
    if(isLogin){
      return <WrapperComponent {...props}/>
    }else{
      return <LoginPage/>
    }
  }
  NewCpn.displayName="AuthCpn";
  return NewCpn;
}
const Cpn = withAuth(CartPage);
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Cpn isLogin={false}/>
      </div>
    )
  }
}
