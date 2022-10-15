import axios from "axios";
import {API_HEROKU} from "../constant";

const USERS_REST_API_URL = API_HEROKU + '/staff/menu/';

class UserService{

    getUsers(type){
        return axios.get(USERS_REST_API_URL  + type)
    }

    postUsers(type){
        return axios.post(USERS_REST_API_URL+  + type, "test");
    }
    
}

export default new UserService()