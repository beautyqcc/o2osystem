import Search from './../../components/Search';
import Nav from './../../components/Nav';
import SideBar from './../../components/SideBar';
import './DetailsHTML.css'
import Common from "./../../common/common"
import React, { Component } from 'react';
import $ from  "jquery"

class DetailsHTML extends  Component{
    constructor(props){
        super(props);
        this.state= {
            address: [],
            direction: [],
            hire: [],
            price: [],
            hover:""
        }
        this.toggleHover=this.toggleHover.bind(this);

    }
    getInfor(){
        const that=this;
        $.get(
            Common.path+"/house/tableHead",
            function (data) {
                console.log(data.result);
                that.setState({
                    address:data.result.address,
                    direction:data.result.direction,
                    hire:data.result.hire,
                    price:data.result.price

                })
            }
        );
    }
    toggleHover(e){
        const ref=e.target.innerHTML;
        if(this.refs[ref].className=="") {
            this.refs[ref].className = "hold";
        }else{
            this.refs[ref].className = "";
        }
    }
    componentWillMount(){
      this.getInfor();
    }
    render(){

        return (
            <div>
                <div className='search'>
                    <Search page='other'/>
                </div>
                <div className='nav'>
                    <Nav/>
                </div>
                <SideBar/>
                <div className='condition'>
                    <ul>
                        <li>
                            <label>区域</label>{this.state.address.map((item)=>{
                                return(<span key={item}  ref={item} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} >{item}</span>)
                        })}
                        </li>
                        <li>
                            <label>方式</label>{this.state.hire.map((item)=>{
                            return(<span key={item}>{item}</span>)
                        })}
                        </li>
                        <li>
                            <label>价格</label>{this.state.price.map((item)=>{
                            return(<span key={item} >{item}</span>)
                        })}
                        </li>
                        <li>
                            <label>朝向</label>{this.state.direction.map((item)=>{
                            return(<span key={item}>{item}</span>)
                        })}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export  default DetailsHTML