import React from "react";
import DescriptionService from "../services/DescriptionService";

class DescriptionComponent extends React.Component{

    constructor(props){
        super(props)
    }

    testPost(){
        DescriptionService.postUsers();
    }

    render(){
        return(
            <>
                <div>
                    <div className = "dishHead">
                        <h4><strong>Classic Beef Burger</strong></h4>
                    </div>
                    <div className = "photoContainer">
                        <img className = "dishPhoto" src="/res/images/beef3.jpg"/>
                    </div>
                    <hr className = "dishSeparateLine"/>
                    <div className = "descriptionContainer">
                        <div className = "descriptionTitle">
                            <h4><strong>Classic Beef Burger</strong></h4>
                            <h4 className = "dishPrice">$11.80</h4>
                        </div> 
                        <div className = "descriptionContent">
                            <p>Grain-fed beef patties with fresh tomatoes, onions and lettuce.</p>
                        </div>
                    </div>
                    <div className = "dishIngredient">
                        <h4 className = "descriptionTitle">Ingredients:</h4>
                        <p className = "allIngredient">Beef patties, Onions, Fresh tomato, Lettuce, Salts</p>
                    </div>
                    <div className = "dishQuantity">

                    </div>
                </div>
            </>
        );
    }
}

export default DescriptionComponent