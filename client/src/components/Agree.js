import React, { Component } from 'react';
import './weui/example.css';
import './weui/weui.min.css';

class Agree extends Component {
  render() {
    return (
      <label htmlFor="weuiAgree" className="weui-agree">
        <input id="weuiAgree" type="checkbox" className="weui-agree__checkbox" onClick={ this.props.onClick } />
        <span className="weui-agree__text">
          阅读并同意<a href={ this.props.href }>《相关条款》</a>
        </span>
      </label>
    );
  }
}

export default Agree;
