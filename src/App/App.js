import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom';
import Index from '../routers/Index/Index'
import GameIntroduced from '../routers/GameIntroduced/GameIntroduced';
import Company from '../routers/Company/Company';
import ContactUs from '../routers/ContactUs/ContactUs';
import Recruit from '../routers/Recruit/Recruit';
import ParentsCare from '../routers/ParentsCare/ParentsCare';
import Login from '../routers/Login/Login';
import Register from '../routers/Register/Register';
import System from '../routers/System/System';
import Protocol from '../routers/Protocol/Protocol';
import Scheme from '../routers/Scheme/Scheme';
import Dispute from  '../routers/Dispute/Dispute';
import Test from '../routers/Test/Test';
import Test2 from '../routers/Test2/Test2';
import './Public.css';
import jxtlogo from '../Image/Master/jxtlogo.png';
class App extends Component {
    constructor(props) {
        super(props);
        let currents = window.location.pathname;
        console.log(currents);
        this.state = {index: '1',sendCount:0,account:null};

        this.sendSwordParent = this.sendSwordParent.bind(this);
        this.getSwordCount = this.getSwordCount.bind(this);




        //为了刷新时的class
        if (currents == '/app/GameIntroduced') {
            this.state.index='2';
        }
        if (currents == '/app/Company') {
            this.state.index='3'
        }
        if (currents == '/app/ContactUs') {
            this.state.index='4'
        }
        if(currents=='/app/Recruit') {
            this.state.index='5'
        }
        if(currents=='/app/ParentsCare'){
            this.state.index='6'
        }
        if(currents=='/app/Login'){
            this.state.index='7'
        }
        if(currents=='/app/Register'){
            this.state.index='8'
        }
        if(currents=='/app/System'){
            this.state.index='9'
        }
        if(currents=='/app/Protocol'){
            this.state.index='10'
        }
        if(currents=='/app/Scheme'){
            this.state.index='11'
        }
        if(currents=='/app/Dispute'){
            this.state.index='12'
        }
    }


    //生命周期函数
    //接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。


    componentWillUpdate(e){
        console.log(sessionStorage.getItem("account"));
        //this.state.account=sessionStorage.getItem("account");
        if(e.location.pathname=='/app/Login'){
            this.state.index='7';
        }
        if(e.location.pathname=='/app/Register'){
            this.state.index='8';
        }
    }

    sendSwordParent () {
        // 父类调用子类的方法
            this.refs.getSwordButton.sendSword();
        //console.log(' this.refs.getSwordButton', this.refs.getSwordButton);
    }

    getSwordCount (refs) {
        //通过  this.refs.getSwordButton 获取 子类对象 加完之后将加完的结果通知给子类，即，将结果通过 this.refs.getSwordButton 给子类的state.count 设置
        console.log(this.refs.getSwordButton);
        this.setState({sendCount: this.refs.getSwordButton.state.count + 1}, () => {
                        console.log(this.refs.getSwordButton.state.count);
            this.refs.getSwordButton.setState({
                count: this.refs.getSwordButton.state.count + 1
            });
        });
    }


    //为了动态添加和删除class
    //首页
    indexClick=()=>{
        this.setState({index:'1'})
    };

    //游戏介绍
    GameIntroducedClick=()=>{
        this.setState({index:'2'})
    };

    //公司简介
    CompanyClick=()=>{
        this.setState({index:'3'})
    };

    //联系我们
    ContactUsClick=()=>{
        this.setState({index:'4'})
    };

    //招聘人才
    RecruitClick=()=>{
        this.setState({index:'5'})
    };

    //家长监护
    ParentsCareClick=()=>{
        this.setState({index:'6'})
    };

    //登陆
    LoginClick=()=>{
        this.setState({index:'7'})
    };

    //注册
    RegisterClick=()=>{
        this.setState({index:'8'})
    };

    //制度规定
    SystemClick=()=>{
        this.setState({index:'9'})
    };

    //用户协议
    ProtocolClick=()=>{
        this.setState({index:'10'})
    };

    //技术方案
    SchemeClick=()=>{
        this.setState({index:'11'})
    };

