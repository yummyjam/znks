import React, { Component } from 'react';
import './weui/example.css';
import './weui/weui.min.css';

class Input extends Component {
  render() {
    let hd;
    if (this.props.label) {
      hd = <div className="weui-cell__hd"><label className="weui-label">{ this.props.label }</label></div>;
    }
    return (
      <div className="weui-cell">
        { hd }
        <div className="weui-cell__bd">
          <input className="weui-input" type={ this.props.type } placeholder={ this.props.placeholder } ref={ (input) => { this.input = input; } } />
        </div>
      </div>
    );
  }
}

export default Input
