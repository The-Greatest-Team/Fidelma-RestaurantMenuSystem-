import React from "react";
import CharacterService from "../services/CharacterService";

class CharacterComponent extends React.Component{

    constructor(props){
        super(props)
    }

    testPost(){
        CharacterService.postUsers();
    }

    render(){
        return(
            <>
                <div>
                    <div className = "characterTitle">
                        <h4>Which character do you want to test?</h4>
                    </div>
                    <div>
                        <button>I'm a customer</button>
                    </div>
                    <div>
                        <button>I'm a staff</button>
                    </div>
                </div>
            </>
        );
    }
}

export default CharacterComponent