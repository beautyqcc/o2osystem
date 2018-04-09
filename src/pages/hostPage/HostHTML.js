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
        message: '上传成功',
        description: '房屋信息上传成功',
        duration: 2,
    };
    notification.open(args);
};
class HostForm extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        status:true,
        role:false,
        previewVisible: false,
        previewImage: '',
        fileList: []


    };
    handleCancel = () => this.setState({ previewVisible: false })
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => {console.log(fileList);this.setState({ fileList })}
    handleSubmit = (e) => {
        e.preventDefault();
        var that=this;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("开始提交");
               $.ajax({
                   type:"post",
                   url:Common.path+"/house/pubilshHouse",
                   xhrFields:{withCredentials:true},
                   data:JSON.stringify(values),
                   contentType: "application/json",
                   success:function(){

                       openNotification();
                       that.props.form.resetFields();
                   }
               });
            }
        });
    }
    removeImg=(e)=>{
          console.log(e.response.index);
          $.ajax({
              url:Common.path+'/image/remove?imageIndex='+e.response.index,
              xhrFields:{withCredentials: true},
              success:function(){
                  console.log("删除成功");
              }
          });
    }
  componentWillMount(){
        var that=this;
       $.ajax({
          url: Common.path + "/account/get",
           xhrFields:{withCredentials: true},
          success: function (e) {
              if(e.success){
                that.setState({status:true});
                if(e.result.role==="Landlord"){
                    that.setState({role:true});
                }else{
                    that.setState({role:false});
                }
              }else{
                  that.setState({status:false});
              }

           }
  });
  }

    render(){
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
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

        <div style={{background:"rgb(244,244,244)"}}>
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
            <Alert
                message="Warning"
                description="您不是房东，无权委托！."
                type="warning"
                showIcon
                style={{display:this.state.role?"none":"block"}}
            />
            <Form style={{display:(this.state.status&&this.state.role)?"block":"none"}} onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="描述"
                >
                    {getFieldDecorator('description', {
                        rules: [{
                            required: true, message: '请输入描述!',
                        }
                        ],
                    })(
                        <Input className='width'/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="地址"
                >
                    {getFieldDecorator('address', {
                        rules: [{
                            required: true, message: 'Please confirm your password!',
                        }],
                    })(
                        <Input disabled='true' />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="详细地址"
                >
                    {getFieldDecorator('addressDetails', {
                        rules: [{required: true, message: '请输入详细地址!', whitespace: true}],
                    })(
                        <Input className='width'/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="房租"
                >
                    {getFieldDecorator('price', {
                        rules: [{required: true, message: '请输入房租!', whitespace: true}],
                    })(
                        <Input className='width'/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="几室几厅"
                >
                    {getFieldDecorator('room', {
                        rules: [{required: true, message: '请输入几室几厅!', whitespace: true}],
                    })(
                        <Input className='width'/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="付款方式"
                >
                    {getFieldDecorator('payment', {
                        rules: [{required: true, message: '请输入付款方式!', whitespace: true}],
                    })(
                        <Input className='width'/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="面积"
                >
                    {getFieldDecorator('roomArea', {
                        rules: [{required: true, message: '请输入面积!', whitespace: true}],
                    })(
                        <Input className='width'/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="小区周边"
                >
                    {getFieldDecorator('surrounding', {
                        rules: [{required: true, message: '请输入小区周边信息!', whitespace: true}],
                    })(
                        <Input className='width'/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="特色"
                >
                    {getFieldDecorator('characteristic', {
                        rules: [{required: true, message: '请输入特色信息!', whitespace: true}],
                    })(
                        <Input className='width'/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="配置信息"
                >
                    {getFieldDecorator('configInfo', {
                        rules: [{required: true, message: '请输入配置信息!', whitespace: true}],
                    })(
                        <Input className='width'/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="是否整租"
                >
                    {getFieldDecorator('hire')(
                        <RadioGroup>
                            <Radio value="true">整租</Radio>
                            <Radio value="false">合租</Radio>

                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="装修"
                >
                    {getFieldDecorator('decoration')(
                        <RadioGroup>
                            <Radio value="精装修">精装修</Radio>
                            <Radio value="简单装修">简单装修</Radio>
                            <Radio value="毛坯房">毛坯房</Radio>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="朝向"
                >
                    {getFieldDecorator('direction')(
                        <RadioGroup>
                            <Radio value="东">东</Radio>
                            <Radio value="西">西</Radio>
                            <Radio value="南">南</Radio>
                            <Radio value="北">北</Radio>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="上传图片"
                >

                <div className="clearfix">
                    <Upload
                        action={Common.path+"/image/uploadPicture"}
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                        withCredentials={true}
                        multiple={true}
                        onRemove={this.removeImg}
                    >
                        {fileList.length >= 3 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </div>
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">委托</Button>
                </FormItem>
                <Footer/>
            </Form>

        </div>

        );
    }
}
const HostHTML = Form.create()(HostForm);
export default HostHTML;