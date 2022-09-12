import React from "react";


class CustomerMainMenuComponent extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
        return(
            <>
                <div>
                    <div className="menuHead">
                        <img id="menuPic" src="/res/images/menuBackground.jpg" alt="menu picture" />
                        <img className="logo" src="/res/images/projectIcon.png" alt="logo" />
                        
                    </div>

                    <div id ="menuBox"><span id="menuWord">menu</span></div>
                    <div className="nav">
                        <input name="returnBtn" type="image" onClick={()=>window.location.href="/staff/dashboard"} src="/res/images/arrow.png" alt="return button icon" />
                        <span>Table No.</span>
                    </div>

                    <div>
                        <h2 id = "mainMenuChickenHead"> Chicken </h2>  {/* waiting for backend for finish functions*/}
                        <hr className="separateLine"/>
                        <img className = "mainMenuPic" src="/res/images/chicken2.jpg" alt="menu picture"/>
                        <div className = "mainMenuDescription">Description.</div>
                        <button className = "mainMenuEnterButton" onClick={()=>this.props.history.push("/customer/menu/" + "chicken","chicken")}>View more</button>
                        <hr id = "mainMenuBooomLine" className="separateLine"/>
                    </div>
                    <div>
                        <h2 id = "mainMenuChickenHead"> Beef </h2>  {/* waiting for backend for finish functions*/}
                        <hr className="separateLine"/>
                        <img className = "mainMenuPic" src="/res/images/beef1.jpg" alt="menu picture"/>
                        <div className = "mainMenuDescription">Description.</div>
                        <button className = "mainMenuEnterButton" onClick={()=>this.props.history.push("/customer/menu/" + "beef","beef")}>View more</button>
                        <hr id = "mainMenuBooomLine" className="separateLine"/>
                    </div>
                </div>
            </>
        );
    }

}

export default CustomerMainMenuComponent