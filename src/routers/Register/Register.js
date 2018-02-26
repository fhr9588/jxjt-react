import React,{ Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import './Register.css';
class Register extends Component{
    constructor(props) {
        super(props);
        if(props.location.pathname=='/Register'){
            console.log('1');
        }
        this.state={
            user:'',
            upwd:'',
            aginUpwd:'',
            phone:'',
            email:'',
            name:'',
            idCard:'',
            protocol:true,
            userSpan:'',
            upwdSpan:'',
            aginUpwdSpan:'',
            phoneSpan:'',
            emailSpan:'',
            nameSpan:'',
            idCardSpan:'',
            readedSpan:''
        }
    }

    //账号
    registerUserClick=(e)=>{
        this.setState({user:e.target.value});
    };


    //密码
    registerUpwdClick=(e)=>{
        this.setState({upwd:e.target.value});
    };


    //确认密码
    registerAginUpwdClick=(e)=>{
        this.setState({aginUpwd:e.target.value})
    };


    //手机号
    registerPhoneClick=(e)=>{
        this.setState({phone:e.target.value});
    };


    //邮箱
    registerEmailClick=(e)=>{
        this.setState({email:e.target.value});
    };


    //真实姓名
    registerNameClick=(e)=>{
        this.setState({name:e.target.value});
    };


    //身份证号
    registeridCardClick=(e)=>{
        this.setState({idCard:e.target.value});
    };


    //是否同意change
    registerProtocolChange=(e)=>{
        this.setState({protocol:e.target.checked});
    };

    //点击注册
    registerClick=()=>{
        var uname=this.state.user;
        //清空span提示信息
        this.setState({userSpan:''});
        this.setState({upwdSpan:''});
        this.setState({aginUpwdSpan:''});
        this.setState({phoneSpan:''});
        this.setState({emailSpan:''});
        this.setState({nameSpan:''});
        this.setState({idCardSpan:''});
        this.setState({readedSpan:''});


        console.log(this.state);


        //添加正则校验
        var EmailReg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        var PhoneReg = new RegExp("^1[3458][0-9]{9}$");
        var idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

        if(this.state.user!=''){
            if(this.state.upwd!=''){
                if(this.state.aginUpwd!=''){
                    if(this.state.upwd==this.state.aginUpwd){
                        if(this.state.phone!='') {
                            if (PhoneReg.test(this.state.phone) != false){
                                if (this.state.email != '') {
                                    if (EmailReg.test(this.state.email) != false) {
                                        if (this.state.name != '') {
                                            if (this.state.idCard != '') {
                                                if(idCardReg.test(this.state.idCard)!=false) {
                                                    if (this.state.protocol == true) {

                                                        axios.post('http://api.ganqilaia.com/register',
                                                            qs.stringify({
                                                                uname:this.state.user,
                                                                password:this.state.upwd,
                                                                aginUpwd:this.state.aginUpwd,
                                                                phone:this.state.phone,
                                                                email:this.state.email,
                                                                name:this.state.name,
                                                                idCard:this.state.idCard
                                                            }))
                                                        .then((res)=>{
                                                            if(res.data!=''){
                                                                alert('登陆失败,请重试')
                                                            }else{
                                                                var allname= sessionStorage.setItem('account',uname);
                                                                //window.location.href='/';
                                                                this.props.history.push('/');
                                                            }
                                                        })
                                                    .catch((error)=>{
                                                            console.log(error);
                                                        });

                                                    } else{this.setState({readedSpan:'请同意用户协议'})}
                                                }else {this.setState({idCardSpan:'身份证号格式不正确'})}
                                            } else {this.setState({idCardSpan:'身份证号不能为空'})}
                                        } else {this.setState({nameSpan:'姓名不能为空'})}
                                    } else {this.setState({emailSpan:'邮箱格式不正确'})}
                                } else {this.setState({emailSpan:'邮箱不能为空'})}
                            } else {this.setState({phoneSpan:'手机号格式不正确'})}
                        }else{this.setState({phoneSpan:'手机号不能为空'})}
                    }else{this.setState({aginUpwdSpan:'两次输入密码不一至'})}
                }else{this.setState({aginUpwdSpan:'密码不能为空'})}
            }else{this.setState({upwdSpan:'密码不能为空'})}
        }else{this.setState({userSpan:'用户名不能为空'})}





    };


    render(){
        return(
            <div className="registerMain">
                <div className="title">
                    <h1 className="title-left">用户注册</h1>
                    <div className="title-right">
                        <span>已有账号，请直接</span>
                        <Link to="/app/Login">登陆>></Link>
                    </div>
                </div>
                <div className="main">
                    <ul className="mainList">
                        <li>
                            <label htmlFor="user">账&nbsp;&nbsp;号:</label>
                            <input id="user" type="text" placeholder="请输入账号" onBlur={this.registerUserClick} />
                            <span>*</span><span id="userSpan">{this.state.userSpan}</span>
                        </li>
                        <li>
                            <label htmlFor="upwd">密&nbsp;&nbsp;码:</label>
                            <input id="upwd" type="password" placeholder="请输入密码" onChange={this.registerUpwdClick} />
                            <span>*</span><span id="upwdSpan">{this.state.upwdSpan}</span>
                        </li>
                        <li>
                            <label htmlFor="aginUpwd">确认密码:</label>
                            <input id="aginUpwd" type="password" placeholder="再次输入密码" onChange={this.registerAginUpwdClick} />
                            <span>*</span><span id="aginUpwdSpan">{this.state.aginUpwdSpan}</span>
                        </li>
                        <li>
                            <label htmlFor="phone">手机号:</label>
                            <input id="phone" type="text" placeholder="请输入手机号" onChange={this.registerPhoneClick} />
                            <span>*</span><span id="phoneSpan">{this.state.phoneSpan}</span>
                        </li>
                        <li>
                            <label htmlFor="email">邮&nbsp;&nbsp;箱:</label>
                            <input id="email" type="text" placeholder="请输入邮箱" onChange={this.registerEmailClick} />
                            <span>*</span><span id="emailSpan">{this.state.emailSpan}</span>
                        </li>
                        <li>
                            <label htmlFor="name">真实姓名:</label>
                            <input id="name" type="text" placeholder="请输入真实姓名" onChange={this.registerNameClick} />
                            <span>*</span><span id="nameSpan">{this.state.nameSpan}</span>
                        </li>
                        <li>
                            <label htmlFor="idCard">身份证号:</label>
                            <input id="idCard" type="text" placeholder="请输入身份证号" onChange={this.registeridCardClick} />
                            <span>*</span><span id="idCardSpan">{this.state.idCardSpan}</span>
                        </li>
                        <li className="protocolList">
                            <input className="protocol" id="readed" type="checkbox" checked={this.state.protocol} onChange={this.registerProtocolChange} />
                            我已经看过并同意<a target="_blank" href="Protocol.html">《会员注册协议》</a>
                            <span id="readedSpan">{this.state.readedSpan}</span>
                        </li>
                        <li>
                            <a id="RegisterBtn" className="btn" onClick={this.registerClick}>注册</a>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}
export default Register;