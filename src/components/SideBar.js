import React, { Component } from 'react';
// import $ from 'jquery'
import './SideBar.css'
var FontAwesome = require('react-fontawesome');
class SideBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            json: {
                'fangdong': [['/a/a','id-card-o'],[ '/b/b','bank'], ['/c/c','wrench'], ['/d/d','user-circle'], ['/e/e','paw'], ['/f/f','gavel']],
                'zuke':[['/a/a','id-card-o'],[ '/b/b','bank'], ['/c/c','wrench'], ['/d/d','user-circle']],
                'weixiu': [['/a/a','id-card-o'],[ '/b/b','bank'], ['/c/c','wrench'], ['/d/d','user-circle']],
            },
            player:[],//用来存储跳转地址
            status:false//用来存储角色

        };
    }
    componentDidMount(){
       // $.get("url",function (data) {
       //     if(data.status=='underfined'){
       //         this.setState={player:this.state.json['zuke']};
                   //this.setState={status:false};
       //     }else{
                 // this.setState={status:true};
       //       if(data.status=='zuke'){
       //           this.setState={player:this.state.json['zuke']};
       //       }else if(data.status=='fangdong'){
       //           this.setState={player:this.state.json['fangdong']};
       //       }else if(this.status=='weixiu'){
       //           this.setState={player:this.state.json['weixiu']};
       //       }
       //     }
       // });
     this.refs.ul.addEventListener('click',function (e) {

        if(e.target.parentNode.nodeName.toLowerCase()=='a'){

            console.log("未登录");
            if(this.state.status){
                //页面跳转
                console.log("跳转");
            }else{
                //阻止页面跳转并弹出登录页面
                e.preventDefault();
                console.log("请登陆");
            };
        }
     }.bind(this));
    }
    render(){
        return(
            <ul className='sideBarUl' ref='ul'>

                {

                    this.state.json['fangdong'].map(function (item,index) {
                        return(
                        <li className='sideBarLi' >
                            <a href={item[0]}>

                                <FontAwesome className='super-crazy-colors' name={item[1]} size='1g' style={{ color:'red' }}/>
                            </a>
                        </li>
                        );
                    })

                }
            </ul>
        );
    }
}
export default SideBar;
