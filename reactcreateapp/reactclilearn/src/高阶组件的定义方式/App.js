import React, { PureComponent } from 'react'

class App extends PureComponent {
  constructor(props){
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div>
        Hello.Higher Order Component
      </div>
    )
  }
}
//函数组件
// function higherOrderComponent(WrapperComponent){
//   class HelloComponent extends PureComponent{
//     render(){
//       return <WrapperComponent {...this.props}/>
//     }
//   }
//   HelloComponent.displayName="coder";
//   return HelloComponent;
// }
//函数组件
function enhanceComponent(WrapperComponent){
  function HelloComponent(){
    return <WrapperComponent/>
  }
  return HelloComponent
}
export default enhanceComponent(App);