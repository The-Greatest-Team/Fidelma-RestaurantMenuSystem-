import React from "react";
import SubmitService from "../services/SubmitService";

class SubmitComponent extends React.Component{

    constructor(props){
        super(props)
    }

    testPost(){
        SubmitService.postUsers();
    }

    render(){
        return(
            <>
                <div>
                    
                </div>
            </>
        );
    }
}

export default SubmitComponent