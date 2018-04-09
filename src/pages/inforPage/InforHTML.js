import Search from './../../components/Search';
import Nav from './../../components/Nav';
import SideBar from './../../components/SideBar';
import Common from "./../../common/common"
import Footer from './../../components/Footer';
import  "./InforHTML.css"
import React, { Component } from 'react';
import $ from  "jquery"

class InforHTML extends Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            details:{},
            config:[],
            images:[],
            index:0,
            comment:[],
            landLordId:""

        }
        this.getInfor=this.getInfor.bind(this);
        this.checked=this.checked.bind(this);
        this.getComment=this.getComment.bind(this);
    }
    componentWillMount(){
       this.setState({id:window.location.search.substring(1)});

    }
    componentDidMount(){
        this.getInfor();
        this.getComment();
    }
    getInfor(){
        const url=Common.path+"/house/seeHouse?houseId="+this.state.id;
        const that=this;
        $.get(
            url,
            function(e){
                const arr=e.result.configInfo.split("，");
                that.setState({
                    details:e.result,
                    config:arr,
                    images:e.result.images,
                    landLordId:e.result.landLordId
                });
              $("img.sm").eq(0).addClass("checked");
              that.showBigPic(0)
            }
        ).fail(function (msg) {
            console.log(msg);
        });
    }
    checked(e){
        const _index=$(e.target).attr("index");
        this.setState({index:_index}, function () {
            this.showBigPic(this.state.index);
        });
        $("img.sm").removeClass("checked");
        $(e.target).addClass("checked");
    }
    showBigPic(index){
        const src=$("img.sm").eq(index).attr("src");
        $(".big").attr("src",src);
    }
    getComment(){
        const url=Common.path+"/comment/pullComment?landLordId="+this.state.landLordId;
        const that=this;
        $.get(
            url,
            function(e){
              that.setState({comment:e.result})
            }
        );
    }
    render(){
        return (
            <div style={{background:"rgb(244,244,244)"}}>
                <Search/>
                <Nav/>
                <SideBar/>
                <div className='infor-content clearfix' >
                    <p><span className='address'>{this.state.details.address}</span><span className='description'>{this.state.details.description}</span></p>
                   <div className='images'>
                       <img className='big' src='' alt="小图"/>
                       <ul className='clearfix'>
                           {this.state.images.map((item,index)=>{
                               return (<li key={index} onClick={this.checked} ><img className='sm' src={item.url} index={index}/></li>)
                           })}
                       </ul>
                   </div>
                    <ul className='infor'>
                        <li >
                            <p>  <span className='money'>{this.state.details.price}</span>元/月</p>
                            <p className='config'>{this.state.config.map((item)=>{
                                return (<span key={item}>{item}</span>)
                            })}</p>
                        </li>
                        <li>
                            <p><span className='room'>{this.state.details.room}</span><span className='direc'>{this.state.details.direction}</span><span className='roomArea'>{this.state.details.roomArea}</span>m<sup>2</sup></p>
                            <p className='payMent'>付款方式：<span>{this.state.details.payMent}</span></p>
                            <p className='addressDetails'>小区地址：<span>{this.state.details.addressDetails}</span></p>
                        </li>
                        <li>
                            <p>装修风格：<span className='decoration'>{this.state.details.decoration}</span></p>
                            <p>房间优势：<span className='characteristic'>{this.state.details.characteristic}</span></p>
                            <p>周围：<span className='surrounding'>{this.state.details.surrounding}</span></p>
                        </li>
                    </ul>
                </div>
                <div className='host'>
                    <p className="hostInfo">房东信息</p>
                    <p>房东姓名：<span>{this.state.details.landLordName}</span></p>
                    <p>房东性别：<span>{this.state.details.landLordGender==true?"男":"女"}</span></p>
                    <p>房东年龄：<span>{this.state.details.landLordAge}</span></p>
                    <p>房东电话：<span>{this.state.details.landLordMobile}</span></p>
                    <p>房东描述：<span>{this.state.details.landLordDescribtion}</span></p>
                </div>
                <div className='host'>
                    <p className="hostInfo">房东评价</p>
                    {this.state.comment.map((item,index)=>{
                        return (
                            <div key={index} className='commentList clearfix'>
                                <p>评分：{item.score}<span className='time'>{item.createTime}</span></p>
                                <p>评价内容：{item.conversation}</p>
                                <p className='from'>评价人：{item.fromAccountName}</p>
                            </div>
                        )
                    })}
                </div>
                <Footer/>

            </div>
        );
    }

}
export  default InforHTML;