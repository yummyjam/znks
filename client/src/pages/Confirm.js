import React, { Component } from 'react';
import '../components/weui/example.css';
import '../components/weui/weui.min.css';
import Preview from "../components/Preview";

class Confirm extends Component {
  render() {
    return (
      <div className="page__bd">
        <Preview label="付款金额" value="100" primaryBtn="确定" primaryClick={ undefined } items={
          {
            '1': '哈哈',
            '2': '嘻嘻'
          }
        } />
      </div>
    );
  }
}

export default Confirm;