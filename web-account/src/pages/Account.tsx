import {Center, Container, Heading} from "@chakra-ui/react";
import {useEffect} from "react";

interface AccountProps {
    email: string
    token: string
}

function Account(props: AccountProps) {

    useEffect(() => {
        console.log(`Validate ${props.email} with token ${props.token}`)
    }, [])

    return (
        <Container bg={'lightblue'} pt={10}>
            <Center>
                <Heading>Welcome {props.email}</Heading>
            </Center>
        </Container>
    )
}

export default Account
