import './App.css'
import {ChakraProvider} from "@chakra-ui/react";
import Account from "./pages/Account";
import {useState} from "react";
import Login from "./pages/Login";

function App() {
    const [auth, setAuth] = useState({email: '', token: ''});

    const onLogin = (email: string, token: string) => {
        setAuth({email, token})
    }

    return (
        <ChakraProvider>
            {auth.token === '' ?
                (<Login onLogin={onLogin}/>)
                :
                (<Account email={auth.email} token={auth.token}/>)
            }

        </ChakraProvider>
    )
}

export default App
