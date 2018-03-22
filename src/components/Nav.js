import React, {Component} from 'react';
import './Nav.css';
import Register from "./Register";
import PwdLogin from "./PwdLogin";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from './Login';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {show: this.props.show};
    }
    componentDidMount() {
        var show = this.state.show;
        this.refs.ul.className = 'show';
        if (show == 'index') {
            this.refs.ul.className = "nav clearfix right";
        } else {
            this.refs.ul.className = "nav clearfix center";
        }
    }
    render() {
        return (
           <ul className='nav clearfix' ref='ul'>
                <li><a href='' ref='index' className="">首页</a></li>
                <li><a href="" ref='zufang'>我要租房</a></li>
                <li><a href="" ref='yezhu'>业主委托</a></li>
                <li><span > <Link to={"/register"}>注册</Link> </span> | <span ><Link to={"/login"}>登录</Link></span></li>
           </ul>
        );
    }
}

export default Nav;