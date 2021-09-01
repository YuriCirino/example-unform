import "./App.css"
import { useRef, useEffect, useState } from "react"
import { mask } from "remask"
import { Form } from "./components/Form/Form"
import Input from "./components/Form/Input"
import * as Yup from "yup"
import {RiFileList2Line} from 'react-icons/ri'
import Row from './components/Layout/Row'
import Col from './components/Layout/Column'

import Button from "./components/Form/Button"

import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background-color: #fcfcfc;
`
const FormTitle = styled.h1`
    color: #5f30e2;
    font-size: 2.5rem;
`

function App() {
    const formRef = useRef(null)
    const [telephone, setTelephone] = useState("")

    async function handleSubmit(data) {
        try {
            let schema = Yup.object().shape({
                name: Yup.string().required("Name is required"),
                email: Yup.string()
                    .email("Enter a valid email")
                    .required("Email is required"),
                telephone:Yup.string().required('Telephone is required')
            })

            console.log(data)

            await schema.validate(data, {
                abortEarly: false,
            })

            formRef.current.setErrors({})
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {}
                err.inner.forEach((error) => {
                    errorMessages[error.path] = error.message
                })

                formRef.current.setErrors(errorMessages)
                console.log(data)
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            formRef.current.setData({
                name: "Yuri",
                email: "yuricirino@example.com",
            })
        }, 500)
    }, [])

    return (
        <Container>
            <Row>
                <Col> <FormTitle>Form</FormTitle></Col>
                <Col><RiFileList2Line size={"2.5rem"} color={"#5f30e2"}></RiFileList2Line></Col>
            </Row>
            
            <Form onSubmit={handleSubmit} ref={formRef}>
                {" "}
                {/*initialData={initialData} apenas para dados estáticos*/}
                <Input
                    name="name"
                    label="Name"
                    type="text"
                    autoComplete="off"
                    placeholder="Your Name"
                />
                <Input name="email" label="Email" type="email" />
                <Input name="password" label="Password" type="password" />
                <Input
                    name="telephone"
                    label="Telephone"
                    type="text"
                    placeholder={"(__)_____-_____"}
                    value={telephone}
                    onChange={(e) => {
                        let value = mask(e.target.value,'(99) 99999-9999')
                        setTelephone(value)
                    }}
                />
                <Input
                    name="id"
                    label="ID"
                    type="password"
                    placeholder={"#1111"}
                />
                <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    )
}

export default App
