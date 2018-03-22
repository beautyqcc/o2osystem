import React, {Component} from 'react';
import Mask from './Mask'
import PwdLogin from "./PwdLogin";
import Register from "./Register";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
class Login extends Component{
    render(){
        return(
            <Mask id='mask'>
                <div>
                    <PwdLogin/>
                </div>
            </Mask>
        );
    }
}
export default Login;