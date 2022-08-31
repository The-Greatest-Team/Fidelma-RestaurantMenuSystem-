import React from "react";
import UserService from "../services/DashboardService";

class DashboardComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {foods : []}
    }

    testPost(){
        UserService.postUsers();
    }

    render(){
        return(
            <>
                <div>
                    <div className="dashboardHeader">
                        <img className = "dashboardImg" src = "/res/images/staff.svg" alt = "staff" />
                        <div className = "staffName">
                            <h1>Wendi YING</h1>
                            <button className = "editButton">Edit Profile</button>
                        </div>
                    </div>
                    <div className = "dashboardBar">
                        <div className = "dashboardContent">
                            <img className = "dashboardIcon" src = "/res/images/money.svg" alt = "money" />
                            <h2>Total Income</h2>
                        </div>
                    </div>
                    <div className = "dashboardBar">
                        <div className = "dashboardContent">
                            <img className = "dashboardIcon" src = "/res/images/order.svg" alt = "order" />
                            <h2>Order Summary</h2>
                        </div>
                    </div>
                    <div className = "dashboardBar" onClick={()=>window.location.href="/staff/ingredient"}>
                        <div className = "dashboardContent">
                            <img className = "dashboardIcon" src = "/res/images/material.svg" alt = "material" />
                            <h2>Raw Materials</h2>
                        </div>
                    </div>
                    <div className = "dashboardBar" onClick={()=>window.location.href="/staff/menu/chicken"}>
                        <div className = "dashboardContent">
                            <img className = "dashboardIcon" src = "/res/images/menu.svg" alt = "menu" />
                            <h2>Menu</h2>
                        </div>
                    </div>

                </div>
            </>
        );
    }

}

export default DashboardComponent