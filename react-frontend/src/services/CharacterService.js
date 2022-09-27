import axios from "axios";
import {API_URL} from "../constant";

const USERS_REST_API_URL = API_URL;

class CharacterService{

    getUsers(){
        return axios.get(USERS_REST_API_URL)
    }

    postUsers(){
        return axios.post(USERS_REST_API_URL, "test");
    }
    
}

export default new CharacterService()