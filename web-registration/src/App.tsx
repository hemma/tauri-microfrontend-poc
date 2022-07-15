import './App.css'
import {ChakraProvider} from "@chakra-ui/react";
import Registration from "./pages/Registration";

function App() {

    return (
        <ChakraProvider>
            <Registration onRegister={() => {}}/>
        </ChakraProvider>
    )
}

export default App
