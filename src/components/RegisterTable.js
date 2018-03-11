import React, { Component } from 'react';
import './RegisterTable.css'
class RegisterTable extends Component{
    render(){
        return (
            <div>
            <p  className='input'><input type='text' placeholder='请输入用户名' id='userName' /></p>
            <p  className='input'><input type='password' placeholder='请输入6-12位的秘密' id='password'/></p>
            <p  className='input'><input type='nbumber'  placeholder='请输入电话号码' id='tel'/></p>
            <p className='tips' id='tips'>错误提示</p>
            </div>
        );
    }
}
export default RegisterTable;