// @ts-ignore
import Registration from 'remote_registration/Registration';
import './App.css'
import {Link, Outlet} from "react-router-dom";
import {Box, Center, ChakraProvider, Container, Heading, HStack} from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider>
            <Center pt={10} pb={20}>
                <Box w='100px'>
                    <Link to="/"><Heading as='h5' size='sm'>Login</Heading></Link>
                </Box>
                <Box w='100px'>
                    <Link to="/registration"><Heading as='h5' size='sm'>Registration</Heading></Link>
                </Box>
            </Center>
            <Container>
                <Outlet/>
            </Container>
        </ChakraProvider>
    )
}

export default App
