import React from "react";
import MenuService from "../services/MenuService";
import NewDishService from "../services/NewDishService";
import ShoppingCartComponent from "./ShoppingCartComponent";
class CustomerMenuComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {foods : [], foodsInCart : [], foodsCountInCart : []}
    }


    componentDidMount(){
        MenuService.getUsers(this.props.location.state).then((respond) => {
            this.setState({foods : (respond.data)});
            console.log(typeof(this.state.foods));
            console.log((respond.data));
        });
    }

   

    editDish(dish) {
        this.props.history.push(`/staff/menu/edit/${dish.id}`,dish);
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
        console.log(this.state.foodsInCart)
        console.log(this.state.foodsCountInCart)
    }

   

    render(){
        return(
            <>
                <div>
                    {console.log(typeof(this.props.location.state))}
                    <div className="menuHead">
                        <img id="menuPic" src="/res/images/menuBackground.jpg" alt="menu picture" />
                        <img className="logo" src="/res/images/projectIcon.png" alt="logo" />
                        
                    </div>

                    <div id ="menuBox"><span id="menuWord">menu</span></div>
                    <div className="nav">
                        <input name="returnBtn" type="image" onClick={()=>window.location.href="/staff/mainMenu"} src="/res/images/arrow.png" alt="return button icon" />
                        <span>Table No.16</span>
                    </div>
                    <div className="innerMenuContainer">
                        <div className = "menuTitle">
                            <h2 id = "menuTitleWord">{
                            
                                this.capitalizeFirst(this.props.location.state)
                            
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
                                    <input className="addDishBtn addDishArea" name="addDishBtn" type="image" src="/res/images/addButton.png" alt="add button icon" onClick={() => this.storeInCart(dish)}/>
                                }
                                {
                                    dish.soldOut === true &&
                                    <div className="soldOutDiv addDishArea">Sold Out</div>
                                }
                         </div>
                        </div>
                        ))}
                    </div>
                </div>

                <ShoppingCartComponent />
            </>
        );
    }

}

export default CustomerMenuComponent