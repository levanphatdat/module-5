import axios from "axios";

export const findALl = async (title, category) => {
    try {
        const result = await axios.get(`http://localhost:8080/books?title_like=${title}&category_like=${category}`)
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const findAllCategory = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/category`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const createBook = async (book) => {
    try {
        await axios.post(`http://localhost:8080/books`, {...book});
    } catch (error) {
        console.log(error)
    }
}
export const editBook = async (book) => {
    try {
        await axios.put(`http://localhost:8080/books/${book.id}`, {...book});
    } catch (error) {
        console.log(error)
    }
}
export const getBookById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/books/${id}`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const deleteBook = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/books/${id}`);
    } catch (error) {
        console.log(error)
    }
}