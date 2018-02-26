import React,{ Component } from 'react';
class Test extends Component{

    constructor () {
        super();
        this.sendSword = this.sendSword.bind(this);
        this.state = {count: 0 };
    }

    //componentDidMount(){
    //    this.sendSword()
    //}

    sendSword=()=>{
        //这里用回调，setState之后再调用父类的方法进行设置
        this.setState({count:this.state.count + 10}, () => {
            // debugger;

            console.log('this.state.count',this.state.count);
            this.props.getSwordCount2();  //子类调用父类方法的正确写法
            // this.props.getSwordCount2;  //这种写法不会调用的
            // this.props.getSwordCount();  //这种写法会报错的
        });
    }


    render(){
        return(

            <button onClick={this.sendSword}>{this.props.buttonName}</button>
        )
    }
}
export default Test;