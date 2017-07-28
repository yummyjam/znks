import React, { Component } from 'react';
import './example.css';
import './weui.min.css';

class Title extends Component {
  render() {
    return (
      <div className="weui-cells__title">{ this.props.label }</div>
    );
  }
}

export default Title;
