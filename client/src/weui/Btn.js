import React, { Component } from 'react';
import './example.css';
import './weui.min.css';
import classNames from 'classnames'

class Btn extends Component {
  render() {
    return (
      <div className="weui-btn-area">
        <a href="javascript:;" className="weui-btn weui-btn_primary" onClick={ this.props.onClick }>{ this.props.label }</a>
      </div>
    );
  }
}

export default Btn;
