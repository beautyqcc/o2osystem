import React, { Component } from 'react';
import './Search.css';
import PropTypes from "prop-types";
class Search extends Component{
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props){
        super(props);
        this.state={
            search:""
        };
        this.handleChange=this.handleChange.bind(this);
        this.trunToDetails=this.trunToDetails.bind(this);
        this.keyDown=this.keyDown.bind(this);
    }
    componentDidMount(){
        var page=this.props.page;
        if(page==='index'){
            this.refs.div.className="searchDiv clearfix index";
        }else{
            this.refs.div.className="searchDiv clearfix other";
        }

    }
    handleChange(e){
        this.setState({
            search:e.target.value
        });
    }
    trunToDetails(){
        if(this.props.page==='detail'){
            this.props.selfSearch({
                address:this.state.search,
                hire:"",
                maxPrice:"",
                minPrice:'',
                direction:""
            });
        }else {
            this.context.router.history.push('/details?' + this.state.search);
        }
    }
    keyDown(e){
        if(e.keyCode==13){
            this.trunToDetails()
        }

    }
    render(){
        return(
            <div className='searchDiv clearfix ' ref='div'>
                <input type="text" name="search" className="searchInput"  placeholder="输入区域，小区名" value={this.state.search} onChange={this.handleChange} onKeyDown={this.keyDown}/>
                    <span className="searchSpan" onClick={this.trunToDetails}>马上找房</span>
            </div>
        );
    }
}
export  default Search;