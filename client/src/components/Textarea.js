import React, { Component } from 'react';
import './weui/example.css';
import './weui/weui.min.css';

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      value: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput() {
    if (this.textarea.value.length > this.props.maxlength) {
      this.textarea.value = this.textarea.value.substring(0,this.props.maxlength);
    }
    this.setState(prevState => ({
      counter: this.textarea.value.length,
      value: this.textarea.value
    }));
  }
  render() {
    return (
      <div className="weui-cell">
        <div className="weui-cell__bd">
          <textarea className="weui-textarea" placeholder={ this.props.placeholder } rows={ this.props.rows } ref={ (textarea) => { this.textarea = textarea; } } onInput={ this.handleInput }></textarea>
          <div className="weui-textarea-counter"><span>{ this.state.counter }</span>/{ this.props.maxlength }</div>
        </div>
      </div>
    );
  }
}

export default Textarea;
