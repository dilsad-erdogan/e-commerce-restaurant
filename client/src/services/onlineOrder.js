import axios from 'axios'
const ONLINEORDER = "http://localhost:3000/onlineOrder"

const add = async (data) => {
    try{
        const response = await axios.post(`${ONLINEORDER}/set`, data);
        return response.data;
    } catch (error){
        console.error('Error adding online order:', error);
        throw error;
    }
}

const get = async () => {
    try{
        const response = await axios.get(`${ONLINEORDER}/get`);
        return response.data;
    } catch (error){
        console.error('Error fetching online order:', error);
        throw error;
    }
}

const byId = async (id) => {
    try{
        const response = await axios.get(`${ONLINEORDER}/getById/${id}`);
        return response.data;
    } catch (error){
        console.error('Error fetching online order by id:', error);
        throw error;
    }
}

const updateStatus = async (id, data) => {
    try{
        const response = await axios.put(`${ONLINEORDER}/updateStatus/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating online order time:', error);
        throw error;
    }
}

const deleted = async (id) => {
    try{
        const response = await axios.patch(`${ONLINEORDER}/delete/${id}`);
        return response.data;
    } catch (error){
        console.error('Error deleting online order:', error);
        throw error;
    }
}

const onlineOrderServices = {
    add,
    get,
    byId,
    updateStatus,
    deleted
}

export default onlineOrderServices