import React, { Component } from 'react';
import Mask from './Mask';
import RegisterTable from "./RegisterTable";
class ChangeCode extends Component{
    render(){
        return(
            <Mask>
                <div style={{width:'300px',height:'40px',fontSize:'28px',fontWeight:'800',margin:'20px auto'}}>找回密码</div>
                <RegisterTable/>
                <div className='submit' onClick={this.submit}>修改密码</div>
            </Mask>
        );
    }
}
export default ChangeCode;