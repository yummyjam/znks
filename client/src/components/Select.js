import React, { Component } from 'react';
import './weui/example.css';
import './weui/weui.min.css';

class Select extends Component {
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
          <select className="weui-select" ref={ (select) => { this.select = select; } }>
            { options }
          </select>
        </div>
      </div>
    );
  }
}

export default Select;
