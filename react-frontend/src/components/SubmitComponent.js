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
                    <div className = "submitHead">
                        <h4>Fidelma</h4>
                    </div>
                    <div className = "orderHead">
                        <img className="logo" src="/res/images/projectIcon.png" alt="logo" />
                    </div>
                    <div className = "thanks">
                        <h5>Thanks for shopping in Fidelma</h5>
                    </div>
                    <div className = "orderHead">
                        <img className="logo" src="/res/images/submit.png" />
                    </div>
                    <div className = "success">
                        <h5>Your order is submitted to reception</h5>
                        <h5>Please go to reception and pay you order!</h5>
                        <p>Copyright © 2022 Fidelma</p>
                    </div>
                    
                </div>
            </>
        );
    }
}

export default SubmitComponent