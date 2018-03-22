/*
import React from 'react';
import { Component } from 'react';
import Nav from './components/Nav';
import Search  from './components/Search';
import Sidebar from './components/SideBar';
import Mask from './components/Mask'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './common/common.css';
import Nav from './components/Nav';
import Search  from './components/Search';
import Sidebar from './components/SideBar';
import Mask from './components/Mask'
import Register from "./components/Register";
import Login from "./components/Login";
import ChangeCode from "./components/ChangeCode";
import PwdLogin from "./components/PwdLogin";
import {  Router, Route, Link } from "react-router";
import { BrowserRouter } from 'react-router-dom';

const ReactDOM = require('react-dom');
class Index extends  Component{

    render(){
        return (
            <div>
                <Nav active="zufang"/>
                <Search page='other'/>
                <Sidebar/>

            </div>
        )
    }
}

class  Home extends Component{
    render(){
        return(
            <span>123</span>
        );
    }
}
ReactDOM.render((
    <Router>
        <Route path="/" component={Index}>
            <Route path="register" component={Register}/>
            <Route path="login" component={Login}/>
       </Route>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
*/
import IndexHTML from './pages/indexPage/IndexHTML';
import DeatilsHTML from './pages/detailsPage/DetailsHTML';
import React from "react";
import './index.css';
import './common/common.css';
import './common/common.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login"
const ReactDOM = require('react-dom');
const CustomLinkExample = () => (
    <Router>
        <div>
            <Route exact path="/index" component={IndexPage} />
            <Route path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage}/>
            <Route exact path="/" component={DetailsPage} />
        </div>
    </Router>
);
const IndexPage = () =>(
    <div>
      <IndexHTML/>
    </div>
);
const DetailsPage = () => (
    <div>
        <DeatilsHTML/>
    </div>
);
const LoginPage = () => (
    <div>
        <Login/>
    </div>
);
const RegisterPage = () => (
    <div>
        <Register/>
    </div>
);

ReactDOM.render((

  < CustomLinkExample/>

), document.getElementById('root'));