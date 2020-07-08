import React, { PureComponent } from 'react'
import { Button,DatePicker  } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'
import moment from 'moment'
import 'antd/dist/antd.css'

const { RangePicker } = DatePicker
const dateFormat = "YYYY/MM/DD"
export default class Index extends PureComponent {
  state = {
    loadings: [],
  };
  render() {
    const { loadings } = this.state;
    return (
      <>
        <Button loading>
          Loading
        </Button>
        <Button size="small" loading>
          Loading
        </Button>
        <Button icon={<PoweroffOutlined />} loading />
        <br />
        <Button loading={loadings[0]} onClick={() => this.enterLoading(0)}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />
    <RangePicker />
    <br />
    <RangePicker
      allowClear = { false}
      defaultValue={[moment('2019/09/03', dateFormat), moment('2019/11/22', dateFormat)]}
      disabled={[false, true]}
    />
    </>
    )
  }
}
