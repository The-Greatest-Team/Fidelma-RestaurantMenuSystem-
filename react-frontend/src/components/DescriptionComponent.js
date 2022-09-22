import React from "react";
import DescriptionService from "../services/DescriptionService";

class DescriptionComponent extends React.Component{

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
        DescriptionService.postUsers();
    }

    removeDish(){
        if(this.state.quantity > 1){
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
        if (typeof(this.props.location.state) != "undefined"){
            this.state.foodsInCart = this.props.location.state[2]
            this.state.type = this.props.location.state[4]
        }

    }

    showCart(){
        console.log(this.state.foodsInCart)
        // let background = document.getElementById("normlaStateMenu")
        // background.style.color = 707070
        this.state.cartOpen = true

    }

    storeInCart(dish){ 
        let cart = this.state.foodsInCart
        let foodIndexInCart = this.findFoodIndexInCart(dish.id, cart)
        if (foodIndexInCart == -1){
            cart.push({
                id : dish.id,
                name : dish.name, 
                price: dish.price, 
                quantity: this.state.quantity
            })
        } else {
            cart[foodIndexInCart].quantity += this.state.quantity
        }
    }

    findFoodIndexInCart(id, cart){
        for (let i = 0; i < cart.length; i++){
            if (id == cart[i].id){
                return i
            }
        }
        return -1
    }

    backToTypeMenu(){
        this.props.history.push("/customer/menu/chicken",[this.props.location.state[0], this.props.location.state[1], this.state.foodsInCart, this.state.type])
    }

    render(){
        return(
            <>
                <div>
                    <div className = "dishHead">
                        <img className = "orderBackButton" src="/res/images/arrow.png" alt = "back" onClick={() => this.backToTypeMenu()} />
                        {/* // onClick={()=>this.props.history.push("/customer/menu/chicken",this.props.location.state)}/> */}
                        <h4>{this.props.location.state[3].name}</h4>
                    </div>
                    <div className = "photoContainer">
                        <img className = "dishPhoto" src="/res/images/beef3.jpg"/>
                    </div>
                    <hr className = "dishSeparateLine"/>
                    <div className = "descriptionContainer">
                        <div className = "descriptionTitle">
                            <h4><strong>{this.props.location.state[3].name}</strong></h4>
                            <h4 className = "dishPrice">${this.props.location.state[3].price}</h4>
                        </div> 
                        <div className = "descriptionContent">
                            <p>{this.props.location.state[3].description}</p>
                        </div>
                    </div>
                    <div className = "dishIngredient">
                        <h4 className = "descriptionTitle">Ingredients:</h4>
                        <div className = "allIngredient">{Object.keys(this.props.location.state[3].components).join(', ')}</div>
                    </div>
                    <div className = "dishQuantity">
                        <img className = "removeDish" src = "/res/images/back.svg" onClick = {this.removeDish.bind(this)}/>
                        <div className = "currQuantity">{this.state.quantity}</div>
                        <img className = "addDish" src = "/res/images/back.svg" onClick = {this.addDish.bind(this)}/>
                    </div>
                    <div className = "addToOrder">
                        <img id="shoppingCart" src = "/res/images/shoppingCart.png" onClick={() => this.showCart()}/>
                        <button className = "addToOrderButton" 
                        onClick={() => this.storeInCart(this.props.location.state[3])}>Add to order</button>
                    </div>
                </div>
            </>
        );
    }
}

export default DescriptionComponent