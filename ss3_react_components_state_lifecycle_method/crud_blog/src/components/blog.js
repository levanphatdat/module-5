import React, {useEffect, useState} from "react";
import {findAllPosts} from "../service/blogService";

export default function ListBlog() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const list = async () => {
            setPosts(await findAllPosts());
        }
        list();
    }, [])
    return (
        <div className={"container-fluid"}>
            <h1 className={"d-flex justify-content-center"}>List Posts</h1>
            <table className={"table"}>
                <thead className={"table-dark"}>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>TIME</th>
                    <th>ACTIONS</th>
                </tr>
                </thead>
                <tbody className={"table-light"}>
                {
                    posts.map((post, index) => (
                        <tr key={index}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.category}</td>
                            <td>{post.updatedAt}</td>
                            <td>
                                <button type="button" className="btn btn-primary mx-3">Edit</button>
                                <button type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}