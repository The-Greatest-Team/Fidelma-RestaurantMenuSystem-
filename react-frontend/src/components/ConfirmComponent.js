import React from "react";
import ConfirmService from "../services/ConfirmService";

class ConfirmComponent extends React.Component{

    constructor(props){
        super(props)
    }

    testPost(){
        ConfirmService.postUsers();
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

export default ConfirmComponent