import React from "react";

class menu extends React.Component{
    render (){
        return (
            <div>
                <div class="menu_head">
                    <img id="menupic" src="./res/images/menu_pic_temp.png" alt="menu picture" />
                    <img class="logo" src="./res/images/projectIcon.png" alt="logo" />
                    <div id="menuword">menu</div>
                </div>

                <div class="nav">
                    <input name="returnBtn" type="image" src="./res/images/arrow.png" alt="return button icon" />
                    <span>Table No.</span>
                </div>
                <div class="inner_menu_container">
                    <div>
                        <h2>Chicken</h2>
                    </div>
                    <button id="editBtn" type="button" onClick="accessEditingMode()">Edit</button>
                </div>
                <div class="foodunit">
                    <hr />
                    <div class="foodbox">
                        <img src="./res/images/Big_Mac_Chicken_Burger.png" alt="Big_Mac_Chicken_Burger_picture" />
                        
                        <div class="textbox">
                            <div class="burger_name">Big_Mac_Chicken_Burger</div>
                            <div class="burger_desc">Huge chicken chop, fresh lettuce.</div>
                            <div class="burger_others">
                                <div class="burger_joules">2880KJ</div>
                                <div class="burger_price">$13.80</div>
                            </div>
                        </div>

                        <input class="addDishBtn" name="addDishBtn" type="image" src="./res/images/add_button.png" alt="add button icon" />
                        <input class="delDishBtn" name="delDishBtn" type="image" src="./res/images/delete_btn.png" alt="delete button icon" />
                    </div>
                </div>
                <div class="foodunit">
                    <hr />
                    <div class="foodbox">
                        <img src="./res/images/Double_Drumstick_Burger.png" alt="Double_Drumstick_Burger_picture" />
                        
                        <div class="textbox">
                            <div class="burger_name">Double_Drumstick_Burger</div>
                            <div class="burger_desc">Two chicken steaks, 
                                fresh tomatoes, lettuce.</div>
                            <div class="burger_others">
                                <div class="burger_joules">3150KJ</div>
                                <div class="burger_price">$16.80</div>
                            </div>
                        </div>

                        <input class="addDishBtn" name="addDishBtn" type="image" src="./res/images/add_button.png" alt="add button icon" />
                        <input class="delDishBtn" name="delDishBtn" type="image" src="./res/images/delete_btn.png" alt="delete button icon" />
                    </div>
                </div>
                <button id="add_more_button">Add more dish</button>
            </div>
        );
    }
}

export default menu;