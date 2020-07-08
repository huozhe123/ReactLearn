import React, { PureComponent } from 'react'

 class Home extends PureComponent {
   constructor(props){
     super(props);
     this.state={
       counter:0
     }
     console.log("constructor")
   }
  //  //即将渲染时获取一个时间beginTime
  //  UNSAFE_componentWillMount() {
  //    console.log("componentWillMount")
  //    this.beginTime = Date.now()
  //  }
  
  render() {
    console.log("render")
    return (
      <div>
        <button onClick={()=>{this.onClickMe()}}>点我 </button>
      </div>
    )
  }
  onClickMe(){
    this.setState({
      counter:this.state.counter+1
    },()=>{
      console.log(this.state.counter)
    })
  }
  // //渲染完成时获取一个时间
  // componentDidMount(){
  //   // console.log("componentDidMount")
  //   this.endTime=Date.now();
  //   const interval = this.endTime-this.beginTime;
  //   console.log(`渲染时间：${interval}`)
  // }
  
}
//问题：如果有多个组件都需要计算渲染时间，那么都需要拷贝相同的代码，非常的冗余
//mixin：混入
//使用高阶组件
function withRenderTime(WrapperComponent){
  return class extends PureComponent{
    //即将渲染时获取一个时间beginTime
    UNSAFE_componentWillMount() {
      console.log("componentWillMount")
      this.beginTime = Date.now()
    }
    //渲染完成时获取一个时间
    componentDidMount(){
      // console.log("componentDidMount")
      this.endTime=Date.now();
      const interval = this.endTime-this.beginTime;
      console.log(`${WrapperComponent.name}的渲染时间：${interval}`)
    }
    render(){
      return <WrapperComponent/>
    }
  }
}
class About extends PureComponent{
  render(){
    return <div>About</div>
  }
}
const HomComponent = withRenderTime(Home);
const AboutComponent = withRenderTime(About);
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <HomComponent/>
        <AboutComponent/>
      </div>
    )
  }
}
