import React from "react";
import UserService from "../services/UserService";

class UserComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {foods : []}
    }

    componentDidMount(){
        UserService.getUsers().then((respond) => {
            this.setState({foods : respond.data })
            console.log(this.state.foods);
        });
    }

    testPost(){
        UserService.postUsers();
    }

    render(){
        return(
            <>
                <form>
                    <button onClick={this.testPost}>Click me!</button>
                </form>
            </>
        );
    }

}

export default UserComponent