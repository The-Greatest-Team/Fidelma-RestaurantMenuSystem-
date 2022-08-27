import axios from "axios";

const USERS_REST_API_URL = 'http://localhost:8080/staff/menu/chicken';

class UserService{

    getUsers(){
        return axios.get(USERS_REST_API_URL)
    }

    // postUsers(data){
    //     return axios.post(USERS_REST_API_URL, data);
    // }
    
}

export default new UserService()