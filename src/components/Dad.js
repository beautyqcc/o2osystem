import React, { Component } from 'react';
class Son extends React.Component{
    constructor(props){
        super(props)

        this.state = {'A':props.A};
        this.handleAdd=this.handleAdd.bind(this);
    }
   componentWillReceiveProps(nextProps){
        this.setState({
            "A":nextProps.A
        });
   }
    handleAdd(){
        var B=this.state.A;
        B++;
        this.setState({'A': B});
    }
   fun1(){
        console.log("字节点的方法");
   }
    render(){
        return(
            <div>
                <button onClick={this.props.mes} > 累加</button>
                <div>{this.state.A} </div>
            </div>
        )
    }
}
class Dad extends Component{

    constructor(props){
        super(props)

        this.state = {SA: 1};
        this.handleChangeA=this.handleChangeA.bind(this);
        this.getM=this.getM.bind(this);
    }

    handleChangeA(){
        //目的是将Son A的属性可以动态修改
        this.setState({SA:Math.random()});
    }
    fun(){
        console.log("aa");
    }
    getM(){
        this.refs.son.fun1();
    }
componentWillUpdate(){
        console.log("将要更新");
}
componentDidUpdate(){
        console.log("正在更新");
}
    render(){
        return(
        <div>
            <Son A={this.state.SA} mes={this.fun} ref='son'/>
            <button onClick={this.handleChangeA}>修改基础值</button>
            <span>{this.state.SA}</span>
            <button onClick={this.getM}>调用子节点的方法</button>
        </div>
        );
    }
}
export  default Dad;