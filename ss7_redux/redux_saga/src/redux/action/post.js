import {postService} from "../../service/postService";
import {CREATE_POST, GET_ALL_POST} from "./types";

export const getALlPost = () => async (dispatch) => {
    try {
        const res = await postService.findAll();
        dispatch({
            type: GET_ALL_POST,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const res = await postService.save(post)
        dispatch({
            type: CREATE_POST,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}