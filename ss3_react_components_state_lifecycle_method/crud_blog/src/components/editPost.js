import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {editPost, getPost} from "../service/blogService";
import slugify from "slugify";
import {Link, useNavigate, useParams} from "react-router-dom";

export function EditPost() {
    const date = new Date();
    const updatedAt = date.getHours() + ":" + date.getMinutes() + " " + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    const navigate = useNavigate();
    const [postData, setPostData] = useState();
    const param = useParams();
    useEffect(() => {
        const data = async () => {
            setPostData(await getPost(param.id));
        }
        data()
    }, [param.id]);
    if (!postData) {
        return null;
    }
    return (
        <div className={"container-fluid row"}>
            <div className={"col-4"}></div>
            <div className={"col-4"}><h1 className={"d-flex justify-content-center"}>Add New Post</h1>
                <Formik initialValues={{
                    id: postData?.id,
                    title: postData?.title,
                    category: postData?.category,
                    content: postData?.content,
                    updatedAt: updatedAt
                }}
                        validationSchema={
                            Yup.object({
                                title: Yup.string().required("Title is required."),
                                category: Yup.string().required("Category is required."),
                                content: Yup.string().required("Content is required.")
                            })
                        }
                        onSubmit={post => {
                            const edit = async () => {
                                const slug = slugify(post.title, {lower: true, strict: true})
                                await editPost({...post, slug})
                            }
                            edit()
                            alert("Edit post complete !!!")
                            navigate("/");
                        }}>
                    <Form>
                        <div>
                            <label htmlFor="title" className={"fw-bold mt-3"}>
                                Title
                            </label>
                            <Field name={"title"} id={"title"} type={"text"} className="form-control"/>
                            <ErrorMessage
                                name="title"
                                component="span"
                                className="text-danger"
                            /></div>
                        <div>
                            <label htmlFor="category" className={"fw-bold mt-3"}>
                                Category
                            </label>
                            <Field name={"category"} id={"category"} type={"text"} className="form-control"/>
                            <ErrorMessage name={"category"} component={"span"} className={"text-danger"}/>
                        </div>
                        <div>
                            <label htmlFor="content" className={"fw-bold mt-3"}>
                                Content
                            </label>
                            <Field name={"content"} id={"content"} type={"text"} className="form-control"/>
                            <ErrorMessage name={"content"} component={"span"} className={"text-danger"}/>
                        </div>
                        <Link to={"/"} className={"btn btn-danger ms-3 my-3 float-end"}>Back to List</Link>
                        <button type={"submit"} className="btn btn-primary mt-3 float-end">Submit</button>
                    </Form>
                </Formik></div>
            <div className={"col-4"}></div>
        </div>
    )
}