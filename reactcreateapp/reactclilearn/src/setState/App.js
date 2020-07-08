import React, { Component,memo } from 'react'

const Header = memo(function Header(){
  console.log("Header")
  return (<h2>Header</h2>)
})
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:0,
      movies: ["星际穿越","AAA"]
    }
  }
  // componentDidMount(){
  //   document.getElementById("btn").addEventListener("click",()=>{
  //     this.setState({
  //       counter:this.state.counter+1
  //     })
  //     console.log(this.state.counter)
  //   })
  // }
  btnClick= () => {
    // this.setState({
    //   counter:this.state.counter+1
    // })
    // this.setState({
    //   counter:this.state.counter+1
    // })
    // this.setState({
    //   counter:this.state.counter+1
    // })
    ///////////////合并结果累加//////////////////////////
    // this.setState((preState,props)=>{
    //   return {
    //     counter:preState.counter+1
    //   }
    // })
    // this.setState((preState,props)=>{
    //   return {
    //     counter:preState.counter+1
    //   }
    // })
    // this.setState((preState,props)=>{
    //   return {
    //     counter:preState.counter+1
    //   }
    // })
    ////////////////keys优化//////////////////
    if(this.state.movies.some(item=>item=="大话西游")){
      this.setState({
        movies:[...this.state.movies]
      })
    }else{
      this.setState({
        movies:[...this.state.movies,"大话西游"]
      })
    }
  }
  shouldComponentUpdate(nextProps,nextState){
    // if(nextState.movies == this.state){
    //   return false
    // }else {
      return true
    // }
  }
  
  render() {
    console.log("调用render")
    return (
      <div>
        <Header/>
        <ul>
          {
            this.state.movies.map(item =>{
              return <li key={item}>{item}</li>
            })
          }
        </ul>
        <button id="btn" onClick={this.btnClick}>+1</button>
      </div>
    )
  }
}
