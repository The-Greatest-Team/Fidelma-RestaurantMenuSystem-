import React from "react";
import EnterService from "../services/EnterService";

import enterPageVideo from "../video/burger2.mp4";

class EnterComponent extends React.Component{

    constructor(props){
        super(props)
    }

    testPost(){
        EnterService.postUsers();
    }

    render(){
        return(
            <>
                <video className = "backgroundVideo" src = {enterPageVideo} autoPlay loop muted/>
                <div className = "orderMain">
                    <div className="orderHead">
                        <img className="logo" src="/res/images/projectIcon.png" alt="logo" />
                    </div>
                    <div className = "tableNum">
                        <h4>Table No.</h4>
                        <input className = "tableInput"/>
                        <hr className = "orderSeparateLine"/>
                    </div>
                    <div className = "tableNum">
                        <h4>Phone Number</h4>
                        <input className = "tableInput"/>
                        <hr className = "orderSeparateLine"/>
                    </div>
                    <div className = "startOrder">
                        <button className = "orderButton" onClick={()=>this.props.history.push("/customer/mainMenu",this.props.location.state)} >Start Order</button>
                    </div>
                    
                </div>
            </>
        );
    }
}

export default EnterComponent