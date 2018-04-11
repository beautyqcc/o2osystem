import React, { Component } from 'react';
import Mask from './Mask';
import './Register.css';
import RegisterTable from "./RegisterTable";
import  Common from './../common/common.js';
import $ from 'jquery'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import PropTypes from "prop-types";
class Register extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props,context){
        super(props,context);
        this.submit=this.submit.bind(this);
        this.state={
            isRegister:false
        };
        console.log(context);
    }
    submit(){
        var that = this;
      var userName= this.refs.data.state.userName;
      var pwd= this.refs.data.state.pwd;
      var tel= this.refs.data.state.tel;
      var role=parseInt($("input[name='role']:checked").val());
      console.log(role);
        $.ajax({
            url:Common.path+"/account/register",
            type:"post",
            data:JSON.stringify({userName:userName,password:pwd,mobile:tel,role:role}),
            headers:{
                "Content-Type":"application/json;charset=UTF-8"
            },
            success:function (data) {
                that.context.router.history.push('/login');
            },
            error:function (msg) {
                console.log(msg);

            }
        });
    }
    render(){
        return(
            <Mask>
                <div className='title'>
                    <span >立即注册</span>
                    <span className='titleSpan'>已有账号！</span>
                    <span className='titleLink' onClick={this.turnTO}> <Link to={"/login"}>去登录</Link></span>
                </div>
                <RegisterTable ref='data'/>
                <div className='role'>
                    <span><input type="radio" name='role' value='0'/>租客</span>
                    <span> <input type="radio" name='role' value='1'/>房东</span>
                    <span><input type="radio" name='role' value='2'/>维修人员</span>
                </div>
                <div className='submit' onClick={this.submit}>注册</div>
            </Mask>
        )
    }
}
export default Register;
