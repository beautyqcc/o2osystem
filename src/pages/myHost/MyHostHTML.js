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
class hostForm extends Component{
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
        // this.click=this.click.bind(this)
    }
    componentWillMount(){

        Common.isLogin( e => {
            if(e.success){
                // console.log(e);
                if(e.result.role==='Landlord'){
                    //房东身份
                }else{
                    //非房东身份
                    $.ajax({
                        type:"get",
                        url:Common.path+"/tenant/myLandlord",
                        xhrFields:{withCredentials:true},
                        contentType: "application/json",
                        success:function(e){
                        console.log(e);

                        }
                    });
                }
                // var sex=e.result.gender?'男':'女';
                // this.setState({
                //     name:e.result.name,
                //     age:e.result.age,
                //     sex:sex,
                //     tel:e.result.mobile,
                //     desc:e.result.description,
                //     button:'编辑信息'
                // });
            }else{
                this.setState({
                    status:false
                });
                //未登录
            }
        });
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
                        label="房东姓名"
                    >
                        <Input value={this.state.name}  disabled={true}  style={{color:'#000'}}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="房东年龄"
                    >
                        <Input value={this.state.age} disabled={true} style={{color:'#000'}}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="房东手机号码"
                    >
                        <Input value={this.state.tel}  disabled={true}  style={{color:'#000'}}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="房东性别"
                    >
                        <Input value={this.state.sex}  disabled={true}  style={{color:'#000'}}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="房东描述"
                    >
                        <Input value={this.state.desc} disabled={true} style={{color:'#000'}}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="相关评论"
                    >

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
const MyHostHTML = Form.create()(hostForm);
export default  MyHostHTML;