import React from "react";
import NewDishService from "../services/NewDishService";

class NewDishComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            name:'',
            price:'',
            kiloJoule : '',
            description:'',
            onion:'',
            beef:'',
            chicken:''
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);
        this.onionHandler = this.onionHandler.bind(this);
        this.beefHandler = this.beefHandler.bind(this);
        this.chickenHandler = this.chickenHandler.bind(this);
        this.saveDish = this.saveDish.bind(this);
        this.back = this.back.bind(this);
    }  
    
 saveDish = (e) =>{
    e.preventDefault();
    let dish = {name:this.state.name,price:this.state.price,kiloJoule:this.state.kiloJoule,description:this.state.description,onion:this.state.onion,beef:this.state.beef,chicken:this.state.chicken};
    console.log("dish=> " +JSON.stringify(dish));
    NewDishService.createNewDIish(dish).then(res =>  {
        this.props.history.push('/staff/menu/chicken');
    });
 }
    
nameHandler = (event) =>{
    this.setState({name:event.target.value});
}

priceHandler = (event) => {
    this.setState({price:event.target.value});
}

descriptionHandler = (event) => {
    this.setState({description:event.target.value});
}

onionHandler = (event) => {
    this.setState({onion:event.target.value});
}

beefHandler = (event) => {
    this.setState({beef:event.target.value});
}

chickenHandler = (event) => {
    this.setState({chicken:event.target.value});
}


kjHandler = (event) => {
    this.setState({kiloJoule:event.target.value});
}

back(){
    this.props.history.push('/staff/menu/chicken');
}
    render(){
        return(
            <>
                <div>
                    <div>
                        <button className = "backButton" onClick={this.back}>
                        <img className = "backSign" src="/res/images/backSign.jpg"/>
                        </button>
                    </div>
                    
                    <div id = "camera">
                        <div className = "content top">
                            <img className = "cameraImage" src="/res/images/camera.jpg"/>
                        </div>
                    </div> 
                    <div id= "editPart">    
                        <form>            
                        <div className = "content edit">
                            <label>Name</label>
                            <input className = "inputPart" type="text" placeholder="Name" name = "name" 
                            value = {this.state.name} onChange={this.nameHandler}/>
                            <h2>Price</h2>
                            <input className = "inputPart" type="text" placeholder="Price" name = "price"
                            value = {this.state.price} onChange={this.priceHandler}/>
                            <h2>kiloJoule</h2>
                            <input className = "inputPart" type="text" placeholder="KilJoule" name = "kilojoule"
                            value = {this.state.kiloJoule} onChange={this.kjHandler}/>
                            <h2>Description</h2>
                            <textarea className = "inputPartSpecial" placeholder="Description" name = "description"
                            value = {this.state.description} onChange={this.descriptionHandler}></textarea>
                            <h2 className="ingredients">Ingredients 
                                <button  className="dropbtn hamburger hamburger-plus">
                                <img src="/res/images/backButton.jpg" className="icon icon-arrow" />
                                </button> </h2>
                            <div id="myDropdown" className="ingredientsList">
                                <div>
                                        <span className = "name">Onion</span>
                                        <span className = "unit">g</span>
                                        <input className = "quantity" type="text" placeholder="Onion Quantity" name = "onion"
                                        value = {this.state.onion} onChange={this.onionHandler}/>
                                        
                                    </div>
                                    <div>
                                        <span className = "name">Beef</span>
                                        <span className = "unit">g</span>
                                        <input className = "quantity" type="text" placeholder="Beef Quantity" name = "beef"
                                        value = {this.state.beef} onChange={this.beefHandler}/>
                                        
                                    </div>
                                    <div>
                                        <span className = "name">Chicken</span>
                                        <span className = "unit">g</span>
                                        <input className = "quantity" type="text" placeholder="Chicken Quantity" name = "chicken"
                                        value = {this.state.chicken} onChange={this.chickenHandler}/>
                                    </div>
                            </div>
                        </div>
                        <button className = "saveButton" onClick = {this.saveDish}>Save</button>
                        </form> 
                        
                    </div>   
                    <script type="text/javascript" src="/arrow_rotation.js"></script>
                </div>
            </>
        );
    }

}

export default NewDishComponent