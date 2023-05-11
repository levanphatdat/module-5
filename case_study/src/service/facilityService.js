import axios from "axios";

export const findAllFacility = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/facilities`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const findAllRentalType = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/rentalTypes`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const findAllTypeRoom = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/typeRooms`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const findAllAccompaniedService = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/accompaniedServices`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const createFacility = async (facility) => {
    try {
        await axios.post(`http://localhost:8080/facilities`, {...facility})
    } catch (error) {
        console.log(error)
    }
}
export const editFacility = async (facility) => {
    try {
        await axios.put(`http://localhost:8080/facilities/${facility.id}`, {...facility})
    } catch (error) {
        console.log(error)
    }
}
export const deleteFacility = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/facilities/${id}`)
    } catch (error) {
        console.log(error)
    }
}
export const findFacilityById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/facilities/${id}`)
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const getFacility = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/facilities/${id}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
export const findFacilityByName = async (name) => {
    try {
        const facility = await axios.get(`http://localhost:8080/facilities?name_like=${name}`);
        return facility.data;
    } catch (error) {
        console.log(error)
    }
}