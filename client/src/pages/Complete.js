import React, { Component } from 'react';
import '../components/weui/example.css';
import '../components/weui/weui.min.css';
import Msg from "../components/Msg";

class Complete extends Component {
  render() {
    return(
      <div className="page__bd">
        <Msg title="成功！" desc="稍后您会收到信息" primaryBtn="再来一单" />
      </div>
    );
  }
}

export default Complete;
