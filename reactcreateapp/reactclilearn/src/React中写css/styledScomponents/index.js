import React, { PureComponent } from 'react'
import styled, {ThemeProvider} from 'styled-components';
import {HomeWrapper,TitleWrapper,H2Wrapper} from './style'

//特点：1、props穿透；2、attrs的使用；3、传入state作为props属性
// const HYInput = styled.input`
//   background-color:lightblue;
// `

const HYInput = styled.input.attrs({
  placeholder:"coderwhy",
  bColor:"red"
})`
  background-color:lightblue;
  //border-color: ${props => props.color}
  border-color: ${props => props.bColor}
`
const HYButton = styled.button`
  padding: 10px 20px;
  border-color: red;
  color: red;
`
//继承HYButton的样式
const HYPrimaryButton = styled(HYButton)`
  color: #fff;
  background-color:green;
`
export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      color:"purple"
    }
  }
  show(...args){
    console.log(args)
  }
  render() {
    let name="zhangsan"
    let age=12
    this.show`my name is ${name}, my age is ${age}`
    return (
      //此组件自带样式
      <ThemeProvider theme={{themeColor:"yellow",fontSize:"30px"}}>
        <HomeWrapper>
          <TitleWrapper>
            Hello World
          </TitleWrapper>
          <div className="title">
            <span>轮播1</span>
            <span className="active">轮播2</span>
            <span>轮播3</span>
          </div>
          <HYInput type="text" color={this.state.color}/>

          <HYButton>我是普通按钮</HYButton>
          <HYPrimaryButton>我是主要的按钮</HYPrimaryButton>
        </HomeWrapper>
        <H2Wrapper>我是主题的颜色</H2Wrapper>
      </ThemeProvider>
    )
  }
}
