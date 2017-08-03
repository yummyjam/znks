import React, { Component } from 'react';
import './weui/example.css';
import './weui/weui.min.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState(prevState => ({
      value: this.input.value
    }));
  }
  render() {
    let hd;
    if (this.props.label) {
      hd = <div className="weui-cell__hd"><label className="weui-label">{ this.props.label }</label></div>;
    }
    return (
      <div className="weui-cell">
        { hd }
        <div className="weui-cell__bd">
          <input className="weui-input" type={ this.props.type } placeholder={ this.props.placeholder } ref={ (input) => { this.input = input; } } onChange={ this.handleChange } />
        </div>
      </div>
    );
  }
}

export default Input
