import {useContext} from "react";
import {AuthContext} from "../context";
import Login from "./Login";
import Account from "./Account";

function Home() {
    const {authContext} = useContext(AuthContext);

    return (
        <>
            {!authContext.email || !authContext.token ? (
                <Login/>
            ) : (<Account email={authContext.email} token={authContext.token}/>)
            }
        </>
    )
}

export default Home
