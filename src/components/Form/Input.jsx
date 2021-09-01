import { useEffect, useRef} from "react"
import { useField } from "@unform/core"


import styled from "styled-components"

const SectionInput = styled.div`
    display: block;
    margin: 0.5rem 0px;
    display: flex;
    flex-direction: column;
    color: #181818;
`
const StyledInput = styled.input`
    margin: 0px;
    font-size: 1.1rem;
    padding: 0.75rem;
    border: 2px solid ${(props) => (props.error ? "#ff6c6c" : "#ded2fd")};
    border-radius: 5px;
    background-color: ${(props) => (props.error ? "#ffeeee" : "#f8f8f8")};
    &:focus {
        border: 2px solid #5f30e2;
        background-color: #f6f3ff;
        box-shadow: 0rem 0rem 1rem 0rem #5f30e228;
    }
    &::placeholder {
        color: #9e9e9e;
        font-size: 1rem;
    }
`

const Label = styled.label`
    top: 0px;
    left: 0px;
    z-index: 10;
    padding: 0.1rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: #403a55;
`
const ErrorMessage = styled.span`
    color: #ff4141;
    margin: 0 0.5rem 0.5rem 0.5rem;
`

export default function Input({ name, type, label,...props }) {
    const inputRef = useRef(null)
    const { fieldName, registerField, defaultValue, error,clearError } = useField(name)



    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value",
        })
    }, [fieldName, registerField])

    return (
        <SectionInput>
            <Label htmlFor={name}>{label}</Label>
            <StyledInput
                ref={inputRef}
                defaultValue={defaultValue}
                type={type}
                name={name}
                error={error}
                onFocus={clearError}
                {...props}
            />

            {<ErrorMessage>{error ? error : " "}</ErrorMessage>}
        </SectionInput>
    )
}
