import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {editBook, findAllCategory, getBookById} from "../service/bookService";
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";

export function EditBook() {
    const navigate = useNavigate()
    const [categoryList, setCategoryList] = useState([]);
    const [book, setBook] = useState();
    const param = useParams();
    useEffect(() => {
        const list = async () => {
            setCategoryList(await findAllCategory())
        }
        list()
    }, [])
    useEffect(() => {
        const data = async () => {
            setBook(await getBookById(param.id))
        }
        data();
    })
    if (!book) {
        return null;
    }
    return (
        <div>
            <h1 className={'d-flex justify-content-center'}>Edit Book</h1>
            <Formik
                initialValues={{
                    id: book?.id,
                    title: book?.title,
                    category: book?.category,
                    author: book?.author
                }}
                onSubmit={values => {
                    const edit = async () => {
                        await editBook({
                            ...values,
                            category: parseInt(values.category)
                        });
                        console.log(values)
                        alert('edit complete')
                        navigate('/')
                    }
                    edit();
                }
                }
            >
                <Form>
                    <div>Name :
                    </div>
                    <Field name={'title'} type={'text'}/>
                    <div>Category :</div>
                    <Field
                        as={'select'}
                        name={'category'}>
                        {
                            categoryList.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))
                        }
                    </Field>
                    <div>Author :
                    </div>
                    <Field name={'author'} type={'text'}/>
                    <button type={'submit'} className={'btn btn-primary'}>Save</button>
                    <Link to={'/'} className={'btn btn-secondary'}>Back to List</Link>
                </Form>
            </Formik>
        </div>
    )
}