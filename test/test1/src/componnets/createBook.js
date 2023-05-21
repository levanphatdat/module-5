import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {createBook, findAllCategory} from "../service/bookService";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

export function CreateBook() {
    const navigate = useNavigate()
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        const list = async () => {
            setCategoryList(await findAllCategory())
        }
        list()
    }, [])
    return (
        <div>
            <h1 className={'d-flex justify-content-center'}>Create Book</h1>
            <Formik
                initialValues={{
                    title: '',
                    category: '',
                    author: ''
                }}
                onSubmit={values => {
                    const create = async () => {
                        await createBook({...values,
                        category: parseInt(values.category)});
                        console.log(values)
                        alert('create complete')
                        navigate('/')
                    }
                    create();
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
                        <option value="">Choice the category</option>
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