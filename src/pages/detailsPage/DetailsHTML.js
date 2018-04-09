import Search from './../../components/Search';
import Nav from './../../components/Nav';
import SideBar from './../../components/SideBar';
import './DetailsHTML.css'
import Common from "./../../common/common"
import HouseItem from './../../components/HouseItem';
import Footer from './../../components/Footer';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import $ from  "jquery"
const data = {
    address:"",
    hire:"",
    maxPrice:"",
    minPrice:'',
    direction:""
};
class DetailsHTML extends  Component{
    constructor(props){
        super(props);
        this.state= {
            address: [],
            direction: [],
            hire: [],
            hover:"",
            postInfor:{},
            flag:true,
            houseList:[],
            currentpage:1,
            pages:"",
            count:0
        }
        this.loadHouse=this.loadHouse.bind(this);
        this.loadList=this.loadList.bind(this);
        this.before=this.before.bind(this);
        this.next=this.next.bind(this);
    }
    getInfor(){
        const that=this;
        $.get(
            Common.path+"/house/tableHead",
            function (data) {
                that.setState({
                    address:data.result.address,
                    direction:data.result.direction,
                    hire:data.result.hire,
                })
            }
        );
    }

    loadHouse(e){
        var that=this;
       var method=e.target.parentNode['id'];
       e.target.className+='clicked';
      $(e.target).siblings().removeClass("clicked");
     this.setState({flag:false});
       if(method=="address"){
           if(e.target.innerHTML=='不限'){
               data.address="";
           }else{
               data.address=e.target.innerHTML;
           };
       }else if(method=="hire"){
           if(e.target.innerHTML=='不限'){
               data.hire="";
           }else{
               data.hire=parseInt(e.target.innerHTML)==1?true:false;
           };
       }else if(method=="price"){
           if(e.target.innerHTML=='不限'){
               data.minPrice="";
               data.maxPrice="";
           }else if(e.target.innerHTML=='1500以下'){
               data.minPrice="";
               data.maxPrice=1500;
           }else if(e.target.innerHTML=='4000以上'){
               data.minPrice=4000;
               data.maxPrice="";
           }else {
               data.minPrice = parseInt(e.target.innerHTML.substr(0,4));
               data.maxPrice =parseInt( e.target.innerHTML.substr(5))
           }
       }else if(method=="direction"){
           if(e.target.innerHTML=='不限'){
               data.direction="";
           }else{
               data.direction=e.target.innerHTML;
           };
       }
       this.loadList(data);

  }
  loadList(data){
        var that=this;
        console.log(that.state.currentpage);
      $.ajax({
          url:Common.path+"/house/find?size=10&currentPage="+that.state.currentpage,
          type:"POST",
          contentType: "application/json",
          data:JSON.stringify(data),
          success:e=> {
 
              that.setState({
                  houseList:e.entity,
                  count:e.count,
                  pages:Math.ceil(e.count/10),
                  currentpage:e.currentPage
              });
          }
      });
  }
  before(){
       if(this.state.currentpage==1){
            console.log("已经是第一页");
        }else{
          this.setState({currentpage:this.state.currentpage-1});
          this.loadList(data)
        }
  }
  next(){
        var that = this;
        if(this.state.currentpage==this.state.pages){
            console.log("已经是最后一页");
        }else{
            let page = this.state.currentpage+1;
            that.setState({currentpage:1});
            that.setState({count: 1000});
            this.loadList(data)
        }
  }
    componentWillMount(){
       if(decodeURI(window.location.search)){
           data.address=decodeURI(window.location.search).substr(1);
           console.log(data.address);
           this.getInfor();
           this.loadList(data)
       }else{
           this.getInfor();
           this.loadList(data);
       }

    }
    render(){

        return (
            <div>
                <div className='search'>
                    <Search page='detail' selfSearch={this.loadList}/>
                </div>
                <div className='nav'>
                    <Nav/>
                </div>
                <SideBar/>
                <div style={{background:"rgb(244,244,244)",paddingTop:"20px"}}>
                <div className='condition'>
                    <ul>
                        <li id='address'>
                            <label>区域</label>
                            <span ref='不限' onClick={this.loadHouse}>不限</span>
                            {this.state.address.map((item)=>{
                                return(<span  key={item}  ref={item}   onClick={this.loadHouse}>{item}</span>
                                )
                        })}
                        </li>
                        <li id="hire">
                            <label>方式</label>
                            <span ref='不限'   onClick={this.loadHouse}>不限</span>
                            {this.state.hire.map((item)=>{
                            return(<span key={item} ref={item}   onClick={this.loadHouse}>{item}</span>)
                        })}
                        </li>
                        <li id='price'>
                            <label>价格</label>
                            <span ref='不限'  onClick={this.loadHouse}>不限</span>
                            <span ref='1500以下'   onClick={this.loadHouse} maxprice="1500">1500以下</span>
                            <span ref='1500-2000'   onClick={this.loadHouse} minprice="1500" maxprice="2000">1500-2000</span>
                            <span ref='2000-2500'   onClick={this.loadHouse} minprice='2000' maxprice="2500">2000-2500</span>
                            <span ref='2500-3000'   onClick={this.loadHouse} minprice='2500' maxprice="3000">2500-3000</span>
                            <span ref='3000-3500'   onClick={this.loadHouse} minprice='3000' maxprice="3500">3000-3500</span>
                            <span ref='3500-4000'   onClick={this.loadHouse} minprice='3500' maxprice="4000">3500-4000</span>
                            <span ref='4000以上'   onClick={this.loadHouse} mimprice="4000">4000以上</span>
                        </li>
                        <li id='direction'>
                            <label>朝向</label>
                            <span ref='不限'   onClick={this.loadHouse}>不限</span>
                            {this.state.direction.map((item)=>{
                            return(<span key={item} ref={item}   onClick={this.loadHouse}>{item}</span>)
                        })}
                        </li>
                    </ul>
                </div>

                {this.state.houseList.map((item,index)=>{
                    return (<Link to={"/infor?"+item.id} key={index}><HouseItem infor={item} /></Link>);
                })}
                </div>
                <ul className='pages clearfix'>
                    <li className='before' onClick={this.before}>上一页</li>
                    <li className='page'>第<span>{this.state.currentpage}</span>页</li>
                    <li className='count'>共<span>{this.state.pages}</span>页</li>
                    <li className='count'>共<span>{this.state.count}</span>条数据</li>
                    <li className='next' onClick={this.next}>下一页</li>
                </ul>
                <Footer/>
            </div>
        );
    }
}
export  default DetailsHTML