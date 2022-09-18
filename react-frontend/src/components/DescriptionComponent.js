import React from "react";
import DescriptionService from "../services/DescriptionService";

class DescriptionComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            quantity: 1,
            foods : [], 
            foodsInCart : [], 
            foodsCountInCart : [], 
            cartOpen : false
        }
    }

    testPost(){
        DescriptionService.postUsers();
    }

    removeDish(){
        if(this.state.quantity > 0){
            this.setState({
                quantity:this.state.quantity - 1
            });
        }
        
    }

    addDish(){
        this.setState({
            quantity:this.state.quantity + 1
        });
    }

    componentDidMount(){
        console.log(this.props.location.state[2])
    }

    render(){
        return(
            <>
                <div>
                    <div className = "dishHead">
                        <img className = "orderBackButton" src="/res/images/arrow.png" alt = "back" 
                        onClick={()=>this.props.history.push("/customer/menu/chicken",this.props.location.state)}/>
                        <h4>Classic Beef Burger</h4>
                    </div>
                    <div className = "photoContainer">
                        <img className = "dishPhoto" src="/res/images/beef3.jpg"/>
                    </div>
                    <hr className = "dishSeparateLine"/>
                    <div className = "descriptionContainer">
                        <div className = "descriptionTitle">
                            <h4><strong>Classic Beef Burger</strong></h4>
                            <h4 className = "dishPrice">$11.80</h4>
                        </div> 
                        <div className = "descriptionContent">
                            <p>Grain-fed beef patties with fresh tomatoes, onions and lettuce.</p>
                        </div>
                    </div>
                    <div className = "dishIngredient">
                        <h4 className = "descriptionTitle">Ingredients:</h4>
                        <p className = "allIngredient">Beef patties, Onions, Fresh tomato, Lettuce, Salts</p>
                    </div>
                    <div className = "dishQuantity">
                        <img className = "removeDish" src = "/res/images/back.svg" onClick = {this.removeDish.bind(this)}/>
                        <div className = "currQuantity">{this.state.quantity}</div>
                        <img className = "addDish" src = "/res/images/back.svg" onClick = {this.addDish.bind(this)}/>
                    </div>
                    <div className = "addToOrder">
                        <img src = "/res/images/shoppingCart.png"/>
                        <button className = "addToOrderButton" 
                        onClick={()=>this.props.history.push("/customer/menu/chicken",this.props.location.state)}>Add to order</button>
                    </div>
                </div>
            </>
        );
    }
}

export default DescriptionComponent