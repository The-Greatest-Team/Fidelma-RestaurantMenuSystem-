import React from "react";
import MenuService from "../services/MenuService";

class MenuComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {foods : []}
        this.editDish = this.editDish.bind(this);
    }

    editDish(id){
        this.props.history.push(`/staff/NewDish/${id}`,"chicken");
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
            document.getElementById("add_more_button").style.display = "flex";
            
            for(let i = 0; i < addBtnAreas.length; i++){
                addBtnAreas[i].style.display = "none"
                delBtns[i].style.display = "block"
                updateButton[i].style.display = "block"
            }

        } else {
            editBtn.innerHTML = "Edit";
            document.getElementById("add_more_button").style.display = "None";

            for(let i = 0; i < addBtnAreas.length; i++){
                addBtnAreas[i].style.display = "block"
                delBtns[i].style.display = "none"
                updateButton[i].style.display = "none"
            }
        }
    };

    jumpToEditingPage(id){
        console.log(id);
        console.log(this.props)
        // window.location.href="/staff/menu/NewDish/2"
    }

    render(){
        return(
            <>
                <div>
                    <div className="menu_head">
                        <img id="menupic" src="/res/images/menu_pic_temp.png" alt="menu picture" />
                        <img className="logo" src="/res/images/projectIcon.png" alt="logo" />
                        
                    </div>

                    <div id ="menuBox"><span id="menuword">menu</span></div>
                    <div className="nav">
                        <input name="returnBtn" type="image" onClick={()=>window.location.href="/staff/dashboard"} src="/res/images/arrow.png" alt="return button icon" />
                        <span>Table No.16</span>
                    </div>
                    <div className="inner_menu_container">
                        <div className = "menuTitle">
                            <h2 id = "menuTitleWord">Chicken</h2>
                        </div>
                        <button id="editBtn" type="button" onClick={this.accessEditingMode}>Edit</button>
                    </div>

                    

                    <div>
                        {this.state.foods.map((dish) => (
                            <div className="foodunit" key={dish.foodName} onClick={this.jumpToEditingPage(dish.id)}>
                            <hr className="separateLine"/>
                            <div className="foodbox">
                                <img src="/res/images/Big_Mac_Chicken_Burger.png" alt="Big_Mac_Chicken_Burger_picture" />
                                
                                <div className="textbox">
                                    <div className="burger_name">{dish.foodName}</div>
                                    <div className="burger_desc">{dish.foodDesc}</div>
                                    <div className="burger_others">
                                        <div className="burger_joules">{dish.foodJoules}KJ</div>
                                        <div className="burger_price">${dish.foodPrice}</div>
                                    </div>
                                </div>
                                {
                                    dish.isSoldOut === false && 
                                    <input className="addDishBtn addDishArea" name="addDishBtn" type="image" src="/res/images/add_button.png" alt="add button icon" />
                                }
                                {
                                    dish.isSoldOut === true &&
                                    <div className="soldOutDiv addDishArea">Sold Out</div>
                                }
                                <input className="delDishBtn" name="delDishBtn" type="image" src="/res/images/delete_btn.png" alt="delete button icon" />
                                <button onClick = {()=> this.editDish(dish.id)} className = 'updateButton'> Update</button>
                            </div>
                        </div>
                        ))}
                    </div>
                    <button id="add_more_button" onClick={()=>this.props.history.push("/staff/NewDish/_chickenadd")}>Add more dish</button>
                </div>
            </>
        );
    }

}

export default MenuComponent