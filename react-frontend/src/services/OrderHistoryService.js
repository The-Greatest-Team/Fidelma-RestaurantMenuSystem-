import axios from "axios";

const ORDERS_REST_API_URL = 'http://localhost:8080/staff/allOrders';

class OrderHistoryService{

    getOrders(){
        return axios.get(ORDERS_REST_API_URL);
    }

    deleteOrder(orderId) {
        return axios.delete('http://localhost:8080/staff/deleteOrder'+'/' + orderId);
    }

    postComplete(orderId) {
        return axios.post('http://localhost:8080/staff/completeOrder'+'/' + orderId);
    }
}

export default new OrderHistoryService()