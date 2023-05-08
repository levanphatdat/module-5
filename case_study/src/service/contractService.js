import axios from "axios";

export const findAllContract = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/contracts`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const createContract = async (contract) => {
    try {
        await axios.post(`http://localhost:8080/contracts`, {...contract});
    } catch (error) {
        console.log(error)
    }
}
export const deleteContract = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/contracts/${id}`);
    } catch (error) {
        console.log(error)
    }
}
export const findAllFacilityContract = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/facilityContracts`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
}