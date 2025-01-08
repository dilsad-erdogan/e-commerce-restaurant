import axios from 'axios'
const ORDER = "http://localhost:3000/order"

const add = async (data) => {
    try{
        const response = await axios.post(`${ORDER}/set`, data);
        return response.data;
    } catch (error){
        console.error('Error adding order:', error);
        throw error;
    }
}

const get = async () => {
    try{
        const response = await axios.get(`${ORDER}/get`);
        return response.data;
    } catch (error){
        console.error('Error fetching order:', error);
        throw error;
    }
}

const getActive = async () => {
    try{
        const response = await axios.get(`${ORDER}/getActive`);
        return response.data;
    } catch (error){
        console.error('Error fetching order:', error);
        throw error;
    }
}

const getActiveOrdersByTableId = async (tableId) => {
    try {
      const response = await axios.get(`${ORDER}/active/${tableId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching active orders:", error);
      throw error;
    }
}

const byId = async (id) => {
    try{
        const response = await axios.get(`${ORDER}/getById/${id}`);
        return response.data;
    } catch (error){
        console.error('Error fetching order by id:', error);
        throw error;
    }
}

const updateTable = async (id, data) => {
    try{
        const response = await axios.put(`${ORDER}/updateTable/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating order time:', error);
        throw error;
    }
}

const updateProducts = async (id, data) => {
    try{
        const response = await axios.put(`${ORDER}/updateProducts/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating order time:', error);
        throw error;
    }
}

const updateStatus = async (id, data) => {
    try{
        const response = await axios.put(`${ORDER}/updateStatus/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating order time:', error);
        throw error;
    }
}

const updatePrice = async (id, data) => {
    try{
        const response = await axios.put(`${ORDER}/updatePrice/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating order time:', error);
        throw error;
    }
}

const deleted = async (id) => {
    try{
        const response = await axios.patch(`${ORDER}/delete/${id}`);
        return response.data;
    } catch (error){
        console.error('Error deleting order:', error);
        throw error;
    }
}

const orderServices = {
    add,
    get,
    getActive,
    getActiveOrdersByTableId,
    byId,
    updateTable,
    updateProducts,
    updateStatus,
    updatePrice,
    deleted
}

export default orderServices