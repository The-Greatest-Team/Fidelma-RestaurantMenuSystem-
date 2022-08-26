import React from "react";
import UserService from "../services/UserService";

class UserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {user : []}
    }

    componentDidMount(){
        UserService.getUsers().then((respond) => {
            this.setState({users : respond.data })
            console.log(respond.data)
        });
        console.log(this.state);
    }

    render(){
        return(
            <div>{
                this.state.user.map(
                    user => {
                        <>
                        <div>{user.firstname}</div>
                        <div>{user.id} </div>
                        </>
                    }
                )
                }
            </div>
        );
    }

}

export default UserComponent