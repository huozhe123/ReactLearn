import React from 'react';
import ReactDOM from 'react-dom';
// import App from './react的solt/App';
// import App from './跨组件通信/App';
// import App from './setState/App';
// import App from './setState不可变的力量/App';
// import App from './全局事件的传递/App';
// import App from './refs的使用/App';
// import App from './受控组件和非受控组件/App';
// import App from './高阶组件的定义方式/App';
// import App from './高阶组件的定义方式/高阶组件应用';
// import App from './高阶组件的定义方式/高阶组件增强2';
// import App from './高阶组件的定义方式/登录鉴权操作';
// import App from './高阶组件的定义方式/高阶组件应用-生命周期劫持';
// import App from './组件其他内容补充/ref的转发'
// import App from './组件其他内容补充/portals的使用'
// import App from './组件其他内容补充/fragment'
// import App from './React中写css/内联样式/index'
// import App from './React中写css/cssmodule/index'
// import App from './React中写css/styledScomponents/index'
// import App from './classnames第三方库/index'
import App from './antdesign/Index'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
