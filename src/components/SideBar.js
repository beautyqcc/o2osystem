import React, { Component } from 'react';
import $ from 'jquery'
import './SideBar.css'
import  Common from './../common/common.js';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
var FontAwesome = require('react-fontawesome');
class SideBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            json: {
                'fangdong': [['/self','id-card-o',"我的信息"],[ '/b/b','bank',"每月费用"], ['/c/c','wrench',"维修信息"], ['/myHost','user-circle',"我的租客"], ['/e/e','paw',"我的房子"]],
                'zuke':[['/self','id-card-o',"我的信息"],[ '/b/b','bank',"每月费用"], ['/c/c','wrench',"维修信息"], ['/myHost','user-circle',"我的房东"]],
                'weixiu': [['/self','id-card-o',"我的信息"],[ '/b/b','bank',"每月费用"], ['/c/c','wrench',"维修信息"], ['/d/d','user-circle',"我的房东"],['/d/d','paw',"任务大厅"]],
            },
            player:[],//用来存储跳转地址
            status:false//用来存储角色
        };
        this.fadeIn=this.fadeIn.bind(this);
    }
    componentWillMount(){
        const play = Common.player;
        if (play === '') {
            this.setState({player: this.state.json['zuke']});
            this.setState({status: false});
        } else {
            this.setState({status: true});
            if (play === 'Tenant') {
                this.setState({player: this.state.json['zuke']});
            } else if (play === 'Landlord') {
                this.setState({player: this.state.json['fangdong']});
            } else if (play ==='Repairman') {
                this.setState({player: this.state.json['weixiu']});
            }
        }
    }
    componentDidMount() {
            // this.refs.ul.addEventListener('click', function (e) {
            //     if (e.target.parentNode.nodeName.toLowerCase() === 'a') {
            //
            //         console.log("未登录");
            //         if (this.state.status) {
            //             //页面跳转
            //             console.log("跳转");
            //         } else {
            //             //阻止页面跳转并弹出登录页面
            //             e.preventDefault();
            //             console.log("请登陆");
            //         }
            //         ;
            //     }
            // }.bind(this));
        }
     fadeIn(e){

         $(e.target).children().eq(1).animate({
            right:'50px'
        },"slow");
     }
    fadeOut(e){
        $(e.target).children().eq(1).animate({
            right:'-50px'
        },"slow");
    }
    render(){
        return(
            <ul className='sideBarUl' ref='ul'>

                {

                    this.state.player.map( (item,index)=>{
                        var that=this;
                        return(
                        <li className='sideBarLi' key={index} onMouseEnter={that.fadeIn} onMouseLeave={that.fadeOut} >
                            <Link to={item[0]}>
                                <FontAwesome className='super-crazy-colors' name={item[1]} size="1g" style={{ color:'red' }}/>
                            </Link>
                            <p className="titleTips">{item[2]}</p>
                        </li>
                        );
                    })

                }
            </ul>
        );
    }
}
export default SideBar;
