import React, { PureComponent } from 'react'

class Home extends PureComponent{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        {`name:${this.props.name},age:${this.props.age},region:${this.props.region}`}
      </div>
    )
  }
}
class About extends PureComponent{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        {`name:${this.props.name},age:${this.props.age},region:${this.props.region}`}
      </div>
    )
  }
}
//高阶组件
function EnhanceRegionComponent(WrapperComponent){
  return class extends PureComponent{
    render(){
      return (
        <WrapperComponent {...this.props} region="中国"/>
      )
    }
  }
}

// export default enhanceRegionComponent(Home)
const EnhanceHome = EnhanceRegionComponent(Home)
const EnhanceAbout = EnhanceRegionComponent(About)
//定义一个高阶组件,传递一个需要包裹的组件

export default class 高阶组件应用 extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome name="zhangsan" age="18"/>
        <EnhanceAbout name="lisi" age="20"/>
      </div>
    )
  }
}
