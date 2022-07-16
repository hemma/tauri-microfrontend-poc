import React, {useContext} from "react";
import {AuthContext} from "../context";
// @ts-ignore
const WebLogin = React.lazy(() => import('remote_account/Login'));

function Login() {
    const {setAuthContext} = useContext(AuthContext);

    const onLogin = (email: string, token: string) => {
      setAuthContext({email, token})
    }

    return (
        <>
            <React.Suspense fallback={<>...</>}>
                <WebLogin onLogin={onLogin} />
            </React.Suspense>
        </>
    );
}

export default Login
