import React,{Component} from "react";
import EditDishService from "../services/EditDishService";

class EditDishComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            id:this.props.match.params.id,
            name:'',
            price:'',
            kiloJoule : '',
            description:'',
            onion:'',
            beef:'',
            chicken:'',
            type:'',
            ingredients:[],
            typedComponents:{}
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);
        this.onionHandler = this.onionHandler.bind(this);
        this.beefHandler = this.beefHandler.bind(this);
        this.chickenHandler = this.chickenHandler.bind(this);
        this.editDish = this.editDish.bind(this);
        this.back = this.back.bind(this);
    }  
    
    componentDidMount(){
        EditDishService.getDishById(this.state.id).then((respond) => {
            let dish = respond.data;
            console.log(typeof(dish.components));
            console.log(dish.components);
            let objectArray = Object.entries(dish.components);
            this.setState({ingredients : objectArray});
            console.log(objectArray);
        });
    }

    editDish = (e) =>{
        e.preventDefault();
        let components = this.state.typedComponents;
        if (this.props.location.state.type === "chicken") {
            let dish = {name:this.state.name,price:this.state.price,kiloJoule:this.state.kiloJoule,description:this.state.description,components,type:"chicken"};
            console.log("dish=> " +JSON.stringify(dish));
            EditDishService.editDish(dish,this.state.id).then( res=> {
                this.props.history.push('/staff/menu/chicken');
            });

        }else {
            let dish = {name:this.state.name,price:this.state.price,kiloJoule:this.state.kiloJoule,description:this.state.description,components};
            console.log("dish=> " +JSON.stringify(dish));
            EditDishService.editDish(dish,this.state.id).then( res=> {
                this.props.history.push('/staff/dashboard');
            });
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

onionHandler(event,ingredient) {
    var key = ingredient.name;
    var value = event.target.value;
    this.state.typedComponents[key] = value;
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
    console.log(this.props.location.state)
    if (this.props.location.state.type === 'chicken') {
        
        this.props.history.push('/staff/menu/chicken');
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
                    <h2>updating</h2>
                    
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
                            placeholder = {this.props.location.state.name} onChange={this.nameHandler}/>
                            <h2>Price</h2>
                            <input className = "inputPart" type="text"  name = "price"
                            placeholder = {this.props.location.state.price} onChange={this.priceHandler}/>
                            <h2>kiloJoule</h2>
                            <input className = "inputPart" type="text"  name = "kilojoule"
                            placeholder = {this.props.location.state.kiloJoule} onChange={this.kjHandler}/>
                            <h2>Description</h2>
                            <textarea className = "inputPartSpecial"  name = "description"
                            placeholder = {this.props.location.state.description} onChange={this.descriptionHandler}></textarea>
                            <h2 className="ingredients">Ingredients 
                                <button  className="min">
                                <img src="/res/images/backButton.jpg" className="icon icon-arrow" />
                                </button> </h2>
                            <div id="myDropdown" className="ingredientsList">
                                {/* <div>
                                        <span className = "name">Onion</span>
                                        <span className = "unit">g</span>
                                        <input className = "quantity" type="text"  name = "onion"
                                         onChange={this.onionHandler}/>
                                        
                                    </div>
                                    <div>
                                        <span className = "name">Beef</span>
                                        <span className = "unit">g</span>
                                        <input className = "quantity" type="text"  name = "beef"
                                         onChange={this.beefHandler}/>
                                        
                                    </div>
                                    <div>
                                        <span className = "name">Chicken</span>
                                        <span className = "unit">g</span>
                                        <input className = "quantity" type="text"  name = "chicken"
                                         onChange={this.chickenHandler}/>
                                    </div> */}
                                {
                                    this.state.ingredients.map(
                                         ingredient =>
                                        <div key = {ingredient[0]}>
                                            <span className = "name">{ingredient[0]}</span>
                                            <span className = "unit">g</span>
                                            <input className = "quantity" type="text"  name = "onion"
                                            placeholder = {ingredient[1]} onChange={e => this.onionHandler(e,ingredient)}/>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div id = "saveButton"> <button className = "min"  onClick = {this.editDish} id = "save" >Save</button></div>
                        </form> 
                        
                    </div>   
                </div>
            </>
        );
    }

}

export default EditDishComponent