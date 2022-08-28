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

function createData(type, quantity) {
    return { type, quantity};
}

const Portal = () =>{
    const wrap = (ev) => {
        ev.stopPropagation();
    };
    return (
        <div id = "editForm" className = "editForm">
            <form>
                <div className = "formTitle">
                    <h1>Update Quantity</h1>
                </div>
                <div className = "formTitle">
                    <h4>Enter the new quantity:</h4>
                    <input className = "update" />
                </div>
                <div className = "formContent">
                    <button className = "submitButton">Submit</button>
                </div>
            </form>
        </div>
    );
};


class IngredientComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show:false,
            foods : []
        };
    }

    testPost(){
        IngredientService.postUsers();
    }

    handleClick = (e) =>{
        e.stopPropagation();
        this.setState({
            show:true,
        });
    }

    close = () =>{
        this.setState({
            show:false,
        });
    }
    
    render(){
        return(
            <>
                <div className = "main">
                    <div className="ingredientHeader">
                        <img className = "backButton" src = "/res/images/back.svg" onClick={()=>window.location.href="../staff/dashboard"}/>
                    </div>
                    <div className = "titleContainer" onClick={this.close}>
                        <img className = "rawMaterialIcon" src = "/res/images/material.svg" />
                        <h1 className = "title">Raw Materials</h1>
                    </div>

                    <div className = "ingredientContainer">
                        <div className = "category">
                            <img className = "rawMaterialIcon" src = "/res/images/meat.svg" />
                            <h1>Meats</h1>
                        </div>
                        <div className = "tableContainer">
                            <table className = "ingredientTable">
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
                                            <td><button className="editButton" onClick={this.handleClick}>Edit</button>
                                            {this.state.show && <Portal />}</td>
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
                        <table className = "ingredientTable">
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
                                            <td><button className="editButton" onClick={this.handleClick}>Edit</button>
                                            {this.state.show && <Portal />}</td>
                                        </tr>
                                            
                                    ))}
                                </tbody>
                            </table>
                            <img className = "add" src = "/res/images/add.svg" />
                        </div>
                    </div>
                    
                </div>

                
            </>
        );
    }
}

export default IngredientComponent