import React,{ Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import './Dispute.css';
class Dispute extends Component{
    render(){
        return(
            <div className="Dispute-wrap">
                <div className="Dispute-main">
                    <div className="Dispute-group">
                        <h1 className="Dispute-title">一、江西江通文化传媒有限公司纠纷处理原则</h1>
                        <div className="Dispute-text">
                            <p>1、用户权益第一；</p>
                            <p>2、耐心对待每一位用户；</p>
                            <p>3、凡是查证属实的问题，我司都将按照现行法律规定给予用户必要的补偿。</p>
                        </div>
                    </div>
                    <div className="Dispute-group">
                        <h1 className="Dispute-title">二、江西江通文化传媒有限公司处理纠纷基本步骤</h1>
                        <div  className="Dispute-text">
                            <p>1、遇到用户意见、建议、反馈、投诉等，第一时间进行问题的收集和整理；</p>
                            <p>2、可以第一时间处理的咨询类问题，客服将在第一时间对用户进行讲解和解释；</p>
                            <p>3、遇到用户反馈的产品问题，将问题收集后，反馈到运营中心，通过运营中心与公司其他部门的沟通，拿出解决方案，告知客服，一般类问题客服人员在24小时对用户进行主动答复，重要类问题客服人员在48小时内对用户进行答复；</p>
                            <p>4、遇到投诉类问题，客服第一时间收集和反馈，经过运营中心与相关部门的沟通后，给出处理方案（如：补偿、退还、提供其他服务等），告知客服，客服人员在48小时内对用户进行答复、告知和处理；</p>
                            <p>5、遇到处理方案用户不满意的纠纷类问题，客服人员在答复告知后，用户不接受处理方案时，我司将安排绿色通道，由客服经理与用户进行直接沟通（电话、邮件、QQ等），进行专项处理，给与玩家的补偿方案将按处理时间的延长，增加对用户的补偿，直到确保用户满意；</p>
                            <p>6、江西江通文化传媒有限公司客服电话：0791-86365855</p>
                        </div>
                    </div>
                    <div className="Dispute-group">
                        <h1 className="Dispute-title">三、用户与江西江通文化传媒有限公司之间纠纷处理方式</h1>
                        <div className="Dispute-text">
                            <p>1.如本网络游戏用户对（江西江通文化传媒有限公司）的服务有任何异议的，可以向江西江通文化传媒有限公司的客服人员投诉并举证。查证属实的，江西江通文化传媒有限公司将立即更正并按照现行法律规定给予用户必要的补偿。</p>
                            <p>2．如本网络游戏用户对（江西江通文化传媒有限公司）的服务有任何异议的，也可以向双方约定（具体参见《服务协议》）江西江通文化传媒有限公司的公司所在地人民法院提起诉讼。</p>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
export default Dispute;