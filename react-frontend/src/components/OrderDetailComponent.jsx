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
        
        let objectArr = Object.entries(this.props.location.state.cart);
        this.setState({details:objectArr});
        console.log(this.state.details);
    }
    


    render() {
        return (
            <div>
                   <img className = "historyBackIcon" src="/res/images/back.svg" onClick={()=>window.location.href="/staff/orderHistory"}/>
                   <h4>Order Summary</h4>
                    <hr className = "historySeparateLine"/>
                    {   
                        this.state.details.map((detail) => (
                            <div><span>{detail[1][2]}</span> <span>{detail[1][0]}</span> <span>${detail[1][1]*detail[1][0]}</span></div>
                        ))
                        
                        }

                    <h5>Comment</h5>
                    <div>{this.props.location.state.name}</div>
            </div>
          
        )
        
    }
}

export default OrderDetailComponent