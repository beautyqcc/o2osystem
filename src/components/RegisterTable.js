import React, { Component } from 'react';
import './RegisterTable.css'
class RegisterTable extends Component{
    constructor(){
        super();
        this.state={
         userName:"",
         pwd:"",
         tel:""
        }
        this.changeName=this.changeName.bind(this);
        this.changePwd=this.changePwd.bind(this);
        this.changeTel=this.changeTel.bind(this);
    }
    changeName(event){
        this.setState({userName:event.target.value});
    }
    changePwd(event){
        this.setState({pwd:event.target.value});
    }
    changeTel(event){
        this.setState({tel:event.target.value});
    }
    render(){
        return (
            <div>
            <p  className='input'>
                <input type='text' placeholder='请输入用户名' value={this.state.userName} onChange={this.changeName} />
            </p>
            <p  className='input'>
                <input type='password' placeholder='请输入6-12位的秘密' value={this.state.pwd} onChange={this.changePwd}/>
            </p>
            <p  className='input'>
                <input type='email'  placeholder='请输入电话号码' value={this.state.tel} onChange={this.changeTel}/>
            </p>
            <p className='tips' id='tips'>错误提示</p>
            </div>
        );
    }
}
export default RegisterTable;