import React from "react";
import StaffIncomeService from "../services/StaffIncomeService";

class StaffIncomeComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            income:'100,000',
        }
    }

    testPost(){
        StaffIncomeService.postUsers();
    }

    render(){
        return(
            <>
                <div>
                    <div className = "incomeHead">
                        <img className = "historyBackIcon" src="/res/images/back.svg" onClick={()=>window.location.href="/staff/dashboard"}/>
                        <h4>Total Income</h4>
                        <hr className = "historySeparateLine"/>
                    </div>
                    <div className = "incomeIconContainer">
                        <img src="/res/images/income.png" />
                        <h4>My Income:</h4>
                    </div>
                    <div className = "totalIncome">
                        <h4><strong>${this.state.income}</strong></h4>
                    </div>
                    <div className = "withdrawContainer">
                        <button className = "withdrawButton">Withdraw</button>
                    </div>

                </div>
            </>
        );
    }
}

export default StaffIncomeComponent