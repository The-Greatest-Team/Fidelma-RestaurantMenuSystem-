import axios from "axios";
import {API_URL} from "../constant";

const EDIT_REST_API_URL = API_URL + '/staff/menu/edit';

class EditDIshService{

    getDishById(dishId) {
        return axios.get(EDIT_REST_API_URL+'/'+dishId);
    }

    editDish(dish,dishId) {
        return axios.put(EDIT_REST_API_URL+'/'+dishId,dish);
    }

    changeImage(image,id) {
        return axios.put(API_URL + '/staff/menu/editImage'+'/' + id,image,{headers:{"Content-Type":"multipart/form-data"}});
    }
}

export default new EditDIshService()