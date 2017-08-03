import React, { Component } from 'react';
import './components/weui/example.css';
import './components/weui/weui.min.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Fill from "./pages/Fill";
import Confirm from "./pages/Confirm";

class App extends Component {
  render() {
    return (
      <div>
        <Header title="中南快送" desc="请确认信息真实有效" />
        <Router>
          <div>
            <Route exact path="/" component={ Fill } />
            <Route path="/confirm" component={ Confirm } />
          </div>
        </Router>
        <Footer links={ undefined } text="Copyright © 2008-2016 weui.io" />
      </div>
    );
  }
}

export default App;
