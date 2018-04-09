import IndexHTML from './pages/indexPage/IndexHTML'
import DeatilsHTML from './pages/detailsPage/DetailsHTML';
import  InforHTML from  "./pages/inforPage/InforHTML"
import  HostHTML from  "./pages/hostPage/HostHTML"
import SelfHTML from  "./pages/selfInfor/SelfHTML"
import MyHostHTML from  "./pages/myHost/MyHostHTML"
import React from "react";
import './index.css';
import './common/common.css';
import './common/common.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const ReactDOM = require('react-dom');
const CustomLinkExample = () => (
    <Router>
        <div>
            <Route exact path="/" component={IndexPage} />
            <Route path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage}/>
            <Route exact path="/details" component={DetailsPage} />
            <Route exact path="/infor" component={InforPage}/>
            <Route exact path="/host" component={HostPage}/>
            <Route exact path="/self" component={selfPage}/>
            <Route exact path="/myHost" component={myHostPage}/>
        </div>
    </Router>
);
const IndexPage = () =>(
    <div>
      <IndexHTML/>
    </div>
);
const DetailsPage = () => (
    <div>
        <DeatilsHTML/>
    </div>
);
const InforPage=()=>(
    <div>
        <InforHTML/>
    </div>
)
const HostPage=()=>(
        <div>
            <HostHTML/>
        </div>

)
const selfPage=()=>(
    <div>
        <SelfHTML/>
    </div>

)
const myHostPage=()=>(
    <div>
        <MyHostHTML/>
    </div>

)
const LoginPage = () => (
    <div>
        <Login/>
    </div>
);
const RegisterPage = () => (
    <div>
        <Register/>
    </div>
);

ReactDOM.render((

  < CustomLinkExample/>

), document.getElementById('root'));