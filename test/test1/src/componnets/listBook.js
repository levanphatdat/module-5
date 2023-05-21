import React, {useEffect, useState} from "react";
import {deleteBook, findALl, findAllCategory, getBookById} from "../service/bookService";
import {Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";

export default function ListBook() {
    const [listBook, setListBook] = useState([]);
    const [listCategory, setListCategory] = useState([]);
    const [title, setTitle] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortOrder, setSortOrder] = useState('asc');
    const [bookData, setBookData] = useState();


    useEffect(() => {
        const list = async () => {
            setListCategory(await findAllCategory())
        }
        list()
    }, [])
    useEffect(() => {
        const list = async () => {
            setListBook(await findALl(title, selectedCategory));
        };
        list();
    }, [title, selectedCategory]);

    const handleSort = () => {
        const sortedList = [...listBook];
        sortedList.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.title.localeCompare(b.title);
            } else {
                return b.title.localeCompare(a.title);
            }
        });
        setListBook(sortedList);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };
    const getData = async (id) => {
        setBookData(await getBookById(id));
    }
    const handleDelete = async () => {
        await deleteBook(bookData.id);
        alert('delete complete')
        setListBook(await findALl(title, selectedCategory));
    }
    return (
        <div className={'container'}>
            <h1 className={'d-flex justify-content-center'}>Book List</h1>
            <Link to={'/create'} className={'btn btn-success my-3'}>Add new book</Link>
            <Formik
                initialValues={{
                    title: '',
                    category: ''
                }}
                onSubmit={values => {
                    setTitle(values.title)
                    setSelectedCategory(values.category)
                }
                }
            >
                <Form>
                    <Field name={'title'} type={'search'} placeholder="Search by Title" className={'me-3 inputCss'}/>
                    <Field
                        as={'select'}
                        name={'category'}
                        className={'me-3 selectCss'}
                    >
                        <option value="">All category</option>
                        {listCategory.map((category) => (
                            <option key={category.id} value={category.id.toString()}>
                                {category.name}
                            </option>
                        ))}
                    </Field>
                    <button type={'submit'} className={'btn btn-primary   my-3'}>Search</button>
                </Form>
            </Formik>
            <button type={"button"} className={'btn btn-primary'} onClick={handleSort}>Sort by Title</button>
            <table className={"table my-4"}>
                <thead className={'table-success'}>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th></th>
                </thead>
                <tbody className={'table-light'}>
                {listBook.length === 0 ? <h1 className={'text-danger'}>
                        No results were found</h1> :
                    listBook.map((book, index) => (
                        <tr key={index}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>
                                {listCategory.find(category =>
                                    category.id === book.category
                                )?.name}
                            </td>
                            <td>{book.author}</td>
                            <td><Link to={`/edit/${book.id}`}>Edit</Link>
                                {/*<button className={'button'} onClick={() => handleDelete(book.id)}>Delete</button>*/}
                                <button type="button" onClick={() => getData(book.id)} className="btn btn-primary"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            You want delete <span className={'text-danger'}>{bookData?.title}</span> ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                    onClick={() => handleDelete()}>Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}