import React,{ Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import './ParentsCare.css';
import jiazhang from '../../Image/ParentsCare/jiazhang.jpeg';
import shenqing from '../../Image/ParentsCare/shenqing.jpg';
import download from '../../data/Download.zip';
class ParentsCare extends Component{
    render(){
        return(
            <div className="ParentsCare-main">
                <div className="ParentsCare-img">
                    <img src={jiazhang} alt="家长监护" />
                </div>
                <div className="bigBackground">
                    <div className="ParentsCare-content">
                        <div className="ParentsCare-left">
                            <ul>
                                <li className="row">
                                    <h3>常见问题FAQ</h3>
                                    <div className="listItem">
                                        <h4>Q：可以通过什么渠道申请家长监督未成年人账号？</h4>
                                        <p>A：目前您可以通过专线电话、网络接待方式来咨询。</p>
                                    </div>
                                    <div className="listItem">
                                        <h4>Q：什么情况下需要申请该项服务呢？</h4>
                                        <p>A：在监护人发现被监护人有沉溺游戏的情况下，监护人可向江西江通文化传媒有限公司申请发起未成年人家长监护机制。</p>
                                    </div>
                                    <div className="listItem">
                                        <h4>Q：申请该项服务时需要提交哪些资料呢？</h4>
                                        <p>A：您需要提供监护人身份证复印件、账号所属人身份证复印件以及户口本复印件、公安机关监护证明。</p>
                                    </div>
                                    <div className="listItem">
                                        <h4>Q：相关资料寄往哪里呢？</h4>
                                        <p>A：请将相关资料邮寄至：（请在信封表面写上“家长监控服务申请书”的字样）<br/>
                                            收件人：江西江通文化传媒有限公司，游戏事业部。<br/>
                                            地址：江西省南昌市红谷滩新区红谷中大道789号江信国际花园18号楼1215室(第12层)。<br/>
                                            邮编：100044。</p>
                                    </div>
                                    <div className="listItem">
                                        <h4>Q：提交资料后，后续处理流程怎样呢？</h4>
                                        <p>A：您提交相关申请资料后，我司客服人员将按照监护申请流程尽快处理您的申请，处理过程中可能需要对监护人和被监护人进行电话回访以便信息的判定，希望您的配合。</p>
                                    </div>
                                </li>
                                <li className="row">
                                    <h3>服务方式</h3>
                                    <div className="list">
                                        <p>电话：0791-86365855</p>
                                        <p>传真：0791-86365855</p>
                                        <p>邮箱：andy@dxt.cn</p>
                                    </div>
                                </li>
                                <li className="row">
                                    <h3>申请表下载</h3>
                                    <div className="list">
                                        <p>附件1：监护人信息表</p>
                                        <p>附件2：被监护人信息表</p>
                                        <p>附件3：家长监护申请书</p>
                                        <a className="downloadNBtn" href={download}>打包下载</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="ParentsCare-right">
                            <div className="parentscare-right-group">
                                <h1 className="parentscare-right-list-title">系统介绍</h1>
                                <div className="ParentsCare-right-list-text">
                                    <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;“网络游戏未成年人家长监护工程”是一项有中华人民共和国文化部指导，多家网络游戏企业共同发起并参与实施，旨在加强家长对未成年人参与网络游戏的监护，引导未成年人健康、绿色参与网络游戏，和谐家庭关系的社会性公益行动.它提供了一种切实可行的方法，一种家长实施监控的管道，使家长纠正部分未成年子女沉迷游戏的行为成为可能。</p>
                                    <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;该项社会公益行动充分反映了中国网络游戏行业高度的社会责任感，对未成年玩家合法权益的关注及用实际行动营造和谐社会的愿望。</p>
                                </div>
                            </div>
                            <div className="parentscare-right-group">
                                <h1 className="parentscare-right-list-title">《未成年人健康参与网络游戏提示》</h1>
                                <div className="ParentsCare-right-list-text">
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;随着网络在青少年中的普及，未成年人接触网络游戏已经成为普遍现象。为保护未成年人健康参与游戏，在政府进一步加强行业管理的前提下，家长也应当加强监护引导。为此，我们为未成年人参与网络游戏提供以下意见：</p>
                                    <p>一、主动控制游戏时间。游戏只是学习、生活的调剂，要积极参与线下的各类活动，并让父母了解自己在网络游戏中的行为和体验。</p>
                                    <p>二、不参与可能耗费较多时间的游戏设置。不玩大型角色扮演类游戏，不玩有PK类设置的游戏。在校学生每周玩游戏不超过2小时，每月在游戏中的花费不超过10元。</p>
                                    <p>三、不要将游戏当作精神寄托。尤其在现实生活中遇到压力和挫折时，应多与家人朋友交流倾诉，不要只依靠游戏来缓解压力。</p>
                                    <p>四、养成积极健康的游戏心态。克服攀比、炫耀、仇恨和报复等心理，避免形成欺凌弱小、抢劫他人等不良网络行为习惯。</p>
                                    <p>五、注意保护个人信息。包括个人家庭、朋友身份信息，家庭、学校、单位地址，电话号码等，防范网络陷阱和网络犯罪。</p>
                                </div>
                            </div>
                            <div className="parentscare-right-group">
                                <h1 className="parentscare-right-list-title">家长监护申请流程</h1>
                                <div className="ParentsCare-right-list-text">
                                    <img src={shenqing} alt="" width="730" />
                                </div>
                            </div>
                            <div className="parentscare-right-group">
                                <h1 className="parentscare-right-list-title">家长监护服务说明</h1>
                                <div className="ParentsCare-right-list-text">
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;家长监护系统充分考虑家长的实际需求，当家长发现自己的孩子玩游戏过于沉迷的时候，由家长提供合法的监护人资质证明、游戏名称账号、以及家长对于限制强度的愿望等信息，可对处于孩子游戏沉迷状态的账号采取几种限制措施，解决未成年人沉迷游戏的不良现象，如限制未成年人每天玩游戏的时间区间和长度，也可以限制只有节假日才可以游戏，或者完全禁止。</p>
                                </div>
                            </div>
                            <div className="parentscare-right-group">
                                <h1 className="parentscare-right-list-title">家长监护服务进度查询</h1>
                                <div className="ParentsCare-right-list-text">
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;如果您已经申请家长监护服务，在服务期间，当您对需要提交的信息、处理结果有疑问，或者其他任何问题，您均可以在工作时间联系我们，我们将由专门负责的受理专员为您提供咨询解答服务，或者配合、指导您解决问题。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

    )
    }
}
export default ParentsCare;