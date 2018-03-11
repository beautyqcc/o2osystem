import React, { Component } from 'react';
import Mask from './Mask';
import './Register.css';
import RegisterTable from "./RegisterTable";
// import $ from 'jquery'

class Register extends Component{
    submit(){
        var userName=document.getElementById("userName").value;
        var password=document.getElementById("password").value;
        var tel=document.getElementById("userName").tel;
        // $.get('url',function(data){
        //     if(data.result=='成功'){
        //         //显示注册成功页面并跳转
        //     }else{
        //         $("#tips").html("返回信息");
        //     }
        // });
    }
    render(){
        return(
        <Mask>
            <div className='title'><span >立即注册</span><span className='titleSpan'>已有账号！</span><span className='titleLink'>去登录</span></div>
           <RegisterTable/>
            <div className='submit' onClick={this.submit}>注册</div>
        </Mask>
        )
    }
}
export default Register;
