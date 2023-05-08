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
export const createCustomer = async (customer) => {
    try {
        const result = await axios.post(`http://localhost:8080/customers`, {...customer})
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const editCustomer = async (customer) => {
    try {
        const result = await axios.put(`http://localhost:8080/customers/${customer.id}`, {...customer})
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const deleteCustomer = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8080/customers/${id}`)
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const findCustomerById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/customers/${id}`)
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const getCustomer = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/customers/${id}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};