import axios from "axios";
import {API_HEROKU} from "../constant";

const USERS_REST_API_URL = API_HEROKU + '/staff/ingredient';

class IngredientService{

    getIngredients(){
        return axios.get(USERS_REST_API_URL)
    }

    postUsers(){
        return axios.post(USERS_REST_API_URL, "test");
    }

    getIngredientById(id) {
        return axios.get(USERS_REST_API_URL+'/' + id);
    }
    
    deleteIngredient(id) {
        return axios.delete(USERS_REST_API_URL+'/' + id);
    }

    editIngredient(ingredient,id) {
        return axios.put(USERS_REST_API_URL+'/'+id,ingredient);
    }
}

export default new IngredientService()