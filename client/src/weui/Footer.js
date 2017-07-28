import React, { Component } from 'react';
import './example.css';
import './weui.min.css';

class Footer extends Component {
  render() {
    let links = [];
    for (let key in this.props.links) {
      links.push(<a href={ this.props.links[key] } className="weui-footer__link">{ key }</a>);
    }
    return (
      <div className="weui-footer">
        <p className="weui-footer__links">
          { links }
        </p>
        <p className="weui-footer__text">{ this.props.text }</p>
      </div>
    );
  }
}

export default Footer;
