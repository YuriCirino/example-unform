import { useRef, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { mask } from "remask"
import { Form } from "../components/Form/Form"
import Input from "../components/Form/Input"
import * as Yup from "yup"
import styled from "styled-components"
import {RiFileList2Line} from 'react-icons/ri'
import Row from '../components/Layout/Row'
import Col from '../components/Layout/Column'
import Button from "../components/Button"

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 50px;
    background-color: #fcfcfc;
`
const FormTitle = styled.h1`
    color: #5f30e2;
    font-size: 2.5rem;
`

function Home() {
    const formRef = useRef(null)
    const [telephone, setTelephone] = useState("")
    const [id, setId] = useState("#")
    let history = useHistory();

    async function handleSubmit(data) {
        try {
            let schema = Yup.object().shape({
                name: Yup.string().required("Name is required"),
                email: Yup.string()
                    .email("Enter a valid email")
                    .required("Email is required"),
                id: Yup.string().required('ID is required').min(4,'4 digits minimum required').max(4)
            })

            data.id = data.id.replace(/\D*/,'')
            console.log(data)

            await schema.validate(data, {
                abortEarly: false,
            })

            formRef.current.setErrors({})
            history.push('/finished')

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
                name: "John Doe",
                email: "johndoe@example.com",
                id:'#2332',
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
                {/*initialData={initialData} apenas para dados estáticos*/}
                <Row>
                <Col><Input
                    name="name"
                    label="Name"
                    type="text"
                    autoComplete="off"
                    placeholder="Your Name"
                    required
                /></Col>
                <Col><Input
                    name="id"
                    label="ID"
                    type="text"
                    placeholder={"#1111"}
                    value={id}
                    required
                    onChange={(e)=>{
                        let value = mask(e.target.value,'#9999')
                        setId(value)
                    }}
                /></Col>
            </Row>
                <Input name="email" label="Email" type="email" required/>
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
                
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default Home
