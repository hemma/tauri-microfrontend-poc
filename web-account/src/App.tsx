import './App.css'
import {ChakraProvider} from "@chakra-ui/react";
import Account from "./pages/Account";

function App() {

    return (
        <ChakraProvider>
            <Account email={"test@mail.se"} token={"abc123"}/>
        </ChakraProvider>
    )
}

export default App
