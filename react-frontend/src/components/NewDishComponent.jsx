import React,{Component,useCallback} from "react";
import NewDishService from "../services/NewDishService";
import {useDropzone} from 'react-dropzone'
import { v4 as uuid } from 'uuid';


function MyDropzone({childToParent}) {
    const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    console.log(file);
    const formData = new FormData();
    formData.append("file",file);
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
    }
    
    childToParent(formData);
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
          <div id = "camera">
            <div className = "content top">
                <img className = "cameraImage" src="/res/images/cameraAlpha.png"/>
            </div>
          </div> :
            <div id = "camera">
                <div className = "content top">
                    <img className = "cameraImage" src="/res/images/camera.jpg"/>
                </div>
            </div>
        }
      </div>
    )
  }

class NewDishComponent extends Component{
 
    constructor(props){
        super(props)

        this.state = {
            name:'',
            price:'',
            kiloJoule : '',
            description:'',
            onion:'',
            beef:'',
            chicken:'',
            type:'',
            ingredients:[],
            typedComponents:{},
            checkCode:{},
            checkPrice:'',
            file:''
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);
        this.onionHandler = this.onionHandler.bind(this);
        this.beefHandler = this.beefHandler.bind(this);
        this.chickenHandler = this.chickenHandler.bind(this);
        this.saveDish = this.saveDish.bind(this);
        this.back = this.back.bind(this);
        this.childToParent = this.childToParent.bind(this);
    }
      
    childToParent = (childData) => {
        this.setState({file:childData});
    }
    
    componentDidMount(){
        NewDishService.getIngredients().then((respond) => {
            this.setState({ingredients : (respond.data)});
            console.log(typeof(this.state.ingredients));
            console.log((respond.data));
        });
    }

    saveDish = (e) =>{
        e.preventDefault();
        let components = this.state.typedComponents;
        var find = 0;
        let objectArr = Object.entries(components);
        console.log(components);
        console.log(objectArr);
        console.log(this.state.ingredients);
        for (var i = 0 ; i < this.state.ingredients.length;i++) {
            find = 0;
            for (var j = 0; j < objectArr.length;j++) {
                if (objectArr[j][0] === this.state.ingredients[i].name) {
                    find = 1;
                }
            }
            if (find == 0) { //staff does not give the input for this ingredient
                components[this.state.ingredients[i].name] = 0;
            }
        }
        const unique_id = uuid();
        let dish = {name:this.state.name,price:this.state.price,kiloJoule:this.state.kiloJoule,description:this.state.description,components,type:this.props.location.state,
        };
        console.log(typeof(unique_id));
        console.log(typeof(dish));
        console.log("dish=> " +JSON.stringify(dish));
        this.state.file.append("id",unique_id);
        for (var pair of this.state.file.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }

        NewDishService.sendImage(this.state.file).then(
            () => {
                console.log("successful");
            }).catch(err => {
                console.log(err.response.data);
            })
        NewDishService.createNewDIish(dish).then(res =>  {
        this.props.history.push('/staff/menu/' + this.props.location.state,this.props.location.state);
        });
        
    }
    
    nameHandler = (event) =>{
        this.setState({name:event.target.value});
    }

    priceHandler = (event) => {
        // let value = event.target.value.replace('^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$ 或 ^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$','')
        // this.setState({ checkPrice: value })
        this.setState({price:event.target.value});
    }

    descriptionHandler = (event) => {
        this.setState({description:event.target.value});
    }



    onionHandler(event,ingredient) {
        // let v = event.target.value.replace(/[^\d]/, '');
        // this.state.checkCode[ingredient.name] = v;
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
        this.props.history.push('/staff/menu/'+ this.props.location.state,this.props.location.state);
    }

    render(){
        return(
            <>
                <div>
                    <div>
                        <button onClick={this.back} className = "min" >
                        <img className = "backSign" src="/res/images/backSign.jpg"/>
                        </button>
                    </div>
                    
                    
                    <MyDropzone childToParent={this.childToParent}/> 
                    <div id= "editPart">    
                        <form>            
                        <div className = "content edit">
                            <h2>Name</h2>
                            <input className = "inputPart" type="text"  name = "name" 
                            value = {this.state.name} onChange={this.nameHandler}/>
                            <h2>Price</h2>
                            <input className = "inputPart" type="number"  name = "price"
                            value={this.state.price} onChange={this.priceHandler}/>
                            <h2>kiloJoule</h2>
                            <input className = "inputPart" type="number"  name = "kilojoule"
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
                                            <span className = "name">{ingredient.name}</span>
                                            <span className = "unit">g</span>
                                            <input className = "quantity" type="number" name = "onion"
                                             onChange={e => this.onionHandler(e,ingredient)}  />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div id = "saveButton"> <button className = "min"  onClick = {this.saveDish} id = "save" >Save</button></div>
                        </form> 
                        
                    </div>   
                </div>
            </>
        );
    }

}

export default NewDishComponent