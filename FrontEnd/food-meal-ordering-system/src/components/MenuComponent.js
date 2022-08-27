import React from "react";
import MenuService from "../services/MenuService";

class MenuComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {users : []}
    }

    componentDidMount(){
        MenuService.getUsers().then((respond) => {
            this.setState({users : respond.data })
            console.log(this.state.users);
        });
    }

    accessEditingMode(){
        let editBtn =  document.getElementById("editBtn");
        let addBtns = document.getElementsByClassName("addDishBtn");
        let delBtns = document.getElementsByClassName("delDishBtn")
        if (editBtn.innerHTML == "Edit"){
            editBtn.innerHTML = "Editing";
            document.getElementById("add_more_button").style.display = "flex";
            
            for(let i = 0; i < addBtns.length; i++){
                addBtns[i].style.display = "none"
                delBtns[i].style.display = "block"
            }
    
        } else {
            editBtn.innerHTML = "Edit";
            document.getElementById("add_more_button").style.display = "None";
    
            for(let i = 0; i < addBtns.length; i++){
                addBtns[i].style.display = "block"
                delBtns[i].style.display = "none"
            }
        }
    }

    render(){
        return(
            <>
                <div>
                    <div className="menu_head">
                        <img id="menupic" src="/res/images/menu_pic_temp.png" alt="menu picture" />
                        <img className="logo" src="/res/images/projectIcon.png" alt="logo" />
                        <div id="menuword">menu</div>
                    </div>

                    <div className="nav">
                        <input name="returnBtn" type="image" src="/res/images/arrow.png" alt="return button icon" />
                        <span>Table No.</span>
                    </div>
                    <div className="inner_menu_container">
                        <div>
                            <h2>Chicken</h2>
                        </div>
                        <button id="editBtn" type="button" onClick={this.accessEditingMode}>Edit</button>
                    </div>
                    <div className="foodunit">
                        <hr />
                        <div className="foodbox">
                            <img src="/res/images/Big_Mac_Chicken_Burger.png" alt="Big_Mac_Chicken_Burger_picture" />
                            
                            <div className="textbox">
                                <div className="burger_name">Big_Mac_Chicken_Burger</div>
                                <div className="burger_desc">Huge chicken chop, fresh lettuce.</div>
                                <div className="burger_others">
                                    <div className="burger_joules">2880KJ</div>
                                    <div className="burger_price">$13.80</div>
                                </div>
                            </div>

                            <input className="addDishBtn" name="addDishBtn" type="image" src="/res/images/add_button.png" alt="add button icon" />
                            <input className="delDishBtn" name="delDishBtn" type="image" src="/res/images/delete_btn.png" alt="delete button icon" />
                        </div>
                    </div>
                    <div className="foodunit">
                        <hr />
                        <div className="foodbox">
                            <img src="/res/images/Double_Drumstick_Burger.png" alt="Double_Drumstick_Burger_picture" />
                            
                            <div className="textbox">
                                <div className="burger_name">Double_Drumstick_Burger</div>
                                <div className="burger_desc">Two chicken steaks, 
                                    fresh tomatoes, lettuce.</div>
                                <div className="burger_others">
                                    <div className="burger_joules">3150KJ</div>
                                    <div className="burger_price">$16.80</div>
                                </div>
                            </div>

                            <input className="addDishBtn" name="addDishBtn" type="image" src="/res/images/add_button.png" alt="add button icon" />
                            <input className="delDishBtn" name="delDishBtn" type="image" src="/res/images/delete_btn.png" alt="delete button icon" />
                        </div>
                    </div>
                    <button id="add_more_button">Add more dish</button>
                </div>
            </>
        );
    }

}

export default MenuComponent