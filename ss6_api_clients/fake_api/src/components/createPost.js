import React from "react";
import * as Yup from "yup";
import slugify from "slugify";
import {createPost} from "../service/postService";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function CreatePost() {
    const navigate = useNavigate();
    return (
        <div className={"container-fluid row"}>
            <div className={"col-4"}/>
            <div className={"col-4"}><h1 className={"d-flex justify-content-center my-3"}>Create New Post</h1>
                <Formik initialValues={{
                    title: "",
                    category: "",
                    content: ""
                }}
                        validationSchema={
                            Yup.object({
                                title: Yup.string().required("Title is required."),
                                category: Yup.string().required("Category is required."),
                                content: Yup.string().required("Content is required.")
                            })
                        }
                        onSubmit={(post => {
                            const create = async () => {
                                const slug = slugify(post.title, {lower: true, strict: true})
                                await createPost({...post, slug})
                            }
                            create()
                            alert("Create post complete")
                            navigate('/');
                        })}>

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
                            <Field name={"category"} id={"category"} type={"text"}
                                   className="form-control"/>
                            <ErrorMessage name={"category"} component={"span"} className={"text-danger"}/>
                        </div>
                        <div>
                            <label htmlFor="content" className={"fw-bold mt-3"}>
                                Content
                            </label>
                            <Field name={"content"} id={"content"} type={"text"} className="form-control"/>
                            <ErrorMessage name={"content"} component={"span"} className={"text-danger"}/>
                        </div>
                        <Link to={"/"} className={"btn btn-secondary ms-3 my-3 float-end"}>Cancle</Link>
                        <button type={"submit"} className="btn btn-primary mt-3 float-end">Submit</button>
                    </Form>
                </Formik>
            </div>
            <div className={"col-4"}/>
        </div>

    )
}