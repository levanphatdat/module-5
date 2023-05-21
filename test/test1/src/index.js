import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ListBook from "./componnets/listBook";
import './select.css'
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {CreateBook} from "./componnets/createBook";
import {EditBook} from "./componnets/editBook";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<ListBook/>}/>
                <Route path={'/create'} element={<CreateBook/>}/>
                <Route path={'/edit/:id'} element={<EditBook/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
