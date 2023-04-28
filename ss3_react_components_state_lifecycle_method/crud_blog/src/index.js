import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ListPost} from "./components/post";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {CreatePost} from "./components/createPost";
import {EditPost} from "./components/editPost";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<ListPost/>}/>
                <Route path={"/create"} element={<CreatePost/>}/>
                <Route path={"/edit/:id"} element={<EditPost/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
