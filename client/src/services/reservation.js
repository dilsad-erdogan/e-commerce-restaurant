import axios from 'axios'
const RESERVATION = "http://localhost:3000/reservation"

const add = async (data) => {
    try{
        const response = await axios.post(`${RESERVATION}/set`, data);
        return response.data;
    } catch (error){
        console.error('Error adding reservation:', error);
        throw error;
    }
}

const get = async () => {
    try{
        const response = await axios.get(`${RESERVATION}/get`);
        return response.data;
    } catch (error){
        console.error('Error fetching reservation:', error);
        throw error;
    }
}

const byId = async (id) => {
    try{
        const response = await axios.get(`${RESERVATION}/getById/${id}`);
        return response.data;
    } catch (error){
        console.error('Error fetching reservation by id:', error);
        throw error;
    }
}

const updateConfirmation = async (id, data) => {
    try{
        const response = await axios.put(`${RESERVATION}/updateConfirmation/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating reservation:', error);
        throw error;
    }
}

const deleted = async (id) => {
    try{
        const response = await axios.patch(`${RESERVATION}/delete/${id}`);
        return response.data;
    } catch (error){
        console.error('Error deleting reservation:', error);
        throw error;
    }
}

const reservationServices = {
    add,
    get,
    byId,
    updateConfirmation,
    deleted
}

export default reservationServices