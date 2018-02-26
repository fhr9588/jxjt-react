import React,{ Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import './Login.css';
class Login extends Component{
    constructor(props){
        super(props);
        this.state={user:'',upwd:'',jump:false};
        this.userChange=this.userChange.bind(this);
        this.upwdChange=this.upwdChange.bind(this);
        this.btnClick=this.btnClick.bind(this);
    }

    //这个函数是用来修改验证成功后的跳转
    componentDidUpdate(){
        if(this.state.jump!=false){
            this.props.history.push('/');

        }
    }

    //userChange
    userChange=(e)=>{
      this.setState({user:e.target.value})
    };

    //upwdChange
    upwdChange=(e)=>{
      this.setState({upwd:e.target.value})
    };

    //btn
    btnClick=()=>{
        var uname=this.state.user;
        var password=this.state.upwd;
        if(uname==''){
            alert('用户名不能为空');
            return false
        }
        if(password==''){
            alert('密码不能为空');
            return false
        }

        axios.post('http://api.ganqilaia.com/login',
            qs.stringify({username:uname,password:password}))
        .then((response)=>{
            if(response.data!=''){
                alert('登陆失败,请重试')
            }
            else{
                var allname= sessionStorage.setItem('account',uname);
                //window.location.href='/';
                //这里使用了setState修改jump状态从而实现跳转,单应用页面就摒弃了原生js的window.location.href='/'的跳转
                this.setState({jump:true});

            }
        })
            .catch((error)=>{
                console.log(error);
            })


    };


    render(){
        return(
            <div className="loginMain">
                <div className="title">
                    <h1 className="title-left">用户登录</h1>
                    <div className="title-right">
                        <span>还没有账号，请直接</span>
                        <Link to='/app/Register'>注册>></Link>
                    </div>
                </div>
                <div className="main">
                    <ul className="mainList">
                        <li><label htmlFor="user">账&nbsp;&nbsp;号:</label><input id="user" type="text" placeholder="请输入账号" value={this.state.user} onChange={this.userChange} /></li>
                        <li><label htmlFor="upwd">密&nbsp;&nbsp;码:</label><input id="upwd" type="password" placeholder="请输入密码" value={this.state.upwd} onChange={this.upwdChange} /></li>
                        <li><a id="loginBtn" className="btn" onClick={this.btnClick}>登陆</a></li>
                    </ul>
                </div>
            </div>

    )
    }
}
export default Login;