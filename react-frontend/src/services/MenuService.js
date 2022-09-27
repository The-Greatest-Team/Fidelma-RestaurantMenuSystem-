import axios from "axios";
import {API_URL} from "../constant";

const USERS_REST_API_URL = API_URL + '/staff/menu/';

class UserService{

    getUsers(type){
        console.log(USERS_REST_API_URL)
        return axios.get(USERS_REST_API_URL + type)
    }

    postUsers(type){
        return axios.post(USERS_REST_API_URL+type, "test");
    }
    
}

export default new UserService()