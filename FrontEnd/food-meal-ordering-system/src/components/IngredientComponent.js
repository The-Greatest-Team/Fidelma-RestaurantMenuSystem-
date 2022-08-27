import React from "react";
import IngredientService from "../services/IngredientService";

const meats = [
    createData('Pork', 150),
    createData('Beef', 100),
    createData('Chicken', 200),
    createData('aaa', 150),
    createData('sdaa', 100),
];

const vegetables = [
    createData('Tomato', 150),
    createData('Onion', 100),
    createData('Lettuce', 200),
    createData('aaa', 150),
    createData('sdaa', 100),
];

const mystyle = {
    display: "none"
};

function createData(type, quantity) {
    return { type, quantity};
}
class IngredientComponent extends React.Component{
    constructor(props){
        super(props)

        this.state = {foods : []}
    }

    testPost(){
        IngredientService.postUsers();
    }

    showForm = () =>{
        if(
            document.getElementsByClassName("editForm")&&
            document.getElementById("main")
        ){
            document.getElementsByClassName("editForm").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
    }

    render(){
        return(
            <>
                <div className = "main">
                    <div>
                        <img className = "backButton" src = "/res/images/back.svg" />
                    </div>
                    <div className = "titleContainer">
                        <img className = "rawMaterialIcon" src = "/res/images/material.svg" />
                        <h1>Raw Materials</h1>
                    </div>

                    <div className = "ingredientContainer">
                        <div className = "category">
                            <img className = "rawMaterialIcon" src = "/res/images/meat.svg" />
                            <h1>Meats</h1>
                        </div>
                        <div className = "tableContainer">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>quantity</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {meats.map((row) =>(
                                        <tr
                                            key = {row.type}
                                        >
                                            <td>{row.type}</td>
                                            <td>{row.quantity}</td>
                                            <td><button className="editButton" onClick={this.showForm()}>Edit</button></td>
                                        </tr>
                                            
                                    ))}
                                </tbody>
                            </table>
                            <img className = "add" src = "/res/images/add.svg" />
                        </div>
                        <div className = "category">
                            <img className = "rawMaterialIcon" src = "/res/images/vegetable.svg" />
                            <h1>Vegetables</h1>
                        </div>
                        <div className = "tableContainer">
                        <table>
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>quantity</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vegetables.map((row) =>(
                                        <tr
                                            key = {row.type}
                                        >
                                            <td>{row.type}</td>
                                            <td>{row.quantity}</td>
                                            <td><button className="editButton" onClick={this.showForm()}>Edit</button></td>
                                        </tr>
                                            
                                    ))}
                                </tbody>
                            </table>
                            <img className = "add" src = "/res/images/add.svg" />
                        </div>
                    </div>
                    <div id = "editForm" style ={{display: "none"}} className = "editForm">
                        <button id="close" className="closeButton">X</button>
                        <form>
                            <div className = "formTitle">
                                <h1>Update Quantity</h1>
                            </div>
                
                            <div className = "formTitle">
                                <h4>Enter the new quantity:</h4>
                                <input className = "update" />
                            </div>
                            <div className = "formTitle">
                                <button className = "submitButton">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                
            </>
        );
    }
}

export default IngredientComponent