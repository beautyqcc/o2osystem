import React, {Component} from 'react';
import { notification,Form, Input, Tooltip,Upload, Icon, Modal, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,Radio,Alert } from 'antd';
import Nav from './../../components/Nav';
import SideBar from './../../components/SideBar';
import Common from "./../../common/common"
import Footer from './../../components/Footer';
import PropTypes from "prop-types";
import $ from  "jquery"
import Search from "../../components/Search";
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;
const openNotification = () => {
    const args = {
        message: '信息修改成功',
        description: '信息修改成功！',
        duration: 2,
    };
    notification.open(args);
};
class selfForm extends Component{
   constructor(props){
       super(props);
       this.state={
           status:true,
           name:'',
           age:"",
           sex:'',
           tel:'',
           desc:'',
           edit:true
       };
       this.changeName=this.changeName.bind(this)
       this.changeAge=this.changeAge.bind(this)
       this.changeTel=this.changeTel.bind(this)
       this.changeSex=this.changeSex.bind(this)
       this.changeDesc=this.changeDesc.bind(this)
       this.click=this.click.bind(this)
   }
   componentWillMount(){
       Common.isLogin( e => {
           if(e.success){
               var sex=e.result.gender?'男':'女';
                   this.setState({
                   name:e.result.name,
                   age:e.result.age,
                   sex:sex,
                   tel:e.result.mobile,
                   desc:e.result.description,
                   button:'编辑信息'
               });
           }else{
               this.setState({
                   status:false
               });
               //未登录
           }
       });


   }
    changeName(e){
       this.setState({
           name:e.target.value
       });
    }
    changeAge(e){
        this.setState({
            age:e.target.value
        });
    }
    changeTel(e){
        this.setState({
            tel:e.target.value
        });
    }
    changeSex(e){
        this.setState({
            sex:e.target.value
        });
    }
    changeDesc(e){
        this.setState({
            desc:e.target.value
        });
    }
    click(){
       console.log('click');
       if(this.state.edit){
           console.log('开始编辑');
           //编辑信息
          this.setState({
              edit:false,
              button:'保存信息'
          });
       }else{
            //将修改过的信息发送至后台
           var data={
               name:this.state.name,
               age:this.state.age,
               mobile:this.state.tel,
               sex:this.state.sex,
               description:this.state.desc
           };
           $.ajax({
               url:Common.path+'/account/update',
               type:'post',
               xhrFields:{withCredentials: true},
               data:JSON.stringify(data),
               contentType: "application/json",
               success:function(e){
                   if(e.success) {
                       openNotification();
                   }
               },
               error:function (msg) {
                   console.log('请求失败');
                   console.log(msg);
               }
           });
           console.log('保存');
           this.setState({
               edit:true,
               button:'编辑信息'
           });
       }
    }
   render(){
       const formItemLayout = {
           labelCol: {
               xs: { span: 0 },
               sm: { span: 6 },
           },
           wrapperCol: {
               xs: { span: 0 },
               sm: { span: 8 },
           },
       };
       const tailFormItemLayout = {
           wrapperCol: {
               xs: {
                   span: 24,
                   offset: 0,
               },
               sm: {
                   span: 16,
                   offset: 8,
               },
           },
       };
       return (


               <div >
                   <Search/>
                   <Nav/>
                   <SideBar/>
                   <Alert
                       message="Warning"
                       description="未登录，请先登录！."
                       type="warning"
                       showIcon
                       style={{display:this.state.status?"none":"block"}}
                   />

                   <Form style={{display:this.state.status?"block":"none"}} onSubmit={this.handleSubmit}>
                       <FormItem
                           {...formItemLayout}
                           label="姓名"
                       >
                           <Input value={this.state.name} onChange={this.changeName} disabled={this.state.edit} style={{color:'#000'}}/>
                       </FormItem>
                       <FormItem
                           {...formItemLayout}
                           label="年龄"
                       >
                           <Input value={this.state.age} onChange={this.changeAge} disabled={this.state.edit} style={{color:'#000'}}/>
                       </FormItem>
                       <FormItem
                           {...formItemLayout}
                           label="手机号码"
                       >
                           <Input value={this.state.tel} onChange={this.changeTel} disabled={this.state.edit} style={{color:'#000'}}/>
                       </FormItem>
                       <FormItem
                           {...formItemLayout}
                           label="性别"
                       >
                           <Input value={this.state.sex} onChange={this.changeSex} disabled={this.state.edit} style={{color:'#000'}}/>
                       </FormItem>
                       <FormItem
                           {...formItemLayout}
                           label="描述"
                       >
                           <Input value={this.state.desc} onChange={this.changeDesc} disabled={this.state.edit} style={{color:'#000'}}/>
                       </FormItem>



                       <FormItem {...tailFormItemLayout}>
                           <Button type="dashed" onClick={this.click}>{this.state.button}</Button>
                       </FormItem>
                       <Footer/>
                   </Form>

           </div>
       );
   }
}
const SelfHTML = Form.create()(selfForm);
export default  SelfHTML;