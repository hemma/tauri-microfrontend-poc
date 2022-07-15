import {Button, Center, Container, Heading, VStack} from "@chakra-ui/react";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import {useEffect, useState} from "react";

interface RegistrationProps {
    onRegister: (email: string, token: string) => void | undefined
}

function Registration(props: RegistrationProps) {

    const [email, setEmail] = useState<string | undefined>(undefined)
    const [password, setPassword] = useState<string | undefined>(undefined)

    const [valid, setValid] = useState(false)

    useEffect(() => {
        if (email && password) {
            setValid(true)
        }
    }, [email, password])

    const onRegister = () => {
        props.onRegister(email!, "token_123")
    }

    return (
        <VStack pt={10}><Container maxW='md'>
            <Center>
                <Heading>Registration</Heading>
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
                        <Button disabled={!valid} colorScheme='blue' onClick={onRegister}>Register</Button>
                    </Center>
                </Container>
            </Container>
        </VStack>
    )
}

export default Registration
