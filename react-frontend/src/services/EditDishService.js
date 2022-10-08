import axios from "axios";

const EDIT_REST_API_URL = 'http://localhost:8080/staff/menu/edit';

class EditDIshService{

    getDishById(dishId) {
        return axios.get(EDIT_REST_API_URL+'/'+dishId);
    }

    editDish(dish,dishId) {
        return axios.put(EDIT_REST_API_URL+'/'+dishId,dish);
    }

    changeImage(image,id) {
        return axios.put('http://localhost:8080/staff/menu/editImage'+'/' + id,image,{headers:{"Content-Type":"multipart/form-data"}});
    }
}

export default new EditDIshService()