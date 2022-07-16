// @ts-ignore
import Registration from 'remote_registration/Registration';
import './App.css'
import {Link, Outlet} from "react-router-dom";
import {Box, Center, ChakraProvider, Container, Divider, Heading} from "@chakra-ui/react";
import {AuthContext} from './context';
import {useState} from "react";

function App() {
    const [authContext, setAuthContext] = useState({email: '', token: ''});

    return (
        <ChakraProvider>
            <AuthContext.Provider value={{authContext, setAuthContext}}>
                <Center pt={10} pb={20}>
                    <Box w='75px'>
                        {authContext.token === '' ?
                            (<Link to="/"><Heading as='h5' size='sm'>Login</Heading></Link>)
                            :
                            <Link to="/logout"><Heading as='h5' size='sm'>Logout</Heading></Link>
                        }

                    </Box>
                    <Box w='100px'>
                        <Link to="/registration"><Heading as='h5' size='sm'>Registration</Heading></Link>
                    </Box>
                </Center>
                <Container>
                    <Divider />
                </Container>
                <Container>
                    <Outlet/>
                </Container>
            </AuthContext.Provider>

        </ChakraProvider>
    )
}

export default App
