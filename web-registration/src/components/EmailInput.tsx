import React, {useEffect, useState} from "react";
import {FormControl, FormErrorMessage, FormHelperText, FormLabel, Input} from "@chakra-ui/react";

interface EmailInputProps {
    setValue: (value: string) => void
}

function EmailInput(props: EmailInputProps) {
    const [email, setEmail] = useState('')
    const [isError, setIsError] = useState(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)

    useEffect(() => {
        if (email.trim().length === 0) {
            setIsError(true)
            return
        }

        setIsError(false)
        props.setValue(email)
    }, [email])

    return (
        <FormControl isInvalid={isError}>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
                id='email'
                type='email'
                value={email}
                onChange={onChange}
            />
            {!isError ? (
                <FormHelperText>
                    Enter your email
                </FormHelperText>
            ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
        </FormControl>
    )
}

export default EmailInput
