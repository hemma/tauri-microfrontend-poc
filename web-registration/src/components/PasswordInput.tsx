import React, {useEffect, useState} from "react";
import {FormControl, FormErrorMessage, FormHelperText, FormLabel, Input} from "@chakra-ui/react";

interface PasswordInputProps {
    setValue: (value: string) => void
}

function PasswordInput(props: PasswordInputProps) {
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

    useEffect(() => {
        if (password.trim().length === 0) {
            setIsError(true)
            return
        }

        setIsError(false)
        props.setValue(password)
    }, [password])

    return (
        <FormControl isInvalid={isError}>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input
                id='password'
                type='password'
                value={password}
                onChange={onChange}
            />
            {!isError ? (
                <FormHelperText>
                    Enter your password
                </FormHelperText>
            ) : (
                <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
        </FormControl>
    )
}

export default PasswordInput
