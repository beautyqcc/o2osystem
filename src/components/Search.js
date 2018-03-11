import React, { Component } from 'react';
import './Search.css';
class Search extends Component{
    componentDidMount(){
        var page=this.props.page;
        if(page==='index'){
            this.refs.div.className="searchDiv clearfix index";
        }else{
            this.refs.div.className="searchDiv clearfix other";
        }

    }
    render(){
        return(
            <div className='searchDiv clearfix ' ref='div'>
                <input type="text" name="search" className="searchInput"  placeholder="输入区域，小区名"/>
                    <span className="searchSpan">马上找房</span>
            </div>
        );
    }
}
export  default Search;