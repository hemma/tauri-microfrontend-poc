import React, {useContext, useEffect} from "react";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";

function Logout() {
    const {setAuthContext} = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
        setAuthContext({email: '', token: ''})
        navigate('/')
    }, [])

    return (
        <>
        </>
    );
}

export default Logout
