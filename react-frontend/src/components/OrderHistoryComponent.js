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
                    <div className="historyTableContainer">
                        <table className = "historyTable">
                            <thead>
                                <tr>
                                    <th>Order No.</th>
                                    <th>Order Time</th>
                                    <th>Table No.</th>
                                    <th>Ordered By</th>
                                    <th>Shipping Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>123123</td>
                                    <td>21:22 20th Sept</td>
                                    <td>16</td>
                                    <td>Jack</td>
                                    <td className = "preparing"><strong>Preparing</strong></td>
                                </tr>
                                <tr>
                                    <td>142563</td>
                                    <td>16:30 18th Sept</td>
                                    <td>14</td>
                                    <td>Mike</td>
                                    <td className = "shipped"><strong>Shipped</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }

}

export default OrderHistoryComponent