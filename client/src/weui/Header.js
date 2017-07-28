import React, { Component } from 'react';
import './example.css';
import './weui.min.css';

class Header extends Component {
  render() {
    let desc;
    if (this.props.desc) {
      desc = <p className="page__desc">页脚</p>;
    }
    return (
      <div className="page__hd">
        <h1 className="page__title">{ this.props.title }</h1>
        { desc }
      </div>
    );
  }
}

export default Header;
