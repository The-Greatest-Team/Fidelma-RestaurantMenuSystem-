import React from "react";


class CustomerMainMenuComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = { foodsInCart : [], tableNum : '', phone : ''}
    }

    componentDidMount(){
        if (typeof(this.props.location.state[2]) != "undefined"){
            this.setState({foodsInCart : this.props.location.state[2]})
        }
        this.setState({tableNum : this.props.location.state[0], phone : this.props.location.state[1]})
    }

    goToChicken(){
        this.props.history.push("/customer/menu/" + "chicken", [this.state.tableNum, this.state.phone,this.state.foodsInCart, "chicken"])
    }

    goToBeef(){
        this.props.history.push("/customer/menu/" + "beef" ,[this.state.tableNum, this.state.phone,this.state.foodsInCart, "beef"])
    }

     // shopping cart functions
     calculateTotalPrice(){
        let totalPrice = 0;
        for (let i = 0; i < this.state.foodsInCart.length; i++){
            let dishInCart = this.state.foodsInCart[i]
            totalPrice += dishInCart.price * dishInCart.quantity
        }
        return totalPrice.toFixed(1)
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
            this.setState({foodsInCart : cart})
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
            // must use set state function 
            // set state will tell react to rerender this page
            // if change the value of state without set state
            // it will just simply change the store in state
            this.setState({foodsInCart : cart})
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

    toggleWithCart(){
        let cart = document.getElementById("cartArea")
        cart.classList.toggle('active')
        let closeCartArea = document.getElementById("closeCartArea")
        closeCartArea.classList.toggle('active')
    }

    goToConfirmOrder(){
        this.props.history.push("/customer/confirmPage", [this.state.tableNum, this.state.phone, this.state.foodsInCart])
    }

    render(){
        return(
            <>
                <div id="closeCartArea" onClick={()=>this.toggleWithCart()}></div>
                <div>
                    <div className="menuHead">
                        <img id="menuPic" src="/res/images/menuBackground.jpg" alt="menu picture" />
                        <img className="logo" src="/res/images/projectIcon.png" alt="logo" />
                        
                    </div>

                    <div id ="menuBox"><span id="menuWord">menu</span></div>
                    <div className="nav">
                        <span>Table No.{this.props.location.state[0]}</span>
                    </div>

                    <div>
                        <h2 id = "mainMenuChickenHead"> Chicken </h2>  {/* waiting for backend for finish functions*/}
                        <hr className="separateLine"/>
                        <img className = "mainMenuPic" src="/res/images/chicken2.jpg" alt="menu picture"/>
                        <div className = "mainMenuDescription">Description.</div>
                        <button className = "mainMenuEnterButton" onClick={()=>this.goToChicken()}>View more</button>
                        <hr id = "mainMenuBooomLine" className="separateLine"/>
                    </div>
                    <div>
                        <h2 id = "mainMenuChickenHead"> Beef </h2>  {/* waiting for backend for finish functions*/}
                        <hr className="separateLine"/>
                        <img className = "mainMenuPic" src="/res/images/beef1.jpg" alt="menu picture"/>
                        <div className = "mainMenuDescription">Description.</div>
                        <button className = "mainMenuEnterButton" onClick={()=>this.goToBeef()}>View more</button>
                        <hr id = "mainMenuBooomLine" className="separateLine"/>
                    </div>

                    <input id="shoppingCart" name="shoppingCartBtn" type="image" src="/res/images/shoppingCart.png" alt="shopping cart icon" onClick={() => this.toggleWithCart()}/>

                </div>

                <div className="cart" id="cartArea">
                    <span>Already Selected</span>
                    {this.state.foodsInCart.map((dishInCart) => (
                    <div className="foodBoxInCart" key={dishInCart.id}>
                        <div className="foodDescBoxInCart">
                            <img src="/res/images/bigMacChickenBurger.png" alt="food pic"/>
                            <div className="foodTextContentInCart">
                                <div className="foodNameInCart"><strong>{dishInCart.name}</strong></div>
                                <div className="foodPriceInCart">${dishInCart.price}</div>
                            </div>
                        </div>

                        <div className="changeQuantityArea">
                        <input className="QuantityBtnIconInCart" type="image" src="/res/images/deleteButton.png" alt="delete Button icon in food cart" onClick={()=>this.changeDishQuantity(dishInCart, 'delete')}/>
                        <div className = "currentQuantity">{dishInCart.quantity}</div>
                        <input className="QuantityBtnIconInCart" type="image" src="/res/images/addButton.png" alt="addButton icon in food cart" onClick={()=>this.changeDishQuantity(dishInCart, 'add')}/>
                        </div>
                    </div>
                    ))}
                    <div className="cartInfo">
                        <span>Total: ${this.calculateTotalPrice()}</span>
                        <button onClick={() => this.goToConfirmOrder()}>Order Now</button>
                    </div>
                </div>

            </>
        );
    }

}

export default CustomerMainMenuComponent