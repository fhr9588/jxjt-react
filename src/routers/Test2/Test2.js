import React,{ Component } from 'react';
class Test2 extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state={index:null};
    }
    handleClick=()=> {
        this.setState({index:this.state.index+1},()=>{
            if(this.state.index>=8){
                this.setState({index:0})
            }
            console.log(this.state.index);
            this.props.handleClick2();
        })
    };
    render(){
        return(
            <button onClick={this.handleClick}>{this.props.Test2ButtonName}</button>
        )
    }
}
export default Test2;