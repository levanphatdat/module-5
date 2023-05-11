import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Header} from "./components/home/header";
import './link.css'
import './search.css'
import {Footer} from "./components/home/footer";
import {Contract} from "./components/contract/contract";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {Home} from "./components/home/home";
import {Facility} from "./components/facility/facility";
import {Customer} from "./components/customer/customer";
import {CreateFacility} from "./components/facility/createFacility";
import {CreateCustomer} from "./components/customer/createCustomer";
import {CreateContract} from "./components/contract/createContract";
import {EditCustomer} from "./components/customer/editCustomer";
import {EditFacility} from "./components/facility/editFacility";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/facility'} element={<Facility/>}/>
                <Route path={'/customer'} element={<Customer/>}/>
                <Route path={'/contract'} element={<Contract/>}/>
                <Route path={'/createFacility'} element={<CreateFacility/>}/>
                <Route path={'/createCustomer'} element={<CreateCustomer/>}/>
                <Route path={'/createContract'} element={<CreateContract/>}/>
                <Route path={'/editCustomer/:id'} element={<EditCustomer/>}/>
                <Route path={'/editFacility/:id/:typeRoom'} element={<EditFacility/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
