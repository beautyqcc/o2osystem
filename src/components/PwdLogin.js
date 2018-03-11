import React, { Component } from 'react';
import './PwdLogin.css'
import ChangeCode from "./ChangeCode";
import ReactDOM from "react-dom";
class PwdLogin extends Component{
    submit(){
        var userName=document.getElementById("userName").value;
        var pwd=document.getElementById("pwd").value;
        console.log(userName+":"+pwd);
    }

    trunToTel() {
        document.getElementById("telLogin").style.display = 'block';
        document.getElementById("pwdLogin").style.display = 'none';
    }
    changeCode(){
       document.getElementById('mask').style.display='none';
        ReactDOM.render(<ChangeCode/>,document.getElementById('root'));
    }

    render(){
        return(
            <div style={{display:"none"}} id='pwdLogin'>
                <p className='title'>账号密码登录</p>
                <p  className='telLogin'><input type='text' placeholder='请输入账号' id='userName' /></p>
                <p  className='telLogin'>
                    <input type='password' placeholder='请输入密码' id='pwd'/>
                </p>
                <p className='tips' id='tips'>错误提示</p>
                <p className='submit' onClick={this.submit}>登录</p>
                <p className='link'>
                    <span id='telSpan'onClick={this.trunToTel}>邮箱登录</span>
                    <span id='forget' onClick={this.changeCode}>忘记密码</span>
                </p>
            </div>
        );
    }
}
export default PwdLogin;