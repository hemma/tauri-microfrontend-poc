import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";


const root = ReactDOM.createRoot(
    document.getElementById("root")!
);

const onRegister = () => {

}

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Login/>}/>
                <Route path="registration" element={
                    <Registration />
                }/>
            </Route>

        </Routes>
    </BrowserRouter>
);

