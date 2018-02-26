import React,{ Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import $ from 'jquery';
import Swiper from 'swiper';
//import 'jquery.luara.0.0.1.min';
import one from '../../Image/Master/001.jpg';
import two from '../../Image/Master/002.jpg';
import three from '../../Image/Master/003.jpg';
import four from '../../Image/Master/004.jpg';
import five from '../../Image/Master/gsbackground.jpeg';
import '../../App/Public.css';
import './index.css'
import '../../../node_modules/swiper/dist/css/swiper.min.css';
class Index extends Component{
    constructor(props){
        super(props);
    }


    componentDidMount() {
        //轮播设置
        //大轮播图
        var mySwiper1=new Swiper ('#swiper1', {
            direction: 'horizontal',
            loop: true,

            //自动切换
            autoplay:true,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination'
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar'
            }
        });

        //小轮播图
        var mySwiper2 = new Swiper ('#swiper2', {
            autoplay: {
                disableOnInteraction: false
            },
            effect : 'coverflow',
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination'
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        })
    }

    hhh=()=>{
        console.log(1)
    }


    render(){
        return(
            <div className="jxjt-index">

                <div className="swiper-container" id="swiper1">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src={one}/></div>
                        <div className="swiper-slide"><img src={two}/></div>
                        <div className="swiper-slide"><img src={three}/></div>
                    </div>
                    {/*分页器*/}
                    <div className="pagination1 swiper-pagination"></div>

                    {/*导航按钮*/}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                    {/*滚动条*/}
                    <div className="swiper-scrollbar"></div>
                </div>


                <div className="pageA">

                    {/*公司简介*/}
                    <div className="yx_part_yx_part3">
                        <div className="CompanyCenter">
                            <h1 className="CompanyCenter-title">公司简介</h1>
                            <div className="CompanyImg">
                                <img  src={five} />
                            </div>
                            <div className="CompanyText">
                                <p className="intro_tittle">全球领先的互联网游戏服务商</p>
                                <p>江西江通文化传媒有限公司是一家专注于移动网络游戏为核心业务的生态型互联网公司，主要经营棋牌游戏研发、H5游戏、移动APP研发、小程序研发、手机游戏、移动增值业务推广、平台运营及手游研发、移动互联网推广研发等业务，涵盖短信彩信、IVR、手机视频、手机动漫、聚合支付业务、网盟整合业务、内容联盟等业务。公司秉承“通过互联网，让生活更美好”的理念，以自身大数据云平台为强大支撑，以精细化运营提升客户价值，致力成为全球领先的移动互联网营销方案服务商，凭借移动广告投放平台，第三方支付平台及自主研发团队，努力打造成为共享全球流量的第一平台。</p>
                            </div>
                        </div>
                    </div>

                </div>l

                <div className="smallBanner">
                    <h1 className="smallBanner-title">精品游戏及游戏介绍</h1>
                {/*底部轮播图*/}
                <div className="swiper-container" id="swiper2">
                    <div className="swiper-wrapper">
                        <a className="one swiper-slide"></a>
                        <a className="two swiper-slide"></a>
                    </div>

                    {/*分页*/}
                    <div className="pagination2 swiper-pagination"></div>

                    {/*导航*/}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                    </div>



            </div>
        )
    }
}
export default Index;