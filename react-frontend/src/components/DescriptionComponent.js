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
        console.log(this.props.location.state[2]);
        console.log(Object.keys(this.props.location.state[2].components));
        if (typeof(this.props.location.state) != "undefined"){
            this.state.foodsInCart = this.props.location.state[0]
            this.state.foodsCountInCart = this.props.location.state[1]
        }

    }

    showCart(){
        console.log(this.state.foodsInCart)
        console.log(this.state.foodsCountInCart)
        // let background = document.getElementById("normlaStateMenu")
        // background.style.color = 707070
        this.state.cartOpen = true

    }

    storeInCart(dish){ 
        let storeDish = {
            id : dish.id,
            name : dish.name,
            price : dish.price
        }
        let cart = this.state.foodsInCart
        let foodCounts = this.state.foodsCountInCart
        let foodIndexInCart = cart.findIndex(x => x.id == dish.id) 
        if (foodIndexInCart == -1){
            cart.push(storeDish)
            foodCounts.push(1)
        } else {
            foodCounts[foodIndexInCart] += this.state.quantity
        }
    }

    backToTypeMenu(){
        this.props.history.push("/customer/menu/chicken",[this.state.foodsInCart, this.state.foodsCountInCart])
    }

    render(){
        return(
            <>
                <div>
                    <div className = "dishHead">
                        <img className = "orderBackButton" src="/res/images/arrow.png" alt = "back" 
                        onClick={()=>this.backToTypeMenu()}/>
                        <h4>{this.props.location.state[2].name}</h4>
                    </div>
                    <div className = "photoContainer">
                        <img className = "dishPhoto" src="/res/images/beef3.jpg"/>
                    </div>
                    <hr className = "dishSeparateLine"/>
                    <div className = "descriptionContainer">
                        <div className = "descriptionTitle">
                            <h4><strong>{this.props.location.state[2].name}</strong></h4>
                            <h4 className = "dishPrice">${this.props.location.state[2].price}</h4>
                        </div> 
                        <div className = "descriptionContent">
                            <p>{this.props.location.state[2].description}</p>
                        </div>
                    </div>
                    <div className = "dishIngredient">
                        <h4 className = "descriptionTitle">Ingredients:</h4>
                        <div className = "allIngredient">{Object.keys(this.props.location.state[2].components).join(', ')}</div>
                    </div>
                    <div className = "dishQuantity">
                        <img className = "removeDish" src = "/res/images/back.svg" onClick = {this.removeDish.bind(this)}/>
                        <div className = "currQuantity">{this.state.quantity}</div>
                        <img className = "addDish" src = "/res/images/back.svg" onClick = {this.addDish.bind(this)}/>
                    </div>
                    <div className = "addToOrder">
                        <img src = "/res/images/shoppingCart.png" onClick={() => this.showCart()}/>
                        {/* <button className = "addToOrderButton" 
                        onClick={()=>this.props.history.push("/customer/menu/chicken",this.props.location.state)}>Add to order</button> */}
                        <button className = "addToOrderButton" 
                        onClick={() => this.storeInCart(this.props.location.state[2])}>Add to order</button>


                    </div>
                </div>
            </>
        );
    }
}

export default DescriptionComponent