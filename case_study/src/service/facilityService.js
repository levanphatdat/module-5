import axios from "axios";

export const findAllFacility = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/facilities`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
}