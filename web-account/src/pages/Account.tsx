import {Center, Heading} from "@chakra-ui/react";
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
        <Center>
            <Heading>{props.email}</Heading>
        </Center>
    )
}

export default Account
