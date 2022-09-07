import axios from "axios";

const EDIT_REST_API_URL = 'http://localhost:8080/staff/menu/edit';

class EditDIshService{

    getDishById(dishId) {
        return axios.get(EDIT_REST_API_URL+'/'+dishId);
    }

    editDish(dish,dishId) {
        return axios.put(EDIT_REST_API_URL+'/'+dishId,dish);
    }
}

export default new EditDIshService()