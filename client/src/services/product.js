import axios from 'axios'
const PRODUCT = "http://localhost:3000/product"

const add = async (data) => {
    try{
        const response = await axios.post(`${PRODUCT}/set`, data);
        return response.data;
    } catch (error){
        console.error('Error adding product:', error);
        throw error;
    }
}

const get = async () => {
    try{
        const response = await axios.get(`${PRODUCT}/get`);
        return response.data;
    } catch (error){
        console.error('Error fetching product:', error);
        throw error;
    }
}

const byId = async (id) => {
    try{
        const response = await axios.get(`${PRODUCT}/getById/${id}`);
        return response.data;
    } catch (error){
        console.error('Error fetching product by id:', error);
        throw error;
    }
}

const updateCatId = async (id, data) => {
    try{
        const response = await axios.put(`${PRODUCT}/updateCatId/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating product time:', error);
        throw error;
    }
}

const updateName = async (id, data) => {
    try{
        const response = await axios.put(`${PRODUCT}/updateName/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating product time:', error);
        throw error;
    }
}

const updateDescription = async (id, data) => {
    try{
        const response = await axios.put(`${PRODUCT}/updateDescription/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating product time:', error);
        throw error;
    }
}

const updatePrice = async (id, data) => {
    try{
        const response = await axios.put(`${PRODUCT}/updatePrice/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating product time:', error);
        throw error;
    }
}

const updateImage = async (id, data) => {
    try{
        const response = await axios.put(`${PRODUCT}/updateImage/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating product time:', error);
        throw error;
    }
}

const deleted = async (id) => {
    try{
        const response = await axios.patch(`${PRODUCT}/delete/${id}`);
        return response.data;
    } catch (error){
        console.error('Error deleting product:', error);
        throw error;
    }
}

const productServices = {
    add,
    get,
    byId,
    updateCatId,
    updateName,
    updateDescription,
    updatePrice,
    updateImage,
    deleted
}

export default productServices