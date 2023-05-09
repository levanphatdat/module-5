import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getALlPost} from "../redux/action/post";
import {Link} from "react-router-dom";

export function ListPost() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    useEffect(() => {
        dispatch(getALlPost())
    }, [dispatch])
    return (
        <div className={"container-fluid"}>
            <h1 className={"d-flex justify-content-center my-3"}>List Posts</h1>
            <Link to={'/create'} className={"btn btn-primary float-end mx-5 mb-4"}>Create</Link>
            <table className={"table table-bordered text-center"}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Slug</th>
                    <th>Category</th>
                    <th>Thumbnail URL</th>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map((post, index) => (
                        <tr key={index}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.slug}</td>
                            <td>{post.category}</td>
                            <td className={"text-start"}>{post.thumbnail_url}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>

    )
}