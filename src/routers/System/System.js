import React,{Component} from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import '../Dispute/Dispute.css';
class System extends Component{
    render(){
        return(
            <div className="Dispute-wrap">
                <div className="Dispute-main">
                    <div className="Dispute-group">
                        <h1 className="Dispute-title" style={{border: 'none',marginBottom: '30px'}}>公司官方网站管理制度</h1>
                    </div>
                    <div className="Dispute-group">
                        <h1 className="Dispute-title">第一章  总 则</h1>
                        <div className="Dispute-text">
                            <p><strong>第一条 </strong>为了进一步加强公司官方网站的管理与维护，充分发挥网站的作用，促进公司内外部信息交流与沟通，及时掌握市场信息，拓展经营视野，提高经营管理水平，扩大公司对外知名度，提升公司外部形象，特制定本规定。</p>
                        </div>
                    </div>
                    <div className="Dispute-group">
                        <h1 className="Dispute-title">第二章  公司网站的管理机构及职责</h1>
                        <div className="Dispute-text">
                            <p><strong>第二条 </strong>公司信息部设专职网站管理员，负责公司网站的信息收集汇总、日常管理与维护，负责网络版面设计、调整、改换栏目设置、内容更新、新闻发布以及其他信息材料的管理、录入与发布。</p>
                            <p><strong>第三条 </strong>信息部负责网站防病毒、防黑客攻击以及为网站的正常运行日常维护提供技术支持与保障。</p>
                            <p><strong>第四条 </strong>人力资源部负责网站更新工作的质量和实效性的监督考核。</p>
                        </div>
                    </div>
                    <div className="Dispute-group">
                        <h1 className="Dispute-title">第三章  网站版面与栏目更新</h1>
                        <div className="Dispute-text">
                            <p><strong>第五条 </strong>网站主页面原则上每年进行一次审定或改版，改版内容包括页面的动画、颜色、栏目组合等。</p>
                            <p><strong>第六条 </strong>各版块栏目的表现形式在不脱离框架特色的前提下，每季度至少变化一次。</p>
                            <p><strong>第七条 </strong>动态版块、动态栏目的内容每月至少更新一次，突出时效特色，如遇重大事件应于事件结束后15日内发布。</p>
                            <p><strong>第八条 </strong>产品简介、成功案例等栏目根据产品和客户情况半月报审修改，页面应适应产品特色和客户特点；</p>
                            <p><strong>第九条 </strong>标题新闻、浮动广告等小栏目根据需要每周更新，应具备动感和多样形式；</p>
                            <p><strong>第十条 </strong>页面改版由网站管理员预先设计出方案，报人力资源总监审核、呈送董事长审批后执行。</p>
                            <p><strong></strong></p>
                            <p><strong></strong></p>
                        </div>
                    </div>
                    <div className="Dispute-group">
                        <h1 className="Dispute-title">第四章  信息的搜集、审核与发布</h1>
                        <div className="Dispute-text">
                            <p><strong>第十一条 </strong>网站管理员负责网站内容信息的搜集和整理，各部门主管或专人根据部门职能及时向网站管理员提供最新相关信息。</p>
                            <p className="indent">1、重大事务、外事活动、访问活动、上级领导来公司考察活动、公司领导重要出访活动、项目管理、工程实施等信息由公共事务部提供.</p>
                            <p className="indent">2、商务活动、市场动态、合同签订、营销政策发布、客户服务等信息由营销部提供。</p>
                            <p className="indent">3、质量控制、产品介绍、新产品开发、新技术应用等信息由质量技术部提供。</p>
                            <p className="indent">4、人力资源、企业文化等信息由人力资源部提供；</p>
                            <p><strong>第十二条 </strong>网站管理员及时对各部门提供的信息，进行统一分类、整理、汇总、发布，按下列程序报审批准后发布：</p>
                            <p><strong></strong></p>
                            <p className="indent">1、各类待发布图片、文字发布前，经由该素材提供部门审核同意后，方可发布。</p>
                            <p className="indent">2、一般性的企业新闻类信息需经人力资源部审核后方可发布。</p>
                            <p className="indent">3、公司重要事项、重要商务活动，如重要合作信息、重大合同信息、公司及领导外事活动、重大访问、来访活动等重要信息由董事长审核后方可发布。</p>
                        </div>
                    </div>
                    <div className="Dispute-group">
                        <h1 className="Dispute-title">第五章  网站日常管理</h1>
                        <div className="Dispute-text">
                            <p><strong>第十三条 </strong>任何人未经批准，不得随意发布信息或更改网站页面版式及内容。</p>
                            <p><strong>第十四条 </strong>网站密码由公司网站管理员负责控制，不准向任何部门或个人泄漏。</p>
                            <p><strong>第十五条 </strong>网站管理员发现公司网站被病毒、黑客袭击或发现网站运行不正常，应及时应对处理。</p>
                            <p><strong>第十六条 </strong>任何人不得在公司网站上发布违反国家法律、法规、有损国家利益、公司形象以及有悖道德的言论。</p>
                            <p><strong>第十七条 </strong>任何人不得利用公司网站传播反动、淫秽、不道德以及其他违反国家法律、社会公德的信息。</p>
                            <p><strong>第十八条 </strong>任何人不得利用公司网站发布虚假信息或违反公司规定、影响公司形象、泄露公司机密的信息。</p>
                            <p><strong>第十九条 </strong>网站管理员一经发现有上述13~18条所示内容的信息，必须立即予以删除，并追究当事者的行政或法律责任。</p>
                            <p><strong>第二十条 </strong>网站管理员应按本规定每日对公司网站进行管理、维护与更新。</p>
                        </div>
                    </div>
                    <div className="Dispute-group">
                        <h1 className="Dispute-title">第六章  附 则</h1>
                        <div className="Dispute-text">
                            <p><strong>第二十一条 </strong>本规定解释权、修订权归人力资源部。</p>
                            <p><strong>第二十二条 </strong>本规定自发布之日起执行。</p>
                        </div>
                    </div>


                </div>

            </div>

        )
    }
}
export default System