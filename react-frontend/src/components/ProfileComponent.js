import React from "react";
import ProfileService from "../services/ProfileService";

class ProfileComponent extends React.Component{

    constructor(props){
        super(props)
    }

    testPost(){
        ProfileService.postUsers();
    }

    render(){
        return(
            <>
                <div>
                    <h1>profile</h1>
                </div>
            </>
        );
    }
}

export default ProfileComponent