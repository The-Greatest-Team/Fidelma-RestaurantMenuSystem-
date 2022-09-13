import axios from "axios";

const USERS_REST_API_URL = 'http://localhost:8080/submitPage';

class SubmitService{

    getUsers(){
        return axios.get(USERS_REST_API_URL)
    }

    postUsers(){
        return axios.post(USERS_REST_API_URL, "test");
    }
    
}

export default new SubmitService()