import React, { PureComponent, Fragment } from 'react'

export default class fragment extends PureComponent {
  render() {
    return (
      //短语法不能添加key，类似vue的template
      // <>
      //   <h2>Fragment的使用</h2>
      // </>
      <Fragment>
        <h2>Fragment的使用</h2>
      </Fragment>
    )
  }
}
