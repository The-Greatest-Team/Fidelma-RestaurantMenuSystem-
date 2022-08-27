import React from "react";
import IngredientService from "../services/IngredientService";

class IngredientComponent extends React.Component{
    constructor(props){
        super(props)

        this.state = {foods : []}
    }

    render(){
        return(
            <>
                <form>
                    <button onClick={this.testPost}>Click me!</button>
                </form>
            </>
        );
    }
}