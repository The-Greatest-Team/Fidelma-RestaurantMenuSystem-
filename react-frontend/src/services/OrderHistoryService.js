import axios from "axios";
import {API_HEROKU} from "../constant";

const ORDERS_REST_API_URL = API_HEROKU + '/staff/orderHistory';

class OrderHistoryService{

    getOrders(){
        return axios.get(ORDERS_REST_API_URL);
    }

    deleteOrder(orderId) {
        return axios.delete(API_HEROKU + '/staff/deleteOrder'+'/' + orderId);
    }

    postComplete(orderId) {
        return axios.post(API_HEROKU + '/staff/completeOrder'+'/' + orderId);
    }
}

export default new OrderHistoryService()