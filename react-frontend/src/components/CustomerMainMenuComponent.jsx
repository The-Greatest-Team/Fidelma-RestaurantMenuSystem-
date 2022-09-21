import React from "react";


class CustomerMainMenuComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = { foodsInCart : [], tableNum : ''}
    }

    componentDidMount(){
        if (typeof(this.props.location.state.foodsInCart) != "undefined"){
            this.state.foodsInCart = this.props.location.state.foodsInCart
        }
        // console.log(this.props.location.state.tableNum);
    }

    showCart(){
        console.log(this.props.location.state)
        console.log(this.state)
        // let background = document.getElementById("normlaStateMenu")
        // background.style.color = 707070
    }

    goToChicken(){
        this.props.history.push("/customer/menu/" + "chicken", [this.state.foodsInCart, "chicken"])
    }

    goToBeef(){
        this.props.history.push("/customer/menu/" + "beef" ,[this.state.foodsInCart, "beef"])
    }

    render(){
        return(
            <>
                <div>
                    <div className="menuHead">
                        <img id="menuPic" src="/res/images/menuBackground.jpg" alt="menu picture" />
                        <img className="logo" src="/res/images/projectIcon.png" alt="logo" />
                        
                    </div>

                    <div id ="menuBox"><span id="menuWord">menu</span></div>
                    <div className="nav">
                        <span>Table No. {this.props.location.state.tableNum}</span>
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

                    <input id="shoppingCart" name="shoppingCartBtn" type="image" src="/res/images/shoppingCart.png" alt="shopping cart icon" onClick={() => this.showCart()}/>

                </div>

                {/* <input id="shoppingCart" name="shoppingCartBtn" type="image" src="/res/images/shoppingCart.png" alt="shopping cart icon" onClick={() => this.showCart()}/> */}
            </>
        );
    }

}

export default CustomerMainMenuComponent