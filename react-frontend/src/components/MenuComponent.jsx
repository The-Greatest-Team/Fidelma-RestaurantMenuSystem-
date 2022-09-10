import React from "react";
import MenuService from "../services/MenuService";
import NewDishService from "../services/NewDishService";

class MenuComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {foods : []}
        this.deleteDish = this.deleteDish.bind(this);
    }

    deleteDish(id) {
        NewDishService.deleteDish(id).then(
            res => {
                this.setState({foods:this.state.foods.filter(food => food.id !== id)});
            }
        )
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
        let updateButton = document.getElementsByClassName("updateButton");
        if (editBtn.innerHTML === "Edit"){
            editBtn.innerHTML = "Editing";
            document.getElementById("addMoreButton").style.display = "flex";
            
            for(let i = 0; i < addBtnAreas.length; i++){
                addBtnAreas[i].style.display = "none"
                delBtns[i].style.display = "block"
                updateButton[i].style.display = "block"
            }

        } else {
            editBtn.innerHTML = "Edit";
            document.getElementById("addMoreButton").style.display = "None";

            for(let i = 0; i < addBtnAreas.length; i++){
                addBtnAreas[i].style.display = "block"
                delBtns[i].style.display = "none"
                updateButton[i].style.display = "none"
            }
        }
    };

    editDish(dish) {
        this.props.history.push(`/staff/menu/edit/${dish.id}`,dish);
    }

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
                                    <input className="addDishBtn addDishArea" name="addDishBtn" type="image" src="/res/images/addButton.png" alt="add button icon" />
                                }
                                {
                                    dish.soldOut === true &&
                                    <div className="soldOutDiv addDishArea">Sold Out</div>
                                }
                                <button onClick = {() => this.deleteDish(dish.id)}><input className="delDishBtn" name="delDishBtn" type="image" src="/res/images/deleteButton.png" alt="delete button icon" /></button>
                                <button onClick = {()=> this.editDish(dish)} className = 'updateButton'> Update</button>                            </div>
                        </div>
                        ))}
                    </div>
                    <button id="addMoreButton" onClick={()=>this.props.history.push("/staff/menu/newDish","chicken")}>Add more dish</button>
                </div>
            </>
        );
    }

}

export default MenuComponent