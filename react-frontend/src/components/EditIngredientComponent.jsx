import React,{Component} from "react";
import IngredientPopupService from "../services/IngredientPopupService";
import IngredientService from "../services/IngredientService";
import BackDrop from "./BackDrop";

class EditIngredientComponent extends Component {
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
    
    componentDidMount(){
        console.log(this.props.id);
        IngredientService.getIngredientById(this.props.id).then( (res) => {
            let ingredient = res.data;
           
            this.setState({
                name : ingredient.name,
                quantity : ingredient.quantity,
                price: ingredient.price    
            });
        });
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
        IngredientService.editIngredient(ingredient,this.props.id).then(res => {
            this.props.close();
            window.location.reload();
        });

    }

    render() {
        return (
            <React.Fragment>
            <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
            <form>
                <div className="addPopup">
                    <h2 className="addPopupTitle" >Adding new ingredient  <button className="closeAddPopup" onClick = {this.props.close}>x</button></h2>
                    

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
            </React.Fragment>
        )
        
    }
}

export default EditIngredientComponent