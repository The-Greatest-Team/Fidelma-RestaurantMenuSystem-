import Axios from "axios";
import React from "react";
import LoginService from "../services/LoginService";

class LoginComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            username:'',
            password:'',
        }
        this.usernameHandler = this.usernameHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
    }  

    usernameHandler = (event) =>{
        this.setState({username:event.target.value});
    }

    passwordHandler = (event) =>{
        this.setState({password:event.target.value});
    }

    save(event){

    }


    render(){
        return(
            <>
                <div className = "loginMain">
                    <div className = "orderHead">
                        <img className="logo" src="/res/images/projectIcon.png" alt="logo" />
                    </div>
                    <div className = "storeName">
                        <span id="loginStoreName">Fidelma</span>
                    </div>
                    <div className = "staffLogin">
                        <h4><strong>Username</strong></h4>
                        <div className = "loginInputContainer">
                            <input className = "loginInput" value = {this.state.username} onChange={this.usernameHandler}/>
                        </div>
                        {/* <hr className = "orderSeparateLine"/> */}
                    </div>
                    <div className = "staffLogin">
                        <h4><strong>Password</strong></h4>
                        <div className = "loginInputContainer">
                            <input className = "loginInput" type="password" value = {this.state.password} onChange={this.passwordHandler}/>
                        </div>
                        {/* <hr className = "orderSeparateLine"/> */}
                    </div>
                    <div className = "loginContainer">
                        {/* <button className = "loginButton" onClick = {this.save}>Log in</button> */}
                        <button className = "loginButton" onClick = {()=>window.location.href="/staff/dashboard"}>Log in</button>
                    </div>
                </div>
            </>
        );
    }
}

export default LoginComponent