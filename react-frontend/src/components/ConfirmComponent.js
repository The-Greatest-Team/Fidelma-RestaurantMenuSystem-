import React from "react";
import ConfirmService from "../services/ConfirmService";

class ConfirmComponent extends React.Component{

    constructor(props){
        super(props)
    }

    testPost(){
        ConfirmService.postUsers();
    }

    render(){
        return(
            <>
                <div>
                    <div className = "confirmHead">
                        <img className = "orderBackButton" src = "/res/images/back.svg" />
                        <h4>Fidelma</h4>
                    </div>
                    <div className = "orderTitle">
                        <div className = "orderTableNum">
                            <h4><strong>Table No.</strong></h4>
                            <h4>12</h4>
                        </div>
                        <div className = "orderPhoneNum">
                            <h4>Phone Numebr:</h4>
                            <h4>0412345678</h4>
                        </div>
                    </div>
                    <hr className = "confirmSeparateLine"/>
                    <div className = "orderDetail">
                        <div className = "grid-container">
                            <div className = "item1">
                                <img className = "gridPic" src="/res/images/beef3.jpg"/>
                            </div>
                            <div className = "item2"><strong>Classic Beef Burger</strong></div>
                            <div className = "item3">add-on details: xxxx</div>
                            <div className = "item4"><strong>x1</strong></div>
                            <div className = "item5"><strong>$11.8</strong></div>
                        </div>
                        <div className = "grid-container">
                            <div className = "item1">
                                <img className = "gridPic" src="/res/images/beef3.jpg"/>
                            </div>
                            <div className = "item2"><strong>Classic Beef Burger</strong></div>
                            <div className = "item3">add-on details: xxxx</div>
                            <div className = "item4"><strong>x1</strong></div>
                            <div className = "item5"><strong>$11.8</strong></div>
                        </div>
                        <div className = "grid-container">
                            <div className = "item1">
                                <img className = "gridPic" src="/res/images/beef3.jpg"/>
                            </div>
                            <div className = "item2"><strong>Classic Beef Burger</strong></div>
                            <div className = "item3">add-on details: xxxx</div>
                            <div className = "item4"><strong>x1</strong></div>
                            <div className = "item5"><strong>$11.8</strong></div>
                        </div>
                        <div className = "addComment">
                            <div className = "commentTitle">
                                <h4>Put additional comment here:</h4>
                            </div>   
                            <input className = "orderComment" />
                        </div>
                    </div>
                    <div className = "finishOrder">
                        <div className = "totalCost">
                            <h4><strong>Total:</strong></h4>
                            <h4><strong>$70.8</strong></h4>
                        </div> 
                        <button className = "finishOrderButton">Order Now</button>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default ConfirmComponent