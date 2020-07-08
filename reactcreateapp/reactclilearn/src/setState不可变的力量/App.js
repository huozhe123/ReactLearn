import React, { Component } from 'react'

export default class app extends Component {
  constructor(props){
    super(props);
    this.state={
      friends:[
        {name:'zhangsan',age:19},
        {name:'lisi',age:20}
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>好友列表</h2>
        <ul>
          {
            this.state.friends.map((item,index) => {
              return <li key={item.name}>
                姓名：{item.name}，年龄：{item.age}
                <button onClick={e => this.increment(index) }>age+1</button>
              </li>
            })
          }
        </ul>
        <button onClick={()=>{this.addData()}}>添加数据</button>
      </div>
    )
  }
  addData() {
    const stat = [...this.state.friends, ... [{name:'sd',age:13}] ]
    console.log(stat)
    this.setState({
      friends: stat
    })
  }
  increment(index) {
    console.log(index)
    //REACT官网推荐使用浅拷贝，因为数组是引用类型，在shouldComponentUpdate中浅比较的是地址，需要使用引用的拷贝，使地址不同
    const friends = this.state.friends
    friends[index].age += 1
    this.setState({
      friends: friends
    })
  }
}
