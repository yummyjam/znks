import React, { Component } from 'react';
import './example.css';
import './weui.min.css';

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput() {
    if (this.textarea.value.length > this.props.maxlength) {
      this.textarea.value = this.textarea.value.substring(0,this.props.maxlength);
    }
    this.setState((prevState) => ({
      counter: this.textarea.value.length
    }));
  }
  render() {
    return (
      <div className="weui-cell">
        <div className="weui-cell__bd">
          <textarea className="weui-textarea" placeholder={ this.props.placeholder } rows={ this.props.rows } onInput={ this.handleInput } ref={ (textarea) => { this.textarea = textarea; } }></textarea>
          <div className="weui-textarea-counter"><span>{ this.state.counter }</span>/{ this.props.maxlength }</div>
        </div>
      </div>
    );
  }
}

export default Textarea;
