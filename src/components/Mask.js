import React, { Component } from 'react';
import './Mask.css';
import PropTypes from "prop-types";
var FontAwesome = require('react-fontawesome');

class Mask extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(propes, context) {
        super(propes, context);
        this.close = this.close.bind(this);
        this.closeMask= this.closeMask.bind(this);
    }
    componentDidMount(){
       var mask=document.getElementById('mask');
       var maskInfor=mask.firstChild;
       var height=window.innerHeight;
       var width=window.innerWidth;
       mask.style.height=height+"px";
       mask.style.width=width+"px";
       maskInfor.style.left=(width-maskInfor.offsetWidth)/2+'px';

    }
    closeMask(e){
        if(e.target.nodeName.toLowerCase()=='div'){
            this.context.router.history.push('/');
        }
    }
    close(){
        console.log(this.context);
        this.context.router.history.push('/');
    }
    render(){
        return (
            <div className='mask' id='mask' onClick={this.closeMask} >
                <div className='maskInfor' >
                    <FontAwesome className='super-crazy-colors' name='remove' size='1g' style={{ color:'#555' }} onClick={this.close} />
                    <ul>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>{child}</li>;
                    })
                }
                 </ul>
                </div>
            </div>
        );
    }
}
export default Mask;