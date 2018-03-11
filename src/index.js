import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Search  from './components/Search';
import Sidebar from './components/SideBar';
import Mask from './components/Mask'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './common.css';
import Register from "./components/Register";
import Login from "./components/Login";
import ChangeCode from "./components/ChangeCode";



class Index extends  Component{
    render(){
        return (
            <div>
                <Nav active="zufang"/>
                <Search page='other'/>
                <Sidebar/>
                <Login/>
            </div>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
