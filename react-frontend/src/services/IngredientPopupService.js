import axios from "axios";

const USERS_REST_API_URL = 'http://localhost:8080/staff/ingredient';

class IngredientService{

    getIngredients(){
        return axios.get(USERS_REST_API_URL)
    }

    postIngredients(ingredient){
        return axios.post(USERS_REST_API_URL,ingredient);
    }
    
}

export default new IngredientService()