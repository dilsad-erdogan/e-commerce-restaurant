import axios from 'axios'
const USER = "http://localhost:3000/user"

const register = async (userData) => {
    try{
        const response = await axios.post(`${USER}/register`, userData);
        return response.data;
    } catch(error) {
        console.error('Register error:', error);
        throw error.response.data;
    }
}

const login = async (userData) => {
    try{
        const response = await axios.post(`${USER}/login`, userData);
        return response.data;
    } catch (error){
        console.error('Login error:', error);
        throw error.response.data;
    }
}

const get = async () => {
    try{
        const response = await axios.get(`${USER}/get`);
        return response.data;
    } catch (error){
        console.error('Error fetching product:', error);
        throw error;
    }
}

const byId = async (id) => {
    try{
        const response = await axios.get(`${USER}/getById/${id}`);
        return response.data;
    } catch (error){
        console.error('Error fetching product by id:', error);
        throw error;
    }
}

const updateRole = async (id, data) => {
    try{
        const response = await axios.put(`${USER}/updateRole/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating product time:', error);
        throw error;
    }
}

const updateName = async (id, data) => {
    try{
        const response = await axios.put(`${USER}/updateName/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating product time:', error);
        throw error;
    }
}

const updateEmail = async (id, data) => {
    try{
        const response = await axios.put(`${USER}/updateEmail/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating product time:', error);
        throw error;
    }
}

const updatePassword = async (id, data) => {
    try{
        const response = await axios.put(`${USER}/updatePassword/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating product time:', error);
        throw error;
    }
}

const deleted = async (id) => {
    try{
        const response = await axios.patch(`${USER}/delete/${id}`);
        return response.data;
    } catch (error){
        console.error('Error deleting product:', error);
        throw error;
    }
}

const userServices = {
    register,
    login,
    get,
    byId,
    updateRole,
    updateName,
    updateEmail,
    updatePassword,
    deleted
}

export default userServices