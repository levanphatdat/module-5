import React, {useEffect, useState} from "react";
import {deletePost, findAllPosts, getPost} from "../service/blogService";
import {Link} from "react-router-dom";

export function ListPost() {
    const [posts, setPosts] = useState([]);
    const [postData, setPostData] = useState();
    useEffect(() => {
        const list = async () => {
            setPosts(await findAllPosts());
        }
        list();
    }, [])
    const getData = async (id) => {
        setPostData(await getPost(id))
    }
    const handleDelete = async () => {
        await deletePost(postData.id)
        alert("Delete post complete !!!")
        setPosts(await findAllPosts());
    }
    return (
        <div className={"container-fluid"}>
            <h1 className={"d-flex justify-content-center"}>List Posts</h1>
            <Link to={"/create"} className={"btn btn-success my-3"}>Add new post</Link>
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
                            <td><Link to={`/detail/${post.id}`} className={"deleteLink"}>{post.title}</Link></td>
                            <td>{post.category}</td>
                            <td>{post.updatedAt}</td>
                            <td>
                                <Link to={`/edit/${post.id}`} className="btn btn-primary mx-3">Edit</Link>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => getData(post.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <>
                {/* Modal */}
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Delete Post
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">Do you want delete <span
                                className={"text-danger"}>{postData?.title}</span>?
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" onClick={() => handleDelete()} className="btn btn-danger"
                                        data-bs-dismiss="modal">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}