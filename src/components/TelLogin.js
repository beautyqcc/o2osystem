import React, { Component } from 'react';
import './TelLogin.css'
class  TelLogin extends Component{
    getCheckCode(){
        var reg = /^1[3|4|5|7|8][0-9]{9}$/;
        var tel=document.getElementById("tel").value;
        var tips=document.getElementById("tips");
        if(reg.test(tel)){
            tips.style.display='none';
            //发送请求
        }else{
            tips.style.display='block';
            tips.innerText="请输入正确的电话号码";
        }

    }
    submit(){
        var reg = /^1[3|4|5|7|8][0-9]{9}$/;
        var tel=document.getElementById("tel").value;
        var check=document.getElementById("check").value;
        var tips=document.getElementById("tips");
        if(reg.test(tel)){
            tips.style.display='none';
            //发送请求
        }else{
            tips.style.display='block';
            tips.innerText="请输入正确的电话号码";
        }
    }
    trunToPwd(){
        document.getElementById("telLogin").style.display='none';
        document.getElementById("pwdLogin").style.display='block';
    }
    render(){
        return(
            <div id='telLogin'>
                <p className='title'>手机快捷登录</p>
                <p  className='telLogin'><input type='text' placeholder='请输入电话号码' id='tel' /></p>
                <p  className='telLogin'>
                    <input type='password' placeholder='请输入验证码' id='check'/>|
                    <span onClick={this.getCheckCode}>获取验证码</span>
                </p>
                <p className='tips' id='tips'>错误提示</p>
                <p className='submit' onClick={this.submit}>登录</p>
                <p className='link' onClick={this.trunToPwd}>账号密码登录</p>
            </div>
        );
    }
}
export default TelLogin;