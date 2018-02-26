import React,{ Component } from 'react';
import {browserRouter as Router, Route,Link,Switch} from 'react-router-dom';
class Recruit extends Component{
    constructor(props) {
        super(props);
        this.state={index:'0'};


    }

    //游戏开发click
    GameDevelopmentClick=()=>{
        if(this.state.index!='1'){
            this.setState({index:'1'})
        }else{
            this.setState({index:'0'})
        }

    };

    //游戏商务click
    GameBdClick=()=>{
        if(this.state.index!='2'){
            this.setState({index:'2'})
        }else{
            this.setState({index:'0'})
        }

    };

    //U3Dclick
    UnityClick=()=>{
        if(this.state.index!='3'){
            this.setState({index:'3'})
        }else{
            this.setState({index:'0'})
        }

    };

    //游戏运营click
    GameOperateClick=()=>{
        if(this.state.index!='4'){
            this.setState({index:'4'})
        }else{
            this.setState({index:'0'})
        }

    };

    //ASPClick
    ASPClick=()=>{
        if(this.state.index!='5'){
            this.setState({index:'5'})
        }else{
            this.setState({index:'0'})
        }

    };

    //游戏客服
    CustomerServiceClick=()=>{
        if(this.state.index!='6'){
            this.setState({index:'6'})
        }else{
            this.setState({index:'0'})
        }

    };






