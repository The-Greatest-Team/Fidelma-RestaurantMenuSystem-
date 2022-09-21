import React from "react";
import ConfirmService from "../services/ConfirmService";

class ConfirmComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            quantity: 1,
            foods : [], 
            type : null,
            foodsInCart : [], 
            foodsCountInCart : [], 
            cartOpen : false
        }
    }

    testPost(){
        ConfirmService.postUsers();
    }

    componentDidMount(){
        console.log(this.props.location.state);
        console.log(this.props.location.state[0]);
        console.log(this.state.foodsInCart);
    }

    backToTypeMenu(){
        let type = this.props.location.state[this.props.location.state.length-1]
        this.props.history.push("/customer/menu/chicken",[this.props.location.state[0], type])
    }

    calculateTotalPrice(){
        let totalPrice = 0;
        for (let i = 0; i < this.props.location.state[0].length; i++){
            let dishInCart = this.props.location.state[0][i]
            totalPrice += dishInCart.price * dishInCart.quantity
        }
        return totalPrice
    }

    render(){
        return(
            <>
                <div>
                    <div className = "confirmHead">
                        <img className = "orderBackButton" src = "/res/images/back.svg" onClick={() => this.backToTypeMenu()}/>
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
                        {this.props.location.state[0].map((dish) =>(
                            <div className = "grid-container" key = {dish.id}>
                                <div className = "item1">
                                    <img className = "gridPic" src="/res/images/beef3.jpg"/>
                                </div>
                                <div className = "item2"><strong>{dish.name}</strong></div>
                                <div className = "item3">add-on details: xxxx</div>
                                <div className = "item4"><strong>x{dish.quantity}</strong></div>
                                <div className = "item5"><strong>${dish.price*dish.quantity}</strong></div>    
                            </div>
                        ))}
                        {/* <div className = "grid-container">
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
                        </div> */}
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
                            <h4><strong>${this.calculateTotalPrice()}</strong></h4>
                        </div> 
                        <button className = "finishOrderButton" onClick={()=>this.props.history.push("/submitPage",this.props.location.state)}>Order Now</button>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default ConfirmComponent