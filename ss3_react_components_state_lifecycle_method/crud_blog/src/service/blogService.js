import axios from "axios";

export const findAllPosts = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/posts`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const createPost = async (post) => {
    try {
        await axios.post(`http://localhost:8080/posts`, {...post});
    } catch (error) {
        console.log(error)
    }
}
export const editPost = async (post) => {
    try {
        await axios.put(`http://localhost:8080/posts/${post.id}`, {...post});
    } catch (error) {
        console.log(error)
    }
}
export const getPost = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/posts/${id}`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const deletePost = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/posts/${id}`)
    } catch (error) {
        console.log(error)
    }
}