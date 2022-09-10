import axios from "axios";

const DISH_REST_API_URL = 'http://localhost:8080/staff/menu/newDish';

class NewDIshService{

    getIngredients(){
        return axios.get(DISH_REST_API_URL)
    }

    createNewDIish(dish) {
        return axios.post(DISH_REST_API_URL,dish)
    }

    deleteDish(dishId) {
        return axios.delete(DISH_REST_API_URL+'/' + dishId);
    }
    
}

export default new NewDIshService()