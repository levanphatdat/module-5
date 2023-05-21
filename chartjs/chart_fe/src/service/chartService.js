import axios from 'axios';

export const listAll = () => {
    try {
        const result =  axios.get(`http://localhost:8080/charts`);
        return result;
    } catch(error){
        console.log(error);
    }
};