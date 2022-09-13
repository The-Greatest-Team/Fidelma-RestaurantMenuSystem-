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
                    <div className="introTitle">
                        <h3>Welcome ^^</h3>
                        <p>Created by The Greatest Team</p>
                    </div>
                    <div className = "characterTitle">
                        <h4>Which character do you want to test?</h4>
                    </div>
                    <div className = "characterContainer">
                        <button className = "characterButton"
                        onClick={()=>this.props.history.push("/enterPage",this.props.location.state)}
                        >I'm a customer</button>
                    </div>
                    <div className = "characterContainer">
                        <button className = "characterButton"
                        onClick={()=>this.props.history.push("/staff/dashboard",this.props.location.state)}
                        >I'm a staff</button>
                    </div>
                    <div className = "characterTitle">
                        <p>Copyright © 2022 COMP30022</p>
                    </div>
                    
                </div>
            </>
        );
    }
}

export default CharacterComponent