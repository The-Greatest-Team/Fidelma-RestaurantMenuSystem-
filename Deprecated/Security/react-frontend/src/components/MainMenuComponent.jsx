import React from "react";


class MainMenuComponent extends React.Component{

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
                        {/* <span>Table No.</span> */}
                    </div>

                    <div>
                        <h2 id = "mainMenuChickenHead"> Beef </h2>  {/* waiting for backend for finish functions*/}
                        <hr className="separateLine"/>
                        <div className = "menuGridContainer">
                            <div className = "menuPic">
                                <img className = "mainMenuPic" src="/res/images/beef1.jpg" alt="menu picture"/>
                            </div>
                            <div className = "menuDes">
                                <div className = "mainMenuDescription">100% Australian grain-fed beef, paired with selected fresh vegetables and delicious sauces,
                                can bring you the ultimate dining experience.</div>
                            </div>
                            <div className = "menuView">
                                <button className = "mainMenuEnterButton" data-testid = "beefButton" onClick={()=>this.props.history.push("/staff/menu/" + "beef","beef")}>View more</button>
                            </div>
                        </div>
                        <hr id = "mainMenuBooomLine" className="separateLine"/>
                    </div>
                    
                    <div>
                        <h2 id = "mainMenuChickenHead"> Chicken </h2>  {/* waiting for backend for finish functions*/}
                        <hr className="separateLine"/>
                        <div className = "menuGridContainer">
                            <div className = "menuPic">
                                <img className = "mainMenuPic" src="/res/images/chicken2.jpg" alt="menu picture"/>
                            </div>
                            <div className = "menuDes">
                                <div className = "mainMenuDescription">High-quality chicken is chosen from family farms. 100% natual and hormone free.</div>
                            </div>
                            <div className = "menuView">
                            <button className = "mainMenuEnterButton" data-testid = "chickenButton" onClick={()=>this.props.history.push("/staff/menu/" + "chicken","chicken")}>View more</button>
                            </div>
                        </div>
                        <hr id = "mainMenuBooomLine" className="separateLine"/>
                    </div>
                    
                </div>
            </>
        );
    }

}

export default MainMenuComponent