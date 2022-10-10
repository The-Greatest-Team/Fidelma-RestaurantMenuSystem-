import axios from "axios";

const ORDERS_REST_API_URL = 'http://localhost:8080/staff/allOrders';

class OrderHistoryService{

    getOrders(){
        return axios.get(ORDERS_REST_API_URL);
    }
}

export default new OrderHistoryService()