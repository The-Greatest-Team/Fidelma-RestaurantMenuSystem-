import axios from "axios";

const USERS_REST_API_URL = 'http://localhost:8080/staff/menu/';

class UserService{

    getUsers(type){
        return axios.get(USERS_REST_API_URL + type)
    }

    postUsers(type){
        return axios.post(USERS_REST_API_URL+type, "test");
    }
    
}

export default new UserService()