    //用户纠纷
    DisputeClick=()=>{
        this.setState({index:'12'})
    };


    //用户退出
    quit=(e)=>{
        sessionStorage.removeItem('account');
        var nowAddress=this.props.history.location.pathname;
        this.props.history.push(nowAddress);
        //window.location.href=window.location.href;
    };


  render() {
      let match = this.props.match;
      let value=sessionStorage.getItem("account");
      return (
      <div className="App">
          <div className="tpri">
              <div className="logo1">
                  <Link to={`${match.url}`} className="yuxun_logo" onClick={this.indexClick}>
                      <img src={jxtlogo} alt="" width="110" height="70" />
                  </Link>
                  <div className="box">

                      {/*此处三目判断,是为了浏览地址不正确时可以正确跳转404页面*/}
                      {match.path!='/app' ?
                          <ul className="nav clearfix">
                              <li><Link className={this.state.index=='1' ? 'active':''} to={`${match.url}app`} onClick={this.indexClick}>首 页</Link></li>
                              <li><Link className={this.state.index=='2' ? 'active':''} to={`${match.url}app/GameIntroduced`} onClick={this.GameIntroducedClick}>游戏介绍</Link></li>
                              <li><Link className={this.state.index=='3' ? 'active':''} to={`${match.url}app/Company`} onClick={this.CompanyClick}>公司简介</Link></li>
                              <li><Link className={this.state.index=='4' ? 'active':''} to={`${match.url}app/ContactUs`} onClick={this.ContactUsClick}>联系我们</Link></li>
                              <li><Link className={this.state.index=='5' ? 'active':''} to={`${match.url}app/Recruit`} onClick={this.RecruitClick}>招聘人才</Link></li>
                              <li><Link className={this.state.index=='6' ? 'active':''} to={`${match.url}app/ParentsCare`} onClick={this.ParentsCareClick}>家长监护</Link></li>
                              {value!=null ?
                                  <li id="last">
                                      {'hello,'+value} <span className="lastSpan" onClick={this.quit}>退出</span>
                                  </li>
                                  :
                                  <li id="last">
                                      <Link className={this.state.index=='7' ? 'active':''} to={`${match.url}app/Login`} onClick={this.LoginClick}>登陆</Link>
                                      <span className="navSpan">|</span>
                                      <Link className={this.state.index=='8' ? 'active':''} to={`${match.url}app/Register`} onClick={this.RegisterClick}>注册</Link></li>
                              }
                          </ul>
                            :
                          <ul className="nav clearfix">
                              <li><Link className={this.state.index=='1' ? 'active':''} to={`${match.url}`} onClick={this.indexClick}>首 页</Link></li>
                              <li><Link className={this.state.index=='2' ? 'active':''} to={`${match.url}/GameIntroduced`} onClick={this.GameIntroducedClick}>游戏介绍</Link></li>
                              <li><Link className={this.state.index=='3' ? 'active':''} to={`${match.url}/Company`} onClick={this.CompanyClick}>公司简介</Link></li>
                              <li><Link className={this.state.index=='4' ? 'active':''} to={`${match.url}/ContactUs`} onClick={this.ContactUsClick}>联系我们</Link></li>
                              <li><Link className={this.state.index=='5' ? 'active':''} to={`${match.url}/Recruit`} onClick={this.RecruitClick}>招聘人才</Link></li>
                              <li><Link className={this.state.index=='6' ? 'active':''} to={`${match.url}/ParentsCare`} onClick={this.ParentsCareClick}>家长监护</Link></li>
                              {value!=null ?
                                  <li id="last">
                                      {'hello,'+value} <span className="lastSpan" onClick={this.quit}>退出</span>
                                  </li>
                                  :
                                  <li id="last">
                                      <Link className={this.state.index=='7' ? 'active':''} to={`${match.url}/Login`} onClick={this.LoginClick}>登陆</Link>
                                      <span className="navSpan">|</span>
                                      <Link className={this.state.index=='8' ? 'active':''} to={`${match.url}/Register`} onClick={this.RegisterClick}>注册</Link></li>
                              }
                          </ul>
                      }

                  </div>
              </div>
          </div>
          <div className="react-main">
              {/*<Test ref="getSwordButton" getSwordCount2={this.getSwordCount} buttonName="儿子送宝刀" />
              <button onClick={this.sendSwordParent}>通过老爸送宝刀</button>
              <p style={{fontSize: '20px'}}>
                  父子俩共送{this.state.sendCount}把宝刀！！！
              </p>*/}

              {/*Switch是只能让以下路由中的其中一个生效.
                 Redirect是如果不是以上的路由地址,就跳转到404页面
*/}
              <Switch>
              <Route path={`${match.url}`} exact component={Index} />
              <Route path={`${match.url}/GameIntroduced`} component={GameIntroduced} />
              <Route path={`${match.url}/Company`} component={Company} />
              <Route path={`${match.url}/ContactUs`} component={ContactUs} />
              <Route path={`${match.url}/Recruit`} component={Recruit} />
              <Route path={`${match.url}/ParentsCare`} component={ParentsCare} />
              <Route path={`${match.url}/Login`} component={Login} />
              <Route path={`${match.url}/Register`} component={Register} />
              <Route path={`${match.url}/System`} component={System} />
              <Route path={`${match.url}/Protocol`} component={Protocol} />
              <Route path={`${match.url}/Scheme`} component={Scheme} />
              <Route path={`${match.url}/Dispute`} component={Dispute} />
              <Redirect to='/404' />
              </Switch>
          </div>
          <div className="footer-wrap">
             <div className="footer-content">
                  <div className="nav">
                      {match.path!='/app' ?
                          <p>
                              <Link to={`${match.url}app/Company`} onClick={this.CompanyClick}>关于我们</Link>|
                              <Link to={`${match.url}app/ContactUs`} onClick={this.ContactUsClick}>商户合作</Link>|
                              <Link to={`${match.url}app/Recruit`} onClick={this.RecruitClick}>招聘人才</Link>|
                              <Link to={`${match.url}app/System`} onClick={this.SystemClick}>制度规定</Link>|
                              <Link to={`${match.url}app/GameIntroduced`} onClick={this.GameIntroducedClick}>游戏介绍</Link>|
                              <Link to={`${match.url}app/Protocol`} onClick={this.ProtocolClick}>用户协议</Link>|
                              <Link to={`${match.url}app/Scheme`} onClick={this.SchemeClick}>技术方案</Link>|
                              <Link to={`${match.url}app/Dispute`} onClick={this.DisputeClick}>用户纠纷</Link>|
                              <Link to={`${match.url}app/ParentsCare`} onClick={this.ParentsCareClick}>家长监护</Link>
                          </p>
                            :
                          <p>
                              <Link to={`${match.url}/Company`} onClick={this.CompanyClick}>关于我们</Link>|
                              <Link to={`${match.url}/ContactUs`} onClick={this.ContactUsClick}>商户合作</Link>|
                              <Link to={`${match.url}/Recruit`} onClick={this.RecruitClick}>招聘人才</Link>|
                              <Link to={`${match.url}/System`} onClick={this.SystemClick}>制度规定</Link>|
                              <Link to={`${match.url}/GameIntroduced`} onClick={this.GameIntroducedClick}>游戏介绍</Link>|
                              <Link to={`${match.url}/Protocol`} onClick={this.ProtocolClick}>用户协议</Link>|
                              <Link to={`${match.url}/Scheme`} onClick={this.SchemeClick}>技术方案</Link>|
                              <Link to={`${match.url}/Dispute`} onClick={this.DisputeClick}>用户纠纷</Link>|
                              <Link to={`${match.url}/ParentsCare`} onClick={this.ParentsCareClick}>家长监护</Link>
                          </p>
                      }
                  </div>
                  <div className="footer-bottom">
                      <img src={jxtlogo} alt="" />
                          <div className="footer-bottom-text">
                              <p>江西江通文化传媒有限公司 版权所有 赣ICP备17012908号-1 　Copyright © 2007-2018</p>
                              <p>健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。</p>
                          </div>
                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default App;
