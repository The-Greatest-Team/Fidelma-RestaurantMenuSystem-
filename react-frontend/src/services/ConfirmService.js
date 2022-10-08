import axios from "axios";

const USERS_REST_API_URL = 'http://localhost:8080/confirmPage';

class ConfirmService{

    getUsers(){
        return axios.get(USERS_REST_API_URL)
    }

    postUsers(){
        return axios.post(USERS_REST_API_URL, "test");
    }
    
}

export default new ConfirmService()