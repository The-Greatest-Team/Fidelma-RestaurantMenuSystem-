import React,{Component} from "react";
import IngredientPopupService from "../services/IngredientPopupService";

class IngredientPopupComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:'',
            quantity:'',
            price:''
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.quantityHandler = this.quantityHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);
        this.saveIngredient = this.saveIngredient.bind(this);
    }
    
    nameHandler = (event) =>{
        this.setState({name:event.target.value});
    }

    quantityHandler = (event) =>{
        this.setState({quantity:event.target.value});
    }

    priceHandler = (event) =>{
        this.setState({price:event.target.value});
    }

    saveIngredient = (event) => {
        event.preventDefault();
        let ingredient = {name:this.state.name,quantity:this.state.quantity,price:this.state.price}
        console.log("ingredient=> " +JSON.stringify(ingredient));
        IngredientPopupService.postIngredients(ingredient).then(res => {
            this.props.closeAddPopup();
            window.location.reload()
        });

    }

    render() {
        return (
            <form>
                <div className="addPopup">
                    <h2 className="addPopupTitle" >Adding new ingredient  <button className="closeAddPopup" onClick={this.props.closeAddPopup}>x</button></h2>
                    

                    <h3 className="addPopupSubTtile">name</h3>
                    <input className="addPopupInput" type="text"
                    value = {this.state.name} onChange={this.nameHandler} />

                    <h3 className="addPopupSubTtile">Quantity</h3>
                    <input className="addPopupInput" type="number"
                    value = {this.state.quantity} onChange={this.quantityHandler} />

                    <h3 className="addPopupSubTtile">Price</h3>
                    <input className="addPopupInput" type="number"
                    value = {this.state.price} onChange={this.priceHandler} />

                    <button className = "addPopupSubmitButton" onClick = {this.saveIngredient}>Submit</button>
                </div>
            </form>
        )
        
    }
}

export default IngredientPopupComponent