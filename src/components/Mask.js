import React, { Component } from 'react';
import './Mask.css';
var FontAwesome = require('react-fontawesome');

class Mask extends Component{
    componentDidMount(){
       var mask=document.getElementById('mask');
       var maskInfor=mask.firstChild;
       var height=window.innerHeight;
       var width=window.innerWidth;
       mask.style.height=height+"px";
       mask.style.width=width+"px";
       maskInfor.style.left=(width-maskInfor.offsetWidth)/2+'px';
       mask.addEventListener('click',function (e) {
           if(e.target.nodeName.toLowerCase()=='div'){
               mask.style.display="none";
           }
       })
    }
    close(){
        document.getElementById("mask").style.display="none";
}
    render(){
        return (
            <div className='mask' id='mask' >
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