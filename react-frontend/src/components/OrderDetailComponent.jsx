import React,{Component} from "react";
import IngredientPopupService from "../services/IngredientPopupService";
import IngredientService from "../services/IngredientService";

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
            <div className="orderDetails">
                <div className="detailHead">
                    <img className = "historyBackIcon" src="/res/images/back.svg" onClick={()=>window.location.href="/staff/orderHistory"}/>
                   <h4>Order Details</h4>
                    <hr className = "historySeparateLine"/>
                </div>
                   
                    {   
                        this.state.details.map((detail) => (
                            <div className="foodDetails"><span>{detail[1][2]}</span> <span>{detail[1][0]}</span> <span>${detail[1][1]*detail[1][0]}</span></div>
                        ))
                        
                        }

                    <h5>Comment</h5>
                    <div className="orderComment">{this.props.location.state.name}</div>
            </div>
          
        )
        
    }
}

export default OrderDetailComponent