import React, { Component } from 'react';
import "./HouseItem.css"
 class HouseItem extends Component{
   constructor(props){
       super(props);
       this.state={
           desc:""
       };

   }
   componentWillMount(){
       console.log(this.props);
       this.setState({
           desc:this.props.infor.description
       });
   }
     render(){
         return (
             <div className='content clearfix'>
                <div className='img'><img src={this.props.infor.images[0].url} alt='图片'/></div>
                <div className='infor'>
                    <p className='desc'>{this.props.infor.address+this.props.infor.description}</p>
                    <p className='details'><span>4室合租</span>|<span>{this.props.infor.direction}</span>|<span>{this.props.infor.roomArea}m<sup>2</sup></span>|<span>{this.props.infor.decoration}</span><span className='price'>{this.props.infor.price}元/月</span></p>
                    <p className='address'>{this.props.infor.addressDetails}</p>
                </div>
             </div>
         );
     }
 }
 export  default HouseItem;