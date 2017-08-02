import React, { Component } from 'react';
import './weui/example.css';
import './weui/weui.min.css';
import classNames from 'classnames';

class Btn extends Component {
  render() {
    let cla = classNames({
      'weui-btn': true,
      'weui-btn_primary': true,
      'weui-btn_disabled': this.props.disabled
    });
    return (
      <div className="weui-btn-area">
        <a href="javascript:;" className={ cla } onClick={ this.props.onClick }>{ this.props.label }</a>
      </div>
    );
  }
}

export default Btn;