    render(){
        return(
            <div className="joinus-content" id="Joinus">
                <div className="wap-title"><span></span><em>职位招聘</em></div>
                <div className={this.state.index=='1' ? 'content current':'content'}>
                    <ul className="clearfix title">
                        <li className="fl name">Cocos2d游戏开发 </li>
                        <li className="fl type">技术类</li>
                        <li className="fl number">1</li>
                        <li className="fl data">2017-12-20</li>
                    </ul>
                    <span className="joinus-wap-tit show"><em></em>游戏开发 </span>
                    <a className="show show1" onClick={this.GameDevelopmentClick}></a>
                    <div className="details">
                        <p>&nbsp;</p>

                        <p>岗位职责：</p>

                        <p>&nbsp;</p>

                        <p>1、能基于Cocos2dx进行手机游戏的开发和上线工作；&nbsp; &nbsp; &nbsp;</p>

                        <p>2、了解产品设计思想，根据产品设计文档，制定自身的开发计划;</p>

                        <p>3、按照项目计划配合团队完成游戏开发、测试和版本更新; &nbsp; &nbsp;</p>

                        <p>4、根据运营需求作现有项目代码维护、修改、上线；</p>

                        <p>&nbsp;</p>

                        <p>任职资格：</p>

                        <p>&nbsp;</p>

                        <p>1、有2年以上游戏开发经验，以上Cocos2dx游戏开发经验； &nbsp; &nbsp;</p>

                        <p>2、精通CC和Java； &nbsp; &nbsp;</p>

                        <p>3、熟练掌握Cocos2dx开发框架; &nbsp; &nbsp;</p>

                        <p>4、熟悉Cocos2dx各个引擎版本及相关工具。</p>

                    </div>
                </div>
                <div className={this.state.index=='2' ? 'content current':'content'}>
                    <ul className="clearfix title">
                        <li className="fl name">游戏商务专员</li>
                        <li className="fl type">销售类</li>
                        <li className="fl number">1</li>
                        <li className="fl data">2017-12-20</li>
                    </ul>
                    <span className="joinus-wap-tit show"><em></em>游戏商务</span>
                    <a className="show show1" onClick={this.GameBdClick}></a>
                    <div className="details">
                        <p>&nbsp;</p>

                        <p>岗位职责：</p>

                        <p>&nbsp;</p>

                        <p>1、根据公司业务发展需求，撰写合作拓展方案以及寻找、挖掘新的合作资源<br/>
                            2、参与和协助与合作方(包括供应商)的商务谈判、合同及协议的起草 ；<br/>
                            3、通过行业合作资源的整合，为公司新产品推广创造良好环境；<br/>
                            4、处理报价，客户跟踪、客户信用管理等相关事务；<br/>
                            5、协助公司内其他部门落实游戏项目相关的合作工作；<br/>
                            6、处理日常商务工作（订单处理、返款核算、打款等）；</p>

                        <p>&nbsp;</p>

                        <p>任职资格：</p>

                        <p>&nbsp;</p>

                        <p>1、对游戏行业有较深刻的认识，具备良好的游戏厂商、媒体、渠道等社会关系资源 ；<br/>
                            2、思维灵活敏捷，逻辑思维能力强，优秀的创造力和想像力；<br/>
                            3、具有敏锐的市场洞察力、优秀的组织能力和市场开拓能力;<br/>
                            4、工作积极主动，良好团队协作意识和组织协调能力;<br/>
                            5、三年以上商务工作经验，在相关行业国内、欧美、日韩等资源者优先 （注：具有一定的外语交流能力）;</p>
                    </div>
                </div>
                <div className={this.state.index=='3' ? 'content current':'content'}>
                    <ul className="clearfix title">
                        <li className="fl name">Unity3D前端开发工程师</li>
                        <li className="fl type">技术类</li>
                        <li className="fl number">1</li>
                        <li className="fl data">2017-12-20</li>
                    </ul>
                    <span className="joinus-wap-tit show"><em></em>Unity3D</span>
                    <a className="show show1" onClick={this.UnityClick}></a>
                    <div className="details">
                        <p>&nbsp;</p>

                        <p>岗位职责：</p>

                        <p>&nbsp;</p>

                        <p>1、阅读并理解产品策划案；<br/>
                            2、设计游戏客户端的逻辑架构和实现；<br/>
                            3、能够指导和带领初级的程序员进行开发;<br/>
                            4、保证代码质量与运行效率，持续进行项目功能优化与代码调优；<br/>
                            5、完成上级交给的其他日常事务工作；<br/>
                            6、公司安排的其他工作。</p>

                        <p>&nbsp;</p>

                        <p>任职资格：</p>

                        <p>&nbsp;</p>

                        <p>1、一年以上游戏开发经验，计算机相关专业本科及以上学历；</p>

                        <p>2、熟悉游戏开发及Unity3D，有过完整的项目开发经验优先；</p>

                        <p>3、熟练掌握CC Clua编程语言，数据结构和算法；<br/>
                            4、熟悉iOSAndroid开发工具和相关开发测试工具的使用；<br/>
                            5、对计算机图形学，图像处理有一定了解；</p>
                        <p>6、有增强现实应用开发经验者优先；<br/>
                            7、有客户端网络开发经验者优先；<br/>
                            8、具有较强的学习能力、解决问题能力、创新能力、沟通表达能力和逻辑思维能力。
                        </p>

                    </div>
                </div>
                <div className={this.state.index=='4' ? 'content current':'content'}>
                    <ul className="clearfix title">
                        <li className="fl name">游戏运营</li>
                        <li className="fl type">运营类</li>
                        <li className="fl number">1</li>
                        <li className="fl data">2017-12-20</li>
                    </ul>
                    <span className="joinus-wap-tit show"><em></em>游戏运营</span>
                    <a className="show show1" onClick={this.GameOperateClick}></a>
                    <div className="details">
                        <p>&nbsp;</p>

                        <p>岗位职责：</p>

                        <p>&nbsp;</p>

                        <p>1、通过网络渠道招募手机游戏玩家，组织玩家进驻平台指定游戏。<br/>
                            2、对玩家进入游戏后，指导玩家游戏初期操作，使玩家尽快融入游戏。<br/>
                            3、性格开朗，能与玩家建立良好的人际关系。<br/>
                            4、能够快速的了解游戏，善于找到游戏的优缺点。维护引导付费用户，减少付费流失、增加付费用户的持续付费能力。<br/>
                            5、责任心强，有团队意识。<br/>
                            6、严格遵守公司保密协议，积极配合公司活动宣传。
                        </p>

                        <p>&nbsp;</p>

                        <p>任职资格：</p>

                        <p>1、二年以上互联网、移动互联网公司工作经验；<br/>
                            2、任职资格：男女不限，年龄18~30岁。具备高度激情，勇于接受挑战，能在游戏世界里有较好的号召力和感染力；<br/>
                            3、有客户端合作经验以及客户端资源者优先；</p>
                    </div>
                </div>
                <div className={this.state.index=='5' ? 'content current':'content'}>
                    <ul className="clearfix title">
                        <li className="fl name">ASP.NET开发工程师</li>
                        <li className="fl type">技术类</li>
                        <li className="fl number">1</li>
                        <li className="fl data">2017-12-20</li>
                    </ul>
                    <span className="joinus-wap-tit show"><em></em>ASP.NET开发工程师</span>
                    <a className="show show1" onClick={this.ASPClick}></a>
                    <div className="details">
                        <p>&nbsp;</p>

                        <p>岗位职责：</p>

                        <p>&nbsp;</p>

                        <p>1、ASP.NET开发工程师；</p>

                        <p>2、有良好的沟通和理解能力，富有敬业精神和团队合作精神；</p>

                        <p>3、深刻理解.NET架构，精通 ASP.NET，C#，Web API 等开发技术，有大型网站开发项目经验者优先；</p>

                        <p>4、熟悉Mysql等主流数据库。</p>
                        <p>5、熟悉OOA、常用设计模式和通用软件架构</p>
                        <p>6、熟练掌握JavaScript，XML，JSON，HTML5等前端技术，熟悉流行开源JS框架（如JQUERY），了解各类主流浏览器JS编程</p>

                        <p>&nbsp;</p>

                        <p>任职资格：</p>

                        <p>1、要求本科以上学历，应届毕业生亦可；</p>

                        <p>2、具有良好的编程风格，规范化、标准化的代码编写习惯；</p>

                        <p>3、善于沟通协调。</p>
                        <p>4、学习能力强，具有较强学习能力、解决问题的能力和对新事物接受能力 </p>
                        <p>5、热爱互联网，有志于通过网络改变世界； </p>
                    </div>
                </div>
                <div className={this.state.index=='6' ? 'content current':'content'}>
                    <ul className="clearfix title">
                        <li className="fl name">游戏客服</li>
                        <li className="fl type">客服类</li>
                        <li className="fl number">1</li>
                        <li className="fl data">2017-12-20</li>
                    </ul>
                    <span className="joinus-wap-tit show"><em></em>游戏客服</span>
                    <a className="show show1" onClick={this.CustomerServiceClick}></a>
                    <div className="details">
                        <p>&nbsp;</p>

                        <p>岗位职责：</p>

                        <p>&nbsp;</p>

                        <p>1、通过客服管理平台、论坛等服务通道对用户的问题进行解答；</p>

                        <p>2、维护游戏内秩序、负责日常公告、线上活动等需求的实施工作；</p>

                        <p>3、通过客服热线电话处理玩家的问题；</p>

                        <p>3、通过客服热线电话处理玩家的问题；</p>

                        <p>5、定期总结提交报告，汇报工作进度、近期游戏内服务器趋势、热点问题等内容。</p>

                        <p>&nbsp;</p>

                        <p>任职资格：</p>

                        <p>&nbsp;</p>

                        <p>1、专科及以上学历，一年以上互联网或移动互联网工作经验；&nbsp;</p>

                        <p>2、了解移动互联网广告市场，对移动互联网广告平台及产品有较深理解和认识；</p>

                        <p>3、具备良好的沟通、协作、判断能力；</p>

                        <p>4、有很强的自我和适应能力，富有创造激情，能够适应快速的工作节奏；</p>
                    </div>
                </div>
            </div>

        )
    }
}
export default Recruit;