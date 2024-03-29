import React, { Component } from 'react';
import './weui/example.css';
import './weui/weui.min.css';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState(prevState => ({
      value: this.select.value
    }));
  }
  render() {
    let options = [];
    for (let key in this.props.options) {
      options.push(<option value={ key }>{ this.props.options[key] }</option>);
    }
    return (
      <div className="weui-cell weui-cell_select weui-cell_select-after">
        <div className="weui-cell__hd">
          <label className="weui-label">{ this.props.label }</label>
        </div>
        <div className="weui-cell__bd">
          <select className="weui-select" ref={ (select) => { this.select = select; } } onChange={ this.handleChange }>
            <option value="0"></option>
            { options }
          </select>
        </div>
      </div>
    );
  }
}

export default Select;
