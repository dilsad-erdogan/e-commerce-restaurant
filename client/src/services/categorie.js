import axios from 'axios'
const CATEGORIE = "http://localhost:3000/categorie"

const add = async (data) => {
    try{
        const response = await axios.post(`${CATEGORIE}/set`, data);
        return response.data;
    } catch (error){
        console.error('Error adding categorie:', error);
        throw error;
    }
}

const get = async () => {
    try{
        const response = await axios.get(`${CATEGORIE}/get`);
        return response.data;
    } catch (error){
        console.error('Error fetching categorie:', error);
        throw error;
    }
}

const byId = async (id) => {
    try{
        const response = await axios.get(`${CATEGORIE}/getById/${id}`);
        return response.data;
    } catch (error){
        console.error('Error fetching categorie by id:', error);
        throw error;
    }
}

const updateName = async (id, data) => {
    try{
        const response = await axios.put(`${CATEGORIE}/updateName/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating categorie time:', error);
        throw error;
    }
}

const updateDescription = async (id, data) => {
    try{
        const response = await axios.put(`${CATEGORIE}/updateDescription/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating categorie time:', error);
        throw error;
    }
}

const updateImage = async (id, data) => {
    try{
        const response = await axios.put(`${CATEGORIE}/updateImage/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating categorie time:', error);
        throw error;
    }
}

const deleted = async (id) => {
    try{
        const response = await axios.patch(`${CATEGORIE}/delete/${id}`);
        return response.data;
    } catch (error){
        console.error('Error deleting categorie:', error);
        throw error;
    }
}

const categorieServices = {
    add,
    get,
    byId,
    updateName,
    updateDescription,
    updateImage,
    deleted
}

export default categorieServices