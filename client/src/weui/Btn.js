import React, { Component } from 'react';
import './example.css';
import './weui.min.css';

class Btn extends Component {
  render() {
    return (
      <a href="javascript:;" className="weui-btn weui-btn_primary" onClick={ this.props.onclick }>{ this.props.label }</a>
    );
  }
}

export default Btn;
