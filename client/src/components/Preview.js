import React, { Component } from 'react';
import './weui/example.css';
import './weui/weui.min.css';

class Preview extends Component {
  render() {
    let items = [];
    for (let key in this.props.items) {
      items.push(
        <div className="weui-form-preview__item">
          <label className="weui-form-preview__label">{ key }</label>
          <span className="weui-form-preview__value">{ this.props.items[key] }</span>
        </div>
      );
    }
    let defaultBtn;
    if (this.props.defaultBtn && this.props.defaultClick) {
      defaultBtn = <a className="weui-form-preview__btn weui-form-preview__btn_default" href="javascript:;" onClick={ this.props.defaultClick }>{ this.props.defaultBtn }</a>;
    }
    return (
      <div className="weui-form-preview">
        <div className="weui-form-preview__hd">
          <label className="weui-form-preview__label">{ this.props.label }</label>
          <em className="weui-form-preview__value">{ this.props.value }</em>
        </div>
        <div className="weui-form-preview__bd">
          { items }
        </div>
        <div className="weui-form-preview__ft">
          <a className="weui-form-preview__btn weui-form-preview__btn_primary" href="javascript:;" onClick={ this.props.primaryClick }>{ this.props.primaryBtn }</a>
        </div>
      </div>
    );
  }
}

export default Preview;
