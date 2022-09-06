import React from "react";
import MenuService from "../services/MenuService";

class MenuComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {foods : []}
    }

    componentDidMount(){
        MenuService.getUsers().then((respond) => {
            this.setState({foods : (respond.data)});
            console.log(typeof(this.state.foods));
            console.log((respond.data));
        });
    }

    accessEditingMode(){
        let editBtn =  document.getElementById("editBtn");
        let addBtnAreas = document.getElementsByClassName("addDishArea");
        let delBtns = document.getElementsByClassName("delDishBtn");
        if (editBtn.innerHTML === "Edit"){
            editBtn.innerHTML = "Editing";
            document.getElementById("addMoreButton").style.display = "flex";
            
            for(let i = 0; i < addBtnAreas.length; i++){
                addBtnAreas[i].style.display = "none"
                delBtns[i].style.display = "block"
            }

        } else {
            editBtn.innerHTML = "Edit";
            document.getElementById("addMoreButton").style.display = "None";

            for(let i = 0; i < addBtnAreas.length; i++){
                addBtnAreas[i].style.display = "block"
                delBtns[i].style.display = "none"
            }
        }
    };

    render(){
        return(
            <>
                <div>
                    <div className="menuHead">
                        <img id="menuPic" src="/res/images/menuPic.png" alt="menu picture" />
                        <img className="logo" src="/res/images/projectIcon.png" alt="logo" />
                        
                    </div>

                    <div id ="menuBox"><span id="menuWord">menu</span></div>
                    <div className="nav">
                        <input name="returnBtn" type="image" onClick={()=>window.location.href="/staff/dashboard"} src="/res/images/arrow.png" alt="return button icon" />
                        <span>Table No.16</span>
                    </div>
                    <div className="innerMenuContainer">
                        <div className = "menuTitle">
                            <h2 id = "menuTitleWord">Chicken</h2>
                        </div>
                        <button id="editBtn" type="button" onClick={this.accessEditingMode}>Edit</button>
                    </div>

                    <hr className="separateLine"/>

                    <div>
                        {this.state.foods.map((dish) => (
                            <div className="foodUnit" key={dish.id}>
                            <hr />
                            <div className="foodBox">
                                <img src="/res/images/bigMacChickenBurger.png" alt="Big Mac Chicken Burger picture" />
                                
                                <div className="textBox">
                                    <div className="burgerName">{dish.foodName}</div>
                                    <div className="burgerDesc">{dish.foodDesc}</div>
                                    <div className="burgerOthers">
                                        <div className="burgerJoules">{dish.foodJoules}KJ</div>
                                        <div className="burgerPrice">${dish.foodPrice}</div>
                                    </div>
                                </div>
                                {
                                    dish.isSoldOut === false && 
                                    <input className="addDishBtn addDishArea" name="addDishBtn" type="image" src="/res/images/addButton.png" alt="add button icon" />
                                }
                                {
                                    dish.isSoldOut === true &&
                                    <div className="soldOutDiv addDishArea">Sold Out</div>
                                }
                                <input className="delDishBtn" name="delDishBtn" type="image" src="/res/images/deleteButton.png" alt="delete button icon" />
                            </div>
                        </div>
                        ))}
                    </div>
                    <button id="addMoreButton" onClick={()=>this.props.history.push("/staff/menu/newDish")}>Add more dish</button>
                </div>
            </>
        );
    }

}

export default MenuComponent