import React,{ Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap';
import './ContactUs.css';

class ContactUs extends Component{
    componentDidMount () {

    }


    render(){
        return(
        <div>
            <div className="ContactUs-img"></div>

            <div className="contactUs-main">
                <div className="contactUs-map">
                    <Map center={{lng: 115.8598522927, lat: 28.6871904275}} zoom="13">
                        <Marker position={{lng: 115.8598522927, lat: 28.6871904275}} />
                        <NavigationControl />
                        <InfoWindow position={{lng: 115.8598522927, lat: 28.6871904275}} text="江西江通文化传媒有限公司" />
                    </Map>
                </div>
                <div className="contact-text">
                    <h1>联系方式</h1>
                    <p>江西江通文化传媒有限公司</p>
                    <p>江西省南昌市红谷滩新区红谷中大道789号江信国际花园18号楼1215室(第12层)</p>
                    <p>电话:0791-86365855</p>
                    <p>传真:0791-86365855</p>
                </div>
            </div>

            <div className="contactUs-footer">
                <div className="cousult">业务合作</div>
                <i className="line"></i>
                <div className="contactGrop">
                    <div className="contactItem">
                        <p className="listTitle">联系人</p>
                        <p className="listContent">张经理</p>
                    </div>
                    <div className="contactItem">
                        <p className="listTitle">联系QQ</p>
                        <p className="listContent">2881089622</p>
                    </div>
                    <div className="contactItem">
                        <p className="listTitle">Emai</p>
                        <p className="listContent">andy@dxt.cn</p>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}
export default ContactUs;