import React from "react";
import StaffIncomeService from "../services/StaffIncomeService";

class StaffIncomeComponent extends React.Component{

    constructor(props){
        super(props)
    }

    testPost(){
        StaffIncomeService.postUsers();
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

export default StaffIncomeComponent