import axios from "axios";

const findAll = () => {
    return axios.get(`https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts`);
}
const save = (post) => {
    return axios.post(`https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts`, post);
}
export const postService = {
    findAll, save
}