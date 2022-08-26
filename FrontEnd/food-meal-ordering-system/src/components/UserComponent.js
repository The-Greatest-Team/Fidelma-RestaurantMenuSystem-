import React from "react";
import UserService from "../services/UserService";

class UserComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {users : []}
    }

    componentDidMount(){
        UserService.getUsers().then((respond) => {
            this.setState({users : respond.data })
            console.log(this.state.users);
        });
    }

    render(){
        return(null
        );
    }

}

export default UserComponent