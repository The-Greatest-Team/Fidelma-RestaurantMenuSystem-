import React from "react";
import IngredientService from "../services/IngredientService";
import IngredientPopupComponent from "./IngredientPopupComponent";
import EditIngredientComponent from "./EditIngredientComponent";

const meats = [
    createData('Pork', 150, 10.00),
    createData('Beef', 100, 10.00),
    createData('Chicken', 200, 10.00),
    createData('Lamb', 150, 10.00),
    createData('Fish', 100, 10.00),
];

const vegetables = [
    createData('Tomato', 150, 10.00),
    createData('Onion', 100, 10.00),
    createData('Lettuce', 200, 10.00),
    createData('Garlic', 150, 10.00),
    createData('Mushroom', 100, 10.00),
];

// const ingredients = [
//     createData('Beef', 150, 10.0, 'meats'),
//     createData('Beef', 150, 10.0, 'meats'),
//     createData('Beef', 150, 10.0, 'meats'),
//     createData('Beef', 150, 10.0, 'meats'),
//     createData('Beef', 150, 10.0, 'vegetables'),
//     createData('Beef', 150, 10.0, 'vegetables'),
//     createData('Beef', 150, 10.0, 'vegetables'),
//     createData('Beef', 150, 10.0, 'vegetables'),
// ]




function createData(name, quantity, price, type) {
    return { name, quantity, price, type};
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
            foods : [],
            allIngredients:[],
            displayAddPopup:false,
            ingredientId:''
        };

        this.deleteIngredient = this.deleteIngredient.bind(this);
    }

    deleteIngredient (id) {
        console.log(id);
        IngredientService.deleteIngredient(id).then (
            res => {
                this.setState({allIngredients:this.state.allIngredients.filter(ingredient => ingredient.id !== id)});
            }
        )
    }

    openAddPopup = () => {
        this.setState({displayAddPopup:true});
    }

    closeAddPopup = () => {
        this.setState({displayAddPopup:false});
        
    }

    componentDidMount(){
        IngredientService.getIngredients().then((respond) => {
            this.setState({allIngredients : (respond.data)});
            console.log(this.state.allIngredients);
        });
    }

    testPost(){
        IngredientService.postUsers();
    }

    handleClick (id,e){
        e.stopPropagation();
        this.setState({
            show:true,
        });
        this.setState({ingredientId:id});
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
                        <img className = "backButton" src = "/res/images/back.svg" onClick={()=>window.location.href="/staff/dashboard"}/>
                    </div>
                    <div className = "titleContainer" onClick={this.close}>
                        <img className = "rawMaterialIcon" src = "/res/images/material.svg" />
                        <h1 className = "title">Raw Materials</h1>
                    </div>

                    <div className = "ingredientContainer">
                        <div className = "tableContainer">
                            <table className = "ingredientTable">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Quantity(g)</th>
                                        <th>Price</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.allIngredients.map((row) =>(
                                        <tr
                                            key = {row.id}
                                        >
                                            <td>{row.name}</td>
                                            <td>{row.quantity}</td>
                                            <td>{row.price}</td>
                                            <td><button className="editButton" onClick={e => this.handleClick(row.id,e)}>Edit</button>
                                            {this.state.show && <EditIngredientComponent close = {this.close} id = {this.state.ingredientId}/>} </td>
                                            <td><button className="editButton" onClick = {() => this.deleteIngredient(row.id)}>Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button className="addIngredient" onClick={this.openAddPopup}>add</button>
                            {this.state.displayAddPopup && <IngredientPopupComponent closeAddPopup = {this.closeAddPopup} />}
                            
                        </div>
                    </div>
                </div>

                
            </>
        );
    }
}

export default IngredientComponent