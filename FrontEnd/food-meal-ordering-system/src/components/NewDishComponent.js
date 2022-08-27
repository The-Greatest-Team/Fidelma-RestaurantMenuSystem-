import React from "react";
import NewDishService from "../services/NewDishService";

class NewDishComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {users : []}
    }

    componentDidMount(){
        NewDishService.getUsers().then((respond) => {
            this.setState({users : respond.data })
            console.log(this.state.users);
        });
    }

    testPost(){
        NewDishService.postUsers();
    }
    
    myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");

        window.onClick = function(event) {
            if (!event.target.matches('.dropbtn')) {
          
              var dropdowns = document.getElementsByClassName("ingredientsList");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }
    }


    
    

    render(){
        return(
            <>
                <div>
                    
                    

                    <div>
                        <img className = "backSign" src="/res/images/backSign.jpg"/>
                    </div>
                    
                    <div id = "camera">
                        <div className = "content top">
                            <img className = "cameraImage" src="/res/images/camera.jpg"/>
                        </div>
                    </div> 
                    <form>
                    <div id= "editPart">
                    <button onClick={this.testPost()}>save</button>
                        <div className = "content edit">
                            <h2>Name</h2>
                            <input className = "inputPart" type="text"/>
                            <h2>Price</h2>
                            <input className = "inputPart" type="text"/>
                            <h2>Description</h2>
                            <textarea className = "inputPartSpecial"></textarea>
                            <h2 className="ingredients">Ingredients 
                                <button  className="dropbtn hamburger hamburger-plus">
                                <img src="/res/images/backButton.jpg" className="icon icon-arrow" />
                                </button> </h2>
                            <div id="myDropdown" className="ingredientsList">
                                    <div>
                                        <span className = "name">Onion</span>
                                        <span className = "unit">g</span>
                                        <input className = "quantity" type="text"/>
                                        
                                    </div>
                                    <div>
                                        <span className = "name">Beef</span>
                                        <span className = "unit">g</span>
                                        <input className = "quantity" type="text"/>
                                        
                                    </div>
                                    <div>
                                        <span className = "name">Chicken</span>
                                        <span className = "unit">g</span>
                                        <input className = "quantity" type="text"/>
                                    </div>
                            </div>
                        </div>
                        
                    </div> 
                    </form>    
                    <script type="text/javascript" src="/arrow_rotation.js"></script>
                </div>
            </>
        );
    }

}

export default NewDishComponent