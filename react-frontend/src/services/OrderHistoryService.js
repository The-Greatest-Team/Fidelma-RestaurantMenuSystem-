import axios from "axios";
import {API_HEROKU} from "../constant";

const ORDERS_REST_API_URL = API_HEROKU;

class OrderHistoryService{

    getOrders(){
        return axios.get(ORDERS_REST_API_URL);
    }

    deleteOrder(orderId) {
        return axios.delete(ORDERS_REST_API_URL + '/staff/deleteOrder'+'/' + orderId);
    }

    postComplete(orderId) {
        return axios.post(ORDERS_REST_API_URL + '/staff/completeOrder'+'/' + orderId);
    }
}

export default new OrderHistoryService()