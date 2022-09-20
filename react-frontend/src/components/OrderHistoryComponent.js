import React from "react";
import OrderHistoryService from "../services/OrderHistoryService";

class OrderHistoryComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {foodsInCart : [], foodsCountInCart : []}
    }


    render(){
        return(
            <>
                <div>
                    <div className = "historyHead">
                        <img className = "historyBackIcon" src="/res/images/back.svg" onClick={()=>window.location.href="/staff/dashboard"}/>
                        <h4>Order Summary</h4>
                        <hr className = "historySeparateLine"/>
                    </div>

                </div>
            </>
        );
    }

}

export default OrderHistoryComponent