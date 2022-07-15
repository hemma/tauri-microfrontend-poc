import React from "react";
import {useNavigate} from "react-router-dom";
// @ts-ignore
const WebRegistration = React.lazy(() => import('remote_registration/Registration'));

function Registration() {
    const navigate = useNavigate()

    const onRegister = () => {
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
