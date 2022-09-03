import React,{Component} from "react";
import NewDishService from "../services/NewDishService";

class NewDishComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            id:this.props.match.params.id,
            name:'',
            price:'',
            kiloJoule : '',
            description:'',
            ingredients:[],
            onion:'',
            beef:'',
            chicken:'',
            element:'',
            num:0
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
    let components = {onion:this.state.onion, beef:this.state.beef, chicken:this.state.chicken};
    let dish = {name:this.state.name,price:this.state.price,kiloJoule:this.state.kiloJoule,description:this.state.description,components};
    console.log("dish=> " +JSON.stringify(dish));

    // if id is -1,it is add new dish page,if not, it is the update page
    if (this.state.id === '_chickenadd'){
        NewDishService.createNewDIish(dish).then(res =>  {
            this.props.history.push('/staff/menu/chicken');
        });
    }else if (this.props.location.state ==="chicken"){
        NewDishService.updateDish(dish,this.state.id).then(res => {
            this.pros.history.push("/staff/menu/chicken");
        })
    }

    
 }

 componentDidMount(){
    // if id is -1,it is add new dish page,if not, it is the update page
    if (this.state.id === '_chickenadd'){
        return
    }else { //get value from backend
        NewDishService.getDishById(this.state.id).then((res) => {
            let dish = res.data;
            this.setState({name:dish.name,
                           price: dish.price,
                           kiloJoule:dish.kiloJoule,
                           description:dish.description
                            })
        })
    }
    
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
    this.setState({element:event.target.value});
    this.state.ingredients[this.state.num++] = this.state.element;
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

back = (e) => {
    e.preventDefault();
    this.props.history.push('/staff/menu/chicken');
}

getTitle(){
    if(this.state.id === '_chickenadd') {
        return <h2>adding new dish</h2>
    }else if (this.props.location.state ==="chicken") {
        return <h2>updating</h2>
    }
}
    render(){
        return(
            <>
                <div  >
                    <div>
                        <button onClick={this.back} className = "min" >
                        <img className = "backSign" src="/res/images/backSign.jpg"/>
                        </button>
                    </div>
                    {
                        this.getTitle()
                    }
                    <div id = "camera">
                        <div className = "content top">
                            <img className = "cameraImage" src="/res/images/camera.jpg"/>
                        </div>
                    </div> 
                    <div id= "editPart">    
                        <form>            
                        <div className = "content edit">
                            <h2>Name</h2>
                            <input className = "inputPart" type="text"  name = "name" 
                            value = {this.state.name} onChange={this.nameHandler}/>
                            <h2>Price</h2>
                            <input className = "inputPart" type="text"  name = "price"
                            value = {this.state.price} onChange={this.priceHandler}/>
                            <h2>kiloJoule</h2>
                            <input className = "inputPart" type="text"  name = "kilojoule"
                            value = {this.state.kiloJoule} onChange={this.kjHandler}/>
                            <h2>Description</h2>
                            <textarea className = "inputPartSpecial"  name = "description"
                            value = {this.state.description} onChange={this.descriptionHandler}></textarea>
                            <h2 className="ingredients">Ingredients 
                                <button  className="min">
                                <img src="/res/images/backButton.jpg" className="icon icon-arrow" />
                                </button> </h2>
                            <div id="myDropdown" className="ingredientsList">
                                {
                                    this.state.ingredients.map(
                                        ingredient => 
                                        <div key = {ingredient.name}>
                                            <span className = "name"> {ingredient.name} </span>
                                            <span className = "unit">g</span>
        
                                            <input className = "quantity" type="text"  name = "ingredient"
                                            value = {this.state.element} onChange={this.onionHandler}/>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div id = "saveButton"> <button className = "min"  onClick = {this.saveDish} id = "save" >Save</button></div>
                        </form> 
                        
                    </div>   
                    <script type="text/javascript" src="/arrow_rotation.js"></script>
                </div>
            </>
        );
    }

}

export default NewDishComponent

{/* <div>
                                    <span className = "name">Onion</span>
                                    <span className = "unit">g</span>
                                    <input className = "quantity" type="text"  name = "onion"
                                    value = {this.state.onion} onChange={this.onionHandler}/>
                                        
                                </div>
                                <div>
                                    <span className = "name">Beef</span>
                                    <span className = "unit">g</span>
                                    <input className = "quantity" type="text"  name = "beef"
                                    value = {this.state.beef} onChange={this.beefHandler}/>
                                        
                                </div>
                                <div>
                                    <span className = "name">Chicken</span>
                                    <span className = "unit">g</span>
                                    <input className = "quantity" type="text"  name = "chicken"
                                    value = {this.state.chicken} onChange={this.chickenHandler}/>
                                </div> */}