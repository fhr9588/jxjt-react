import React,{ Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import './GameIntroduced.css';
import pjjp from '../../Image/Master/pjjp.png';
import download from '../../Image/Master/download.jpg';
import pjjpIndex from '../../Image/Master/pjjpIndex.png';
import pjjpScenc from '../../Image/Master/pjjpScenc.png';
import effect1 from '../../Image/Master/effect1.png';
import effect2 from '../../Image/Master/effect2.png';
import effect3 from '../../Image/Master/effect3.png';
class GameIntroduced extends Component{
    render(){
        return(
            <div className="Dispute-wrap">
                <div className="Dispute-main">
                    <div className="Dispute-group">
                        <h1 className="Dispute-title">游戏产品介绍</h1>
                        <div className="Dispute-text">
                            <p className="indent">“鄱郡精牌及趣麻将”是一款针对鄱阳麻将玩法定制开发，专为鄱阳麻将爱好者精心研发策划制定，结合地区区域性特色玩法开发。以鄱阳麻将为主题，结合主流的多种麻将玩法，致力于让玩家享受最纯正的麻将休闲鄱阳精牌麻将游戏。</p>
                        </div>
                    </div>
                    <div className="imgGroup lrImg clearfix">
                        <img className="fl" src={pjjp} alt="" width="260" height="260" />
                            <img className="fr imgRadius"  src={download} alt="" width="260" height="260" />
                    </div>
                    <div className="Dispute-group">
                        <h1 className="Dispute-title">游戏特色</h1>
                        <div className="Dispute-text">
                            <p className="indent">鄱郡精牌最大的特色是“字”可以任意吃、碰、抗。现在的鄱阳翻精麻将只不过在原来规则上加了个精，打发则完全一样。有了精牌，以前很难胡的，像四归四，小幺，十三幺，绿一色，黑一色，全字，有了精牌就容易胡了。</p>
                        </div>
                    </div>
                    <div className="imgGroup" style={{textAlign:'center'}}>
                        <img src={pjjpIndex} alt="" width="700" height="400" />
                            <img src={pjjpScenc} alt="" width="700" height="400" />
                    </div>
                    <div className="Dispute-group">
                        <h1 className="Dispute-title">游戏规则</h1>
                        <div className="Dispute-text">
                            <p className="indent">鄱阳麻将俗称“四底开胡”。先介绍下鄱阳麻将桌上的术语</p>
                            <p className="indent">“幺”包括：万索饼全部的一和九和字，例如一饼，九索，东风，红中等都是幺。</p>
                            <p className="indent">“段段”就是所有二至八的万索饼。</p>
                            <p className="indent">“字”包括东、南、西、北风（瓜）中、发、白。</p>
                            <p className="indent">“宝”也称“花”包括春夏秋冬菊兰竹梅</p>
                            <p className="indent">“精”就是翻起来牌加一，例如翻出来的是1万，2万就是精。什么牌都能算</p>
                            <p className="indent">“下水”指有吃碰杠，暗杠除外，“不靠”指两张牌不能吃或者碰，“丘”指123万，或者111万就是一丘；“自摸”指胡自己的牌，“放冲”指胡别人的牌，“平胡”手中的牌有4丘一对，无一种牌型算平胡，就是门前清，鄱阳麻将中平胡是不能“下水”不能点炮胡的，只能自摸。必须有其他牌型才能点炮胡下去。“牢胡”指手中的牌没有胡而胡牌。</p>
                            <p className="indent"><strong>鄱阳麻将最大特点是“字”可以任意吃、碰、扛。</strong>　鄱阳麻将最大特点是“字”可以任意吃、碰、扛。</p>
                        </div>
                    </div>
                    <div className="imgGroup" style={{textAlign:'center'}}>
                        <img src={effect1} alt="" />
                            <img src={effect2} alt="" />
                                <img src={effect3} alt="" />
                    </div>
                    <div className="download">
                        <h3 className="download-title">下载地址:</h3>
                        <a  className="download-lacation" href="">点击此处下载游戏</a>
                    </div>
                </div>

            </div>

    )
    }
}
export default GameIntroduced;