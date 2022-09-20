import React from "react";
import EnterService from "../services/EnterService";

import enterPageVideo from "../video/burger2.mp4";

class EnterComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            tableNum:'1',
            phone:'',
        }
        this.tableNumHandler = this.tableNumHandler.bind(this);
        this.phoneHandler = this.phoneHandler.bind(this);
    }
    
    testPost(){
        EnterService.postUsers();
    }

    componentDidMount(){
        console.log(this.state.tableNum)
    }

    tableNumHandler = (event) =>{
        this.setState({tableNum:event.target.value});
    }

    phoneHandler = (event) =>{
        this.setState({phone:event.target.value});
    }

    save(){
        console.log(this.state.tableNum)
    }
    render(){
        return(
            <>
                <video className = "backgroundVideo" src = {enterPageVideo} autoPlay loop muted/>
                <div className = "orderMain">
                    <div className="orderHead">
                        <img className="logo" src="/res/images/projectIcon.png" alt="logo" />
                    </div>
                    <form>
                    <div className = "tableNum">
                        <h4>Table No.</h4>
                        <input className = "tableInput" value = {this.state.tableNum} onChange={this.tableNumHandler}/>
                        <hr className = "orderSeparateLine"/>
                    </div>
                    <div className = "tableNum">
                        <h4>Phone Number</h4>
                        <input className = "tableInput"onChange={this.phoneHandler} onChange={this.phoneHandler}/>
                        <hr className = "orderSeparateLine"/>
                    </div>
                    <div className = "startOrder">
                        {/* <button className = "orderButton" onClick={()=>this.props.history.push("/customer/mainMenu",this.props.location.state)} >Start Order</button> */}
                        <button className = "orderButton" onClick = {this.save()}>Start Order</button>
                    </div>
                    </form>
                    
                </div>
            </>
        );
    }
}

export default EnterComponent