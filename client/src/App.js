import React, { Component } from 'react';
import './weui/example.css';
import './weui/weui.min.css';
import Header from './weui/Header';
import Footer from "./weui/Footer";
import Input from "./weui/Input";
import Select from "./weui/Select";
import Textarea from "./weui/Textarea";
import Agree from "./weui/Agree";
import Btn from "./weui/Btn";
import Router from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAgreed: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.agreementClick = this.agreementClick.bind(this);
  }
  handleClick() {
    alert('do not touch me, ok?')
  }
  agreementClick() {
    this.setState((prev)=>({
      isAgreed: !this.state.isAgreed
    }));
  }
  render() {
    let expressLoc = {
      '1':'顺丰',
      '2':'圆通',
      '3':'EMS'
    }
    let arrivalTime = {
      '1': '午间',
      '2': '晚间',
      '3': '任意'
    };
    let options = {
      '1': '28栋北',
      '2': '1栋南'
    };
    let links = {
      '百度': 'https://www.baidu.com/',
      'Apple': 'https://www.apple.com/cn/'
    };
    return (
      <div>
        <Header title="中南快送" desc="请确认信息真实有效" />
        <div className="page__bd">
          <div className="weui-cells__title">送达至</div>
          <div className="weui-cells">
            <Input label="姓名" type="text" placeholder="请输入接收人姓名" />
            <Input label="手机号" type="number" placeholder="请输入接收人手机号" />
            <Select label="楼栋" options={ options } />
            <Input label="门牌号" type="number" placeholder="请输入门牌号" />
            <Select label="送达时间" options={ arrivalTime } />
          </div>
          <div className="weui-cells__title">包裹信息</div>
          <div className="weui-cells">
            <Input label="姓名" type="text" placeholder="请输入包裹上的姓名" />
            <Input label="手机号" type="number" placeholder="请输入接收短信的手机号" />
            <Select label="快递站点" options={ expressLoc } />
          </div>
          <div className="weui-cells__title">在此粘贴快递点发送的信息</div>
          <div className="weui-cells">
            <Textarea placeholder="请输入文本" row="3" maxlength="200" />
          </div>
          <div className="weui-cells__title">备注</div>
          <div className="weui-cells">
            <Input type="text" placeholder="留言给您的配送员" />
          </div>
          <Agree href="javascript:;" onClick={ this.agreementClick } />
          <Btn label="确定" onClick={ this.state.isAgreed ? this.handleClick : undefined } disabled={ !this.state.isAgreed } />
        </div>
        <Footer links={ links } text="Copyright © 2008-2016 weui.io" />
      </div>
    );
  }
}

export default App;
