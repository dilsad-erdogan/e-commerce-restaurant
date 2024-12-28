import axios from 'axios'
const ROLE = "http://localhost:3000/role"

const add = async (data) => {
    try{
        const response = await axios.post(`${ROLE}/set`, data);
        return response.data;
    } catch (error){
        console.error('Error adding role:', error);
        throw error;
    }
}

const get = async () => {
    try{
        const response = await axios.get(`${ROLE}/get`);
        return response.data;
    } catch (error){
        console.error('Error fetching role:', error);
        throw error;
    }
}

const byId = async (id) => {
    try{
        const response = await axios.get(`${ROLE}/getById/${id}`);
        return response.data;
    } catch (error){
        console.error('Error fetching role by id:', error);
        throw error;
    }
}

const updateName = async (id, data) => {
    try{
        const response = await axios.put(`${ROLE}/updateName/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating role time:', error);
        throw error;
    }
}

const deleted = async (id) => {
    try{
        const response = await axios.patch(`${ROLE}/delete/${id}`);
        return response.data;
    } catch (error){
        console.error('Error deleting role:', error);
        throw error;
    }
}

const roleServices = {
    add,
    get,
    byId,
    updateName,
    deleted
}

export default roleServices