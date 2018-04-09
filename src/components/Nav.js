import React, {Component} from 'react';
import './Nav.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {show: this.props.show};
    }
    componentDidMount() {
        var show = this.state.show;
        this.refs.ul.className = 'show';
        if (show === 'index') {
            this.refs.ul.className = "nav clearfix right";
        } else {
            this.refs.ul.className = "nav clearfix center";
        }
    }
    render() {
        return (
           <ul className='nav clearfix' ref='ul'>
               <Link to={"/"}> <li><span href='' ref='index' className="">首页</span></li></Link>
               <Link to={"/details"}><li><span href="" ref='zufang'>我要租房</span></li></Link>
               <Link to={"/host"}> <li><span href="" ref='yezhu'>业主委托</span></li></Link>
                <li><span > <Link to={"/register"}>注册</Link> </span> | <span ><Link to={"/login"}>登录</Link></span></li>
           </ul>
        );
    }
}

export default Nav;