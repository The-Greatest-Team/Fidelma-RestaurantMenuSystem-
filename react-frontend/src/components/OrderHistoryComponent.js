import React from "react";
import OrderHistoryService from "../services/OrderHistoryService";
import OrderDetailComponent from "./OrderDetailComponent";

class OrderHistoryComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            orders: [],
            orderId:'',
            show:false,
            detail:{}
        }
    }

    componentDidMount() {
        OrderHistoryService.getOrders().then((res) => {
            this.setState({orders:(res.data)});
            console.log(this.state.orders);
        })
    }

    handleClick (orderDetail,id,e){
        e.stopPropagation();
        this.setState({
            show:true,
        });
        this.setState({orderId:id});
        this.setState({detail:orderDetail});
    }

    close = () =>{
        this.setState({
            show:false,
        });
        
    }

    orderCompleted() {

    }

    deleteOrder(id) {
        OrderHistoryService.deleteOrder(id).then(
            res => {
                this.setState({orders:this.state.orders.filter(order => order.id !== id)})
            }
        )
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
                                    <th>Table No.</th>
                                    <th>Phone Number</th>
                                    <th>Shipping Status</th>
                                    <th>Order Details</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.orders.map((order) => (
                                    <tr>
                                        <td>{order.tableNumber}</td>
                                        <td>{order.phoneNumber}</td>
                                        <td className = "preparing"><strong>{order.orderStatus}</strong> <button onClick={()=>this.orderCompleted()}>Complete</button></td>
                                        <td><button onClick={e => this.handleClick(order.cart,order.id,e)}> Check Details</button></td>
                                        <td><button onClick = {() => this.deleteOrder(order.id)}> Delete </button></td>
                                        {this.state.show && <OrderDetailComponent close = {this.close} detail = {this.state.detail}/>}
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }

}

export default OrderHistoryComponent