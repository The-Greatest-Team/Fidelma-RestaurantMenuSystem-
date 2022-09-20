import React from "react";
import MenuService from "../services/MenuService";
import Slide from 'react-reveal'
class CustomerMenuComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {foods : [], foodsInCart : [], cartOpen : false}
    }


    componentDidMount(){
        MenuService.getUsers(this.props.location.state[this.getLast(this.props.location.state)]).then((respond) => {
            this.setState({foods : (respond.data)});
            console.log(typeof(this.state.foods));
            console.log((respond.data));
        });
        if (typeof(this.props.location.state) != "undefined"){
            this.state.foodsInCart = this.props.location.state[0]
        }
    }

    capitalizeFirst (str) {
        if (!str) {
            return "s";
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    showCart(){
        console.log(this.state.foodsInCart)
        // let background = document.getElementById("normlaStateMenu")
        // background.style.color = 707070
        this.setState({cartOpen : true})

    }

    closeCart(){
        this.setState({cartOpen : false})
    }

    returnMainMenu(){
        let type = this.props.location.state[this.props.location.state.length-1]
        this.props.history.push("/customer/mainMenu", [this.state.foodsInCart ,type])
    }

    viewInDetails(dish){
        let type = this.props.location.state[this.props.location.state.length-1]
        this.props.history.push("dishDescription",[this.state.foodsInCart, dish, type])
    }

    getLast(arr) {
        return arr.length-1;
    }

    calculateTotalPrice(){
        let totalPrice = 0;
        for (let i = 0; i < this.state.foodsInCart.length; i++){
            let dishInCart = this.state.foodsInCart[i]
            totalPrice += dishInCart.price * dishInCart.quantity
        }
        return totalPrice
    }

    changeDishQuantity(dishInCart, action){
        let cart = this.state.foodsInCart
        let foodIndex = this.findFoodIndexInCart(dishInCart.id, cart)
        if (action == 'add'){
            this.addDishQuantity(cart, foodIndex)
        } else if (action == 'delete') {
            this.deleteDishQuantity(cart, foodIndex)
        }
    }

    addDishQuantity(cart, foodIndex){
        if (foodIndex != -1){
            cart[foodIndex].quantity += 1
        } else {
            console.log("Error, try to add quantity of dish that not exist in the food cart")
        }
    }

    deleteDishQuantity(cart, foodIndex){
        if (foodIndex != -1){
            cart[foodIndex].quantity -= 1
            if (cart[foodIndex].quantity == 0){
                cart.splice(foodIndex, 1)
            }
        } else {
            console.log("Error, try to delete quantity of dish that not exist in the food cart")
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

    render(){
        return(
            <>
                <div id="normlaStateMenu">
                    <div className="menuHead">
                        <img id="menuPic" src="/res/images/menuBackground.jpg" alt="menu picture" />
                        <img className="logo" src="/res/images/projectIcon.png" alt="logo" />
                        
                    </div>

                    <div id ="menuBox"><span id="menuWord">menu</span></div>
                    <div className="nav">
                        <input name="returnBtn" type="image" onClick={() => this.returnMainMenu()} src="/res/images/arrow.png" alt="return button icon" />
                        <span>Table No.16</span>
                    </div>
                    <div className="innerMenuContainer">
                        <div className = "menuTitle">
                            <h2 id = "menuTitleWord">{
                                
                                this.capitalizeFirst(this.props.location.state[this.getLast(this.props.location.state)])
                            
                            }</h2>
                        </div>
                    </div>
                    
                    <div>
                        {this.state.foods.map((dish) => (
                            <div className="foodUnit" key={dish.id}>
                           <hr className="separateLine"/>
                            <div className="foodBox">
                                <img src="/res/images/bigMacChickenBurger.png" alt="Big Mac Chicken Burger picture" />
                                
                                <div className="textBox">
                                    <div className="burgerName">{dish.name}</div>
                                    <div className="burgerDesc">{dish.description}</div>
                                    <div className="burgerOthers">
                                        <div className="burgerJoules">{dish.kiloJoule}KJ</div>
                                        <div className="burgerPrice">${dish.price}</div>
                                    </div>
                                </div>
                                {
                                    dish.soldOut === false &&
                                    <input className="arrowBtn" name="arrowBtn" type="image" src="/res/images/arrowIcon.png" alt="view more arrow icon" 
                                    onClick={()=>this.viewInDetails(dish)}/>
                                }
                                {
                                    dish.soldOut === true &&
                                    <div className="soldOutDiv addDishArea">Sold Out</div>
                                }
                         </div>
                        </div>
                        ))}
                    </div>
                    
                    <input id="shoppingCart" name="shoppingCartBtn" type="image" src="/res/images/shoppingCart.png" alt="shopping cart icon" onClick={() => this.showCart()}/>
                    

                    <button onClick={()=>this.closeCart()}>Test Close</button>

                </div>

                <Slide bottom when={this.state.cartOpen}>
                    <div className="cart">
                        <span>Already Selected</span>
                        {this.state.foodsInCart.map((dishInCart) => (
                        <div className="foodBoxInCart" key={dishInCart.id}>
                            <img src="/res/images/bigMacChickenBurger.png" alt="food pic"/>
                            <div className="foodTextContentInCart">
                                <div className="foodNameInCart"><strong>{dishInCart.name}</strong></div>
                                <div className="foodPriceInCart">${dishInCart.price}</div>
                            </div>

                            <div className="changeQuantityArea">
                            <input className="QuantityBtnIconInCart" type="image" src="/res/images/addButton.png" alt="addButton icon in food cart" onClick={()=>this.changeDishQuantity(dishInCart, 'add')}/>
                            <div className = "currentQuantity">{dishInCart.quantity}</div>
                            <input className="QuantityBtnIconInCart" type="image" src="/res/images/deleteButton.png" alt="delete Button icon in food cart" onClick={()=>this.changeDishQuantity(dishInCart, 'delete')}/>
                            </div>
                        </div>
                        ))}
                        <div className="cartInfo">
                            <span>Total: ${this.calculateTotalPrice()}</span>
                            <button>Order Now</button>
                        </div>
                    </div>
                </Slide>
            </>
        );
    }

}

export default CustomerMenuComponent