import React, { Component } from 'react';
import './weui/example.css';
import './weui/weui.min.css';

class Msg extends Component {
  render() {
    let defaultBtn;
    if (this.props.defaultBtn && this.props.defaultClick) {
      defaultBtn = <a href="javascript:;" className="weui-btn weui-btn_default" onClick={ this.props.defaultClick }>{ this.props.defaultBtn }</a>;
    }
    return (
      <div className="weui-msg">
        <div className="weui-msg__icon-area"><i className="weui-icon-success weui-icon_msg"></i></div>
        <div className="weui-msg__text-area">
          <h2 className="weui-msg__title">{ this.props.title }</h2>
          <p className="weui-msg__desc">{ this.props.desc }</p>
        </div>
        <div className="weui-msg__opr-area">
          <p className="weui-btn-area">
            <a href="javascript:;" className="weui-btn weui-btn_primary" onClick={ this.props.primaryClick }>{ this.props.primaryBtn }</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Msg;
