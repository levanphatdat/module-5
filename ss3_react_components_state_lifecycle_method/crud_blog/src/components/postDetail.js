import React, {useEffect, useState} from "react";
import {getPost} from "../service/blogService";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

export function PostDetail() {
    const [postData, setPostData] = useState();
    const param = useParams();
    useEffect(() => {
        const data = async () => {
            setPostData(await getPost(param.id))
        }
        data();
    }, [param.id]);
    if (!postData) {
        return null
    }
    return (
        <div className={"container"}>
            <h1 className={"d-flex justify-content-center"}>Post Detail</h1>
            <table className={"table"}>
                <tbody>
                <tr>
                    <th style={{width: "12%"}}>ID:</th>
                    <td>{postData.id}</td>
                </tr>
                <tr>
                    <th>Title:</th>
                    <td>{postData.title}</td>
                </tr>
                <tr>
                    <th>Slug:</th>
                    <td>{postData.slug}</td>
                </tr>
                <tr>
                    <th>Category:</th>
                    <td>{postData.category}</td>
                </tr>
                <tr>
                    <th>Content:</th>
                    <td>{postData.content}</td>
                </tr>
                <tr>
                    <th>Time:</th>
                    <td>{postData.updatedAt}</td>
                </tr>
                <tr>
                    <th>Author:</th>
                    <td>{postData.author}</td>
                </tr>
                <tr>
                    <th>Author Email:</th>
                    <td>{postData.authorEmail}</td>
                </tr>
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
                <Link to="/" className="btn btn-primary my-3">Back to List Posts</Link>
            </div>
        </div>
    )
}