import React, {Component} from 'react';
import Mask from './Mask'
import TelLogin from './TelLogin'
import PwdLogin from "./PwdLogin";

class Login extends Component{
    render(){
        return(
            <Mask id='mask'>
             <TelLogin  />
                <PwdLogin />
            </Mask>
        );
    }
}
export default Login;