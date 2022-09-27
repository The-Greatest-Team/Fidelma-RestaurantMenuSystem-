import axios from "axios";
import {API_URL} from "../constant";

const USERS_REST_API_URL = API_URL + '/staff/ingredient';

class IngredientService{

    getIngredients(){
        return axios.get(USERS_REST_API_URL)
    }

    postIngredients(ingredient){
        return axios.post(USERS_REST_API_URL,ingredient);
    }
    
}

export default new IngredientService()