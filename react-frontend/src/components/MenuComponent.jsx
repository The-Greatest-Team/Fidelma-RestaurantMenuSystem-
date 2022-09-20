import React from "react";
import MenuService from "../services/MenuService";
import NewDishService from "../services/NewDishService";
import axios from "axios";
import ReactDOM from 'react-dom';

class MenuComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {foods : [],foodImages:[],imageDic:{}};
        this.deleteDish = this.deleteDish.bind(this);
        // this.requestImage = this.requestImage.bind(this);
    }


    deleteDish(id) {
        axios.delete("http://localhost:8080/staff/menu/deleteImage/" + id,id).then(
            res => {
                console.log(id);
                this.setState({foodImages:this.state.foodImages.filter(foodImage => foodImage.id !== id)});
                var newOne = {};
                for (var i = 0; i < this.state.foodImages.length;i++) {
                    newOne[this.state.foodImages[i].id] = this.state.foodImages[i].image.data;
                }
                this.setState({imageDic:newOne});
                console.log(this.state.foodImages);
                console.log(this.state.imageDic);
            }
        )
        
        NewDishService.deleteDish(id).then(
            res => {
                this.setState({foods:this.state.foods.filter(food => food.id !== id)});
                console.log(this.state.foods);
            }
            
        )
        
        
    }

    componentDidMount() {
        // console.log("running?");
        // axios.get('http://localhost:8080/staff/menu/image').then((respond) => {
        //     this.setState({foodImages: respond.data});
        //     for (var i = 0; i < this.state.foodImages.length; i++) {
        //         this.state.imageDic[this.state.foodImages[i].id] = this.state.foodImages[i].image.data;
        //     }
        // })
        MenuService.getUsers(this.props.location.state).then((respond) => {
            this.setState({foods: (respond.data)});
        });

        // for (var i = 0 ; i < this.state.foodImages.length;i++) {
        //     for (var j = 0; j < this.state.foods.length;j++) {
        //         if (this.state.foodImages[i].id == this.state.foods[j].id) {
        //             this.state.foods[j].image = this.state.foodImages[i].image.data;
        //         }
        //     }
        // }

    }

    accessEditingMode(){
        let editBtn =  document.getElementById("editBtn");
        let addBtnAreas = document.getElementsByClassName("addDishArea");
        let delBtns = document.getElementsByClassName("delDishBtn");
        let updateButton = document.getElementsByClassName("updateButton");
        if (editBtn.innerHTML === "Edit"){
            editBtn.innerHTML = "Editing";
            document.getElementById("addMoreButton").style.display = "flex";
            
            for(let i = 0; i < addBtnAreas.length; i++){
                addBtnAreas[i].style.display = "none"
                delBtns[i].style.display = "block"
                updateButton[i].style.display = "block"
            }

        } else {
            editBtn.innerHTML = "Edit";
            document.getElementById("addMoreButton").style.display = "None";

            for(let i = 0; i < addBtnAreas.length; i++){
                addBtnAreas[i].style.display = "block"
                delBtns[i].style.display = "none"
                updateButton[i].style.display = "none"
            }
        }
    };

    async editDish(dish) {
        await this.props.history.push(`/staff/menu/edit/${dish.id}`,dish);
    }

    capitalizeFirst (str) {
        if (!str) {
            return "s";
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    test() {
        console.log(this.state.imageDic);
        console.log(this.state.foods);
    }

    test2(id) {
        console.log(id);
        console.log(this.state.imageDic[id]);
    }

    createDish(type) {
        this.props.history.push("/staff/menu/newDish",type);
        
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
                        <input name="returnBtn" type="image" onClick={()=>window.location.href="/staff/mainMenu"} src="/res/images/arrow.png" alt="return button icon" />
                        <span>Table No.16</span>
                    </div>
                    <div className="innerMenuContainer">
                        <div className = "menuTitle">
                            <h2 id = "menuTitleWord">{
                            
                                this.capitalizeFirst(this.props.location.state)
                            
                            }</h2>
                        </div>
                        <button id="editBtn" type="button" onClick={this.accessEditingMode}>Edit</button>
                    </div>

                    
                    {this.test()}
                    <div>
                        {this.state.foods.map((dish) => (
                            <div className="foodUnit" key={dish.id}>
                           <hr className="separateLine"/>
                            <div className="foodBox">
                                {this.test2(dish.id)}
                                
                                {this.state.imageDic[dish.id] !== undefined && <img src={`http://localhost:8080/staff/menu/image/${dish.id}`} />}
                                {/* <img src="/res/images/bigMacChickenBurger.png" alt="Big Mac Chicken Burger picture" /> */}
                                
                                <div className="textBox">
                                    <div className="burgerName">{dish.name}</div>
                                    <div className="burgerDesc">{dish.description}</div>
                                    <div className="burgerOthers">
                                        <div className="burgerJoules">{dish.kiloJoule}KJ</div>
                                        <div className="burgerPrice">${dish.price}</div>
                                    </div>
                                </div>
                                {
                                    dish.soldOut === false &&
                                    <input className="addDishBtn addDishArea" name="addDishBtn" type="image" src="/res/images/addButton.png" alt="add button icon"/>
                                }
                                {
                                    dish.soldOut === true &&
                                    <div className="soldOutDiv addDishArea">Sold Out</div>
                                }
                                <button onClick = {() => this.deleteDish(dish.id)}><input className="delDishBtn" name="delDishBtn" type="image" src="/res/images/deleteButton.png" alt="delete button icon" /></button>
                                <button onClick = {()=> this.editDish(dish)} className = 'updateButton'> Update</button>                            </div>
                        </div>
                        ))}
                    </div>
                    <button id="addMoreButton" onClick={()=>this.createDish(this.props.location.state)}>Add more dish</button>
                </div>
            </>
        );
    }

}

export default MenuComponent