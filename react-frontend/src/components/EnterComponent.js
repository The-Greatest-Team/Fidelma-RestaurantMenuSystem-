import React from "react";
import EnterService from "../services/EnterService";

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
                <div className = "orderMain">
                    <div className="orderHead">
                        <img className="logo" src="/res/images/projectIcon.png" alt="logo" />
                    </div>
                    <div className = "tableNum">
                        <h4>Table No.</h4>
                        <hr className = "orderSeparateLine"/>
                    </div>
                    <div className = "tableNum">
                        <h4>Phone Number</h4>
                        <hr className = "orderSeparateLine"/>
                    </div>
                    <div className = "startOrder">
                        <button className = "orderButton">Start Order</button>
                    </div>
                    
                </div>
            </>
        );
    }
}

export default EnterComponent