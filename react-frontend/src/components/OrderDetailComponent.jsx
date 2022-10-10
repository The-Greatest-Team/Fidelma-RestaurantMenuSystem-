import React,{Component} from "react";
import IngredientPopupService from "../services/IngredientPopupService";
import IngredientService from "../services/IngredientService";
import BackDropForOrder from "./BackDropForOrder";

class OrderDetailComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            details:[]
        }
    }
    
    componentDidMount() {
        let objectArr = Object.entries(this.props.detail);
        this.setState({details:objectArr });
        console.log(this.state.details);
    }
    


    render() {
        return (
            <React.Fragment>
            <BackDropForOrder show={this.props.show} clicked={this.props.modalClosed} />
            <div className="editPopup">
                    <h2 className="editPopupTitle" >Order Details<button className="closeAddPopup" onClick = {this.props.close}>x</button></h2>
                    {   
                        this.state.details.map((detail) => (
                            <div><span>{detail[0][1]}</span> <span>{detail[1][0]}</span> <span>{detail[1][1]}</span></div>
                        ))
                        
                        }
            </div>
            {/* <form>
                <div className="editPopup">
                    <h2 className="editPopupTitle" >Editing ingredient  <button className="closeAddPopup" onClick = {this.props.close}>x</button></h2>
                    

                    <h3 className="editPopupSubTtile1">Name</h3>
                    <input className="editPopupInput1" type="text" maxLength = "15"
                    value = {this.state.name} onChange={this.nameHandler} />
                    {this.test()}
                    {this.state.name && !(/^[a-zA-Z]*$/).test(this.state.name) && <span className="errorEdit" data-testid="error-msg-name">Please enter a valid name.</span>}
                    
                    <h3 className="editPopupSubTtile2">Quantity</h3>
                    <input className="editPopupInput2" type="number" min = "0" max = "99999999"
                    value = {this.state.quantity} onChange={this.quantityHandler} />
                    {this.state.quantity && (this.state.quantity < 0 || this.state.quantity > 99999999) &&<span className="errorEdit" data-testid="error-msg-quantity">Please enter a valid quantity.</span>} 

                    <h3 className="editPopupSubTtile3">Price</h3>
                    <input className="editPopupInput3" type="number" min = "0" max = "99999"
                    value = {this.state.price} onChange={this.priceHandler} />
                    {this.state.price && (this.state.price < 0 || this.state.price > 99999) && <span className="errorEdit" data-testid="error-msg-price">Please enter a valid price.</span>} 

                    <button className = "editPopupSubmitButton" onClick = {this.saveIngredient}>Submit</button>
                </div>
            </form> */}
            </React.Fragment>
        )
        
    }
}

export default OrderDetailComponent