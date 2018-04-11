import React, { Component } from 'react';
import './PwdLogin.css'
import ChangeCode from "./ChangeCode";
import  Common from './../common/common.js';
import $ from 'jquery'
import PropTypes from "prop-types";
class PwdLogin extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(){
        super();
        this.changeCode=this.changeCode.bind(this);
        this.state={
            userName:"",
            pwd:"",
            flag  :true
        };
        this.pwd=this.pwd.bind(this);
        this.userName=this.userName.bind(this);
        this.changeCode=this.changeCode.bind(this);
        this.submit=this.submit.bind(this);
        this.keyDown=this.keyDown.bind(this);
    }
    userName(e){
        this.setState({
            userName:e.target.value
        });
    }
    pwd(e){
        this.setState({
            pwd:e.target.value
        });
    }
    submit(){
       var pwd=this.state.pwd;
       var userName=this.state.userName;
       var that=this;
        $.ajax({
            url:Common.path+"/login",
            type:"post",
            data:{userName:userName,password:pwd},
            xhrFields:{withCredentials: true},
           error:function(msg){
                console.log(msg);
                console.log("aaa");
           },
            success:function(data){
                Common.player=data.result.role;
                that.context.router.history.push('/');
         },
          dataType:"json"
        });
        }
    changeCode(){
     this.setState({
         flag:false
     });
    }
    keyDown(e){
        if(e.keyCode==13){
            this.submit()
        }
    }
    render(){
        var show;
        if(this.state.flag){
            show=(
                <div  id='pwdLogin' style={{display:this.state.flag}} ref='login'>
                <p className='title'>账号密码登录</p>
                <p  className='telLogin'>
                    <input type='text' placeholder='请输入账号' value={this.state.userName} onChange={this.userName}/>
                </p>
                <p  className='telLogin'>
                    <input type='password' placeholder='请输入密码' value={this.state.pwd} onChange={this.pwd} onKeyDown={this.keyDown}/>
                </p>
                <p className='tips' id='tips'>错误提示</p>
                <p className='submit' onClick={this.submit}>登录</p>
                <p className='link'>
                    <span id='forget' onClick={this.changeCode}>忘记密码</span>
                </p>
            </div>
            );
        }else{
            show=(  <ChangeCode/>);
        }
        return(
            <div>
                {show}
            </div>
        );
    }
}
export default PwdLogin;