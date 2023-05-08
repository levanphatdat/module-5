import React, {useEffect, useState} from "react";
import {findAll} from "../service/postService";
import {Link} from "react-router-dom";

export function ListPost() {
    const [listPost, setListPost] = useState([]);
    useEffect(() => {
        const list = async () => {
            setListPost(await findAll())
        }
        list()
    }, []);
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
                    listPost.map((post, index) => (
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