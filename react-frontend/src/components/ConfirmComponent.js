import Axios from "axios";
import React from "react";
import ConfirmService from "../services/ConfirmService";
import axios from "axios";

class ConfirmComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {foodsInCart : [], tableNum : '', phone : '',orderComment:''}
        this.nameHandler = this.nameHandler.bind(this);
        this.saveOrder = this.saveOrder.bind(this);

    }

    nameHandler = (event) => {
        this.setState({orderComment:event.target.value});
    }

    componentDidMount(){
        console.log(this.props.location.state)
        if (typeof(this.props.location.state[2]) != "undefined"){
            this.setState({foodsInCart : this.props.location.state[2]})
        }
        this.setState({tableNum :  this.props.location.state[0]})
        this.setState({phone : this.props.location.state[1]})
    }

    backToMainMenu(){
        this.props.history.push("/customer/mainMenu",[this.state.tableNum, this.state.phone, this.state.foodsInCart])
    }

    calculateTotalPrice(){
        let totalPrice = 0;
        for (let i = 0; i < this.state.foodsInCart.length; i++){
            let dishInCart = this.state.foodsInCart[i]
            totalPrice += dishInCart.price * dishInCart.quantity
        }
        return totalPrice.toFixed(1)
    }

    saveOrder = (e) => {
        e.preventDefault();
        // let order = {
        //     tableNum
        // }
        // axios.post("http://localhost:8080/customer/orderConfirm",).then()
        console.log(this.state.foodsInCart);
        let cart = {};
        for (var i = 0; i < this.state.foodsInCart.length; i++) {
            cart[this.state.foodsInCart[i].id] = this.state.foodsInCart[i].quantity;
        }
        let order = {
            tableNumber : this.state.tableNum,
            phoneNumber : this.state.phoneNumber,
            name : this.state.orderComment,
            cart
        }
        console.log("order=> " + JSON.stringify(order));
        axios.post("http://localhost:8080/customer/orderConfirm",).then( (res) => {
            this.props.history.push("/submitPage",this.props.location.state);
            }
        )
        
    }

    render(){
        return(
            <>
                <div>
                    <div className = "confirmHead">
                        <img className = "orderBackButton" src = "/res/images/back.svg" onClick={() => this.backToMainMenu()}/>
                        <h4>Fidelma</h4>
                    </div>
                    <div className = "orderTitle">
                        <div className = "orderTableNum">
                            <h4><strong>Table No.</strong></h4>
                            <h4>{this.state.tableNum}</h4>
                        </div>
                        <div className = "orderPhoneNum">
                            <h4>Phone Numebr:</h4>
                            <h4>{this.state.phone}</h4>
                        </div>
                    </div>
                    <hr className = "confirmSeparateLine"/>
                    <div className = "orderDetail">
                        {this.state.foodsInCart.map((dish) =>(
                            <div className = "grid-container" key = {dish.id}>
                                <div className = "item1">
                                    <img className = "gridPic" src="/res/images/beef3.jpg"/>
                                </div>
                                <div className = "item2"><strong>{dish.name}</strong></div>
                                <div className = "item3">add-on details: xxxx</div>
                                <div className = "item4"><strong>x{dish.quantity}</strong></div>
                                <div className = "item5"><strong>${(dish.price*dish.quantity).toFixed(1)}</strong></div>    
                            </div>
                        ))}
                        <div className = "addComment">
                            <div className = "commentTitle">
                                <h4>What is your name?</h4>
                            </div>   
                            <form>
                                <input className = "orderComment" type = "text" name = "orderInput"
                                value = {this.state.orderComment} onChange={this.nameHandler}/>
                            </form>
                        </div>
                    </div>
                    <div className = "finishOrder">
                        <div className = "totalCost">
                            <h4><strong>Total:</strong></h4>
                            <h4><strong>${this.calculateTotalPrice()}</strong></h4>
                        </div> 
                        <button className = "finishOrderButton" onClick = {this.saveOrder} >Order Now</button>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default ConfirmComponent