import axios from "axios";
import {API_HEROKU, API_URL} from "../constant";

const USERS_REST_API_URL = API_HEROKU + '/staff/menu/';

class UserService{

    getUsers(type){
        console.log(USERS_REST_API_URL + type)
        return axios.get(USERS_REST_API_URL + type)
    }

    postUsers(type){
        return axios.post(USERS_REST_API_URL+type, "test");
    }
    
}

export default new UserService()