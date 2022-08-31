import axios from "axios";

const DISH_REST_API_URL = 'http://localhost:8080/staff/menu';

class NewDIshService{

    getDishes(){
        return axios.get(DISH_REST_API_URL)
    }

    createNewDIish(dish) {
        return axios.post(DISH_REST_API_URL,dish)
    }
    
}

export default new NewDIshService()