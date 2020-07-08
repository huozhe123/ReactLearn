import React, { PureComponent } from 'react'
import classnames from 'classnames'
import './style.css'
export default class index extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      isActive:false
    }
  }
  render() {
    return (
      <div>
        <div className={classnames("title","head")}>标题</div>
        <div className={classnames({"active":this.state.isActive})}>头部</div>
      </div>
    )
  }
}
