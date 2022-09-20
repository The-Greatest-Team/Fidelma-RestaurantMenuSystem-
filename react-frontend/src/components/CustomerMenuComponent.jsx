import React from "react";
import MenuService from "../services/MenuService";
import Slide from 'react-reveal'
class CustomerMenuComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {foods : [], foodsInCart : [], foodsCountInCart : [], cartOpen : false}
    }


    componentDidMount(){
        MenuService.getUsers(this.props.location.state[this.getLast(this.props.location.state)]).then((respond) => {
            this.setState({foods : (respond.data)});
            console.log(typeof(this.state.foods));
            console.log((respond.data));
        });
        if (typeof(this.props.location.state) != "undefined"){
            this.state.foodsInCart = this.props.location.state[0]
            this.state.foodsCountInCart = this.props.location.state[1]
        }
    }

    capitalizeFirst (str) {
        if (!str) {
            return "s";
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

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
            foodCounts[foodIndexInCart] += 1
        }
    }

    showCart(){
        console.log(this.state.foodsInCart)
        console.log(this.state.foodsCountInCart)
        // let background = document.getElementById("normlaStateMenu")
        // background.style.color = 707070
        this.setState({cartOpen : true})

    }

    closeCart(){
        this.setState({cartOpen : false})
    }

    returnMainMenu(){
        let type = this.props.location.state[this.props.location.state.length-1]
        this.props.history.push("/customer/mainMenu", [this.state.foodsInCart, this.state.foodsCountInCart,type])
    }

    viewInDetails(dish){
        let type = this.props.location.state[this.props.location.state.length-1]
        this.props.history.push("dishDescription",[this.state.foodsInCart, this.state.foodsCountInCart, dish, type])
    }

    getLast(arr) {
        return arr.length-1;
    }

    render(){
        return(
            <>
                <div id="normlaStateMenu">
                    {console.log(typeof(this.props.location.state))}
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
                        <div className="foodBoxInCart">
                            <img src="/res/images/bigMacChickenBurger.png" alt="food pic"/>
                            <div className="foodTextContentInCart">
                                <div className="foodNameInCart"><strong>Burger</strong></div>
                                <div className="foodPriceInCart">$14</div>
                            </div>

                            <div className="changeQuantityArea">
                            <input className="QuantityBtnIconInCart" type="image" src="/res/images/addButton.png" alt="addButton icon in food cart"/>
                            <div className = "currentQuantity">1</div>
                            <input className="QuantityBtnIconInCart" type="image" src="/res/images/deleteButton.png" alt="delete Button icon in food cart"/>
                            </div>
                        </div>
                        <div className="cartInfo">
                            <span>Total: $42</span>
                            <button>Order Now</button>
                        </div>
                    </div>

                </Slide>
            </>
        );
    }

}

export default CustomerMenuComponent