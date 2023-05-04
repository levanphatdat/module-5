import axios from "axios";

export const findAllCustomer = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/customers`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const findAllCustomerType = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/customerTypes`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const findAllGender = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/genders`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
}