import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Logout from "./pages/Logout";


const root = ReactDOM.createRoot(
    document.getElementById("root")!
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path="registration" element={
                    <Registration/>
                }/>
                <Route path="logout" element={
                    <Logout/>
                }/>
            </Route>

        </Routes>
    </BrowserRouter>
);

