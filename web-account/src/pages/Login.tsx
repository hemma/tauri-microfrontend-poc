import {Button, Center, Container, Heading, VStack} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";

interface LoginProps {
    onLogin: (email: string, token: string) => void
}

function Login(props: LoginProps) {
    const [email, setEmail] = useState<string | undefined>(undefined)
    const [password, setPassword] = useState<string | undefined>(undefined)

    const [valid, setValid] = useState(false)

    useEffect(() => {
        if (email && password) {
            setValid(true)
        }
    }, [email, password])

    const onLogin = () => {
        props.onLogin(email!, 'token-abc-123')
    }

    return (

        <VStack bg={'lightblue'} pt={10}><Container maxW='md'>
            <Center>
                <Heading>Login</Heading>
            </Center>
            </Container>
            <Container pt={5}>
                <Container pt={5} maxW='md'>
                    <EmailInput setValue={(value) => setEmail(value)}/>
                </Container>
                <Container pt={5} maxW='md'>
                    <PasswordInput setValue={(value) => setPassword(value)}/>
                </Container>
                <Container pt={5} maxW='md'>
                    <Center>
                        <Button disabled={!valid} colorScheme='blue' onClick={onLogin}>Login</Button>
                    </Center>
                </Container>
            </Container>
        </VStack>
    );
}

export default Login
