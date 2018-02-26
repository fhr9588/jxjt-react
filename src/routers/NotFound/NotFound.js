import React,{ Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import './NotFound.css';
class NotFound extends Component{
    render(){
        return(
            <div className="NotFound">404</div>
        )
    }
}
export default NotFound;
