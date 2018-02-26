import React,{ Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import we from '../../Image/CompanyProfile/we.png';
import fighting from '../../Image/CompanyProfile/fighting.jpeg';
import './Company.css';

class Company extends Component{
    render(){
        return(
            <div className="Company-wrap">
                <div className="Company-img">
                    <img src={we} alt="" width="100%" height="400" />
                </div>
                <div className="Company-main">
                    <div className="Company-Group">
                        <h1>全球领先的移动互联网游戏服务商</h1>
                        <p>江西江通文化传媒有限公司是一家专注于移动网络游戏为核心业务的生态型互联网公司，主要经营棋牌游戏研发、H5游戏、移动APP研发、小程序研发、手机游戏、移动增值业务推广、平台运营及手游研发、移动互联网推广研发等业务，涵盖短信彩信、IVR、手机视频、手机动漫、聚合支付业务、网盟整合业务、内容联盟等业务。公司秉承“通过互联网，让生活更美好”的理念，以自身大数据云平台为强大支撑，以精细化运营提升客户价值，致力成为全球领先的移动互联网营销方案服务商，凭借移动广告投放平台，第三方支付平台及自主研发团队，努力打造成为共享全球流量的第一平台。</p>
                        <p>公司秉承“通过互联网，让生活更美好”的理念，以自身大数据云平台为强大支撑，以精细化运营提升客户价值，致力成为全球领先的移动互联网营销方案服务商，凭借移动广告投放平台，第三方支付平台及自主研发团队，努力打造成为共享全球流量的第一平台。</p>
                    </div>
                    <div className="Company-Group">
                        <img src={fighting} alt="" width="100%" height="400" />
                    </div>
                    <div className="Company-center">
                        <h1>相聚在这里</h1>
                        <p>让有梦想，有理想，有思想的人集聚在这里一起描绘互联网世界的蓝图</p>
                        <h1>工作在这里</h1>
                        <p>让你在广阔的平台上挥洒你的汗水，创造你的奇迹</p>
                        <h1>生活在这里</h1>
                        <p>让你在这里有个温暖的家</p>
                        <h1>未来在这里</h1>
                        <p>互联网的创新成果深度融合于整个社会，让所有参与者共同享受胜利的果实，欢呼我们的未来</p>
                    </div>
                </div>
            </div>

        )
    }
}
export default Company;