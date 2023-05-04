import axios from "axios";

export const findAllContract = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/contract`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
}