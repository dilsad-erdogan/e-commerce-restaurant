import axios from 'axios'
const TABLE = "http://localhost:3000/table"

const add = async (data) => {
    try{
        const response = await axios.post(`${TABLE}/set`, data);
        return response.data;
    } catch (error){
        console.error('Error adding table:', error);
        throw error;
    }
}

const get = async () => {
    try{
        const response = await axios.get(`${TABLE}/get`);
        return response.data;
    } catch (error){
        console.error('Error fetching table:', error);
        throw error;
    }
}

const byId = async (id) => {
    try{
        const response = await axios.get(`${TABLE}/getById/${id}`);
        return response.data;
    } catch (error){
        console.error('Error fetching table by id:', error);
        throw error;
    }
}

const updateName = async (id, data) => {
    try{
        const response = await axios.put(`${TABLE}/updateName/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating table time:', error);
        throw error;
    }
}

const updateNumber = async (id, data) => {
    try{
        const response = await axios.put(`${TABLE}/updateNumber/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating table time:', error);
        throw error;
    }
}

const updateRate = async (id, data) => {
    try{
        const response = await axios.put(`${TABLE}/updateRate/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating table time:', error);
        throw error;
    }
}

const deleted = async (id) => {
    try{
        const response = await axios.patch(`${TABLE}/delete/${id}`);
        return response.data;
    } catch (error){
        console.error('Error deleting table:', error);
        throw error;
    }
}

const tableServices = {
    add,
    get,
    byId,
    updateName,
    updateNumber,
    updateRate,
    deleted
}

export default tableServices