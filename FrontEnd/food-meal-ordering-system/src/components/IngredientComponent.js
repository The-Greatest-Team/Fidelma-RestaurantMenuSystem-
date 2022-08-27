import React from "react";
import IngredientService from "../services/IngredientService";

class IngredientComponent extends React.Component{
    constructor(props){
        super(props)

        this.state = {foods : []}
    }

    testPost(){
        IngredientService.postUsers();
    }

    render(){
        return(
            <>
                <header class = "ingredientHeader">
                    <img class = "backButton" src = "svg/back.svg" alt = "back" onclick = 
                        "window.location.href='staffDashboard.html'" />
                </header>
    
                <main>
                    <div class = "titleContainer">
                        <div style="display: inline-block;">
                            <img class = "material" src = "svg/material.svg" alt = "material" />
                            <h1 class = "title">Raw Materials</h1>
                        </div>
                    </div>
                    <div class = "ingerdientContainer">
                        <div class = "category">
                            <img class = "rawMaterialIcon" src = "svg/meat.svg" alt = "meat" style = "display: inline-block;" />
                            <h1>Meats</h1>
                        </div>
                        <div class = "tableContainer">
                            <table class = "ingredientTable">
                                <tr>
                                    <th>Type</th>
                                    <th>Quantity</th>
                                    <th>Operation</th>
                                </tr>
                                <tr>
                                    <td>Beef</td>
                                    <td>100</td>
                                    <td><button class="editButton" onclick = "showForm('editForm')">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>Pork</td>
                                    <td>100</td>
                                    <td><button class="editButton" onclick = "showForm('editForm')">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>Chicken</td>
                                    <td>100</td>
                                    <td><button class="editButton" onclick = "showForm('editForm')">Edit</button></td>
                                </tr>
                            </table>
                            <img class = "add" src = "svg/add.svg" alt = "add" onclick="showForm('addForm')" />
                        </div>
                        <div class = "category">
                            <img class = "rawMaterialIcon" src = "svg/vegetable.svg" alt = "vegetable" style = 
                            "display: inline-block;" />
                            <h1>Vegetables</h1>
                        </div>
                        <div class = "tableContainer">
                            <table class = "ingredientTable">
                                <tr>
                                    <th>Type</th>
                                    <th>Quantity</th>
                                    <th>Operation</th>
                                </tr>
                                <tr>
                                    <td>Tomato</td>
                                    <td>100</td>
                                    <td><button class="editButton" onclick = "showForm('editForm')">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>Onion</td>
                                    <td>100</td>
                                    <td><button class="editButton" onclick = "showForm('editForm')">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>Lettuce</td>
                                    <td>100</td>
                                    <td><button class="editButton" onclick = "showForm('editForm')">Edit</button></td>
                                </tr>
                            </table>
                            <img class = "add" src = "svg/add.svg" alt = "add" onclick="showForm('addForm')" />
                        </div>
                    </div>

                    <div id = "editForm" style = "display: none;" class = "editForm">
                        <button id="close" class="closeButton" onclick="closeForm('editForm')">X</button>
                        <form>
                            <div class = "formTitle">
                                <h1>Update Quantity</h1>
                            </div>
                
                            <div class = "formTitle">
                                <h4>Enter the new quantity:</h4>
                                <input class = "update" />
                            </div>
                            <div class = "formTitle">
                                <button class = "submitButton">Submit</button>
                            </div>
                        </form>
                    </div>

                    <div id = "addForm" style = "display: none;" class="addForm">
                        <button id="close" class="closeButton" onclick="closeForm('addForm')">X</button>
                        <form>
                            <div class = "formTitle">
                                <h1>Add new ingredient</h1>
                            </div>
                            <div class = "formContent">
                                <h4>Enter the new ingredient:</h4>
                                <input class = "update" />
                            </div>
                            <div class = "formTitle">
                                <h4>Enter the quantity:</h4>
                                <input class = "update" />
                            </div>
                            <div class = "formContent">
                                <button class = "submitButton">Submit</button>
                            </div>
                        </form>
                    </div>
                </main>
            </>
        );
    }
}

export default IngredientComponent