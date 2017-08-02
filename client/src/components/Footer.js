import React, { Component } from 'react';
import './weui/example.css';
import './weui/weui.min.css';

class Footer extends Component {
  render() {
    let links = [];
    for (let key in this.props.links) {
      links.push(<a href={ this.props.links[key] } className="weui-footer__link">{ key }</a>);
    }
    return (
      <div className="page__ft">
        <div className="weui-footer">
          <p className="weui-footer__links">
            { links }
          </p>
          <p className="weui-footer__text">{ this.props.text }</p>
        </div>
      </div>
    );
  }
}

export default Footer;
