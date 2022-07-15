import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context";
// @ts-ignore
const WebRegistration = React.lazy(() => import('remote_registration/Registration'));

function Registration() {
    const {setAuthContext} = useContext(AuthContext);

    const navigate = useNavigate()

    const onRegister = (email: string, token: string) => {
        setAuthContext({email, token})
        navigate('/')
    }

    return (
        <>
            <React.Suspense fallback={<>...</>}>
                <WebRegistration onRegister={onRegister}/>
            </React.Suspense>
        </>
    )
}

export default Registration
