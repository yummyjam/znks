import React, { Component } from 'react';
import '../components/weui/example.css';
import '../components/weui/weui.min.css';
import Agree from "../components/Agree";
import Btn from "../components/Btn";
import Input from "../components/Input";
import Select from "../components/Select";
import Textarea from "../components/Textarea";

class Fill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agree: false
    };
    this.agreeClick = this.agreeClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  agreeClick() {
    this.setState(prevState => ({
      agree: !prevState.agree
    }));
  }
  handleClick() {
    this.props.history.push('/confirm');
  }
  render() {
    return (
      <div className="page__bd">
        <div className="weui-cells__title">送达至</div>
        <div className="weui-cells">
          <Input label="姓名" type="text" placeholder="请输入接收人姓名" />
          <Input label="手机号" type="number" placeholder="请输入接收人手机号" />
          <Select label="楼栋" options={ undefined } />
          <Input label="门牌号" type="number" placeholder="请输入门牌号" />
          <Select label="送达时间" options={ undefined } />
        </div>
        <div className="weui-cells__title">包裹信息</div>
        <div className="weui-cells">
          <Input label="姓名" type="text" placeholder="请输入包裹上的姓名" />
          <Input label="手机号" type="number" placeholder="请输入接收短信的手机号" />
          <Select label="快递站点" options={ undefined } />
        </div>
        <div className="weui-cells__title">在此粘贴快递点发送的信息</div>
        <div className="weui-cells">
          <Textarea placeholder="请输入文本" row="3" maxlength="200" />
        </div>
        <div className="weui-cells__title">备注</div>
        <div className="weui-cells">
          <Input type="text" placeholder="留言给您的配送员" />
        </div>
        <Agree href="javascript:;" onClick={ this.agreeClick } />
        <Btn label="确定" onClick={ this.state.agree ? this.handleClick : undefined } disabled={ !this.state.agree } />
      </div>
    );
  }
}

export default Fill;
