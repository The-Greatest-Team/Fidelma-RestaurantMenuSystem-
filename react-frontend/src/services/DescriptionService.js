import axios from "axios";
import {API_HEROKU, API_URL} from "../constant";

const USERS_REST_API_URL = API_HEROKU+ '/customer/foodDes';

class DescriptionService{

    getUsers(id){
        return axios.get(USERS_REST_API_URL+'/'+id)
    }
    
}

export default new DescriptionService()