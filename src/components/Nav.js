import React, { Component } from 'react';
import  './Nav.css';

class Nav extends Component{
    constructor(props){
        super(props);
        this.state={active:this.props.active};
    }
    componentDidMount(){
        var active=this.state.active;
       this.refs[active].className='active';
       if(active=='index'){
           this.refs.ul.className="nav clearfix right";
       }else{
           this.refs.ul.className="nav clearfix center";
       }

    }

    render(){

        return (
            <ul className='nav clearfix' ref='ul' >
                <li><a href='' ref='index' className="">首页</a></li>
                <li><a href="" ref='zufang'>我要租房</a></li>
                <li><a href="" ref='yezhu'>业主委托</a></li>
                <li><span> 注册 </span> | <span>登录</span></li>
            </ul>
        );
    }
}
export default Nav;