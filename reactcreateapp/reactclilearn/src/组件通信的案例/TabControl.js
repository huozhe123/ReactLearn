import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
export default class TabControl extends Component {
  constructor(props){
    super(props);
    this.state={
      currentIndex:0
    }
  }
  btnClick(index){
    this.setState({
      currentIndex:index
    })
    this.props.itemClick(index);
  }
  render() {
    const {titles} = this.props;
    const {currentIndex} = this.state
    return (
      <div>
        <ul className="tab-Control">
          {
            titles.map((item,index)=>{
              return <li className="tab-item "
                         key={index}
                         onClick={()=>{this.btnClick(index)}}><span className={""+(currentIndex==index?"tab-active":"")}>{item}</span></li>
            })
          }
        </ul>
      </div>
    )
  }
}
TabControl.propTypes={
  titles:PropTypes.array
}