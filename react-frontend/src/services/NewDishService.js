import axios from "axios";

const DISH_REST_API_URL = 'http://localhost:8080/staff/NewDish';

class NewDIshService{

    getDishes(){
        return axios.get(DISH_REST_API_URL)
    }

    createNewDIish(dish) {
        return axios.post(DISH_REST_API_URL,dish)
    }
    
    getDishById(dishId){
        return axios.post(DISH_REST_API_URL+'/'+dishId)
    }

    updateDish(dish,dishId){
        return axios.put(DISH_REST_API_URL+'/'+dishId,dish)
    }
}

export default new NewDIshService()