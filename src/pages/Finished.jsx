import styled from 'styled-components'
import { useHistory } from "react-router"
import Row from '../components/Layout/Row'
import Col from '../components/Layout/Column'
import {FaCheck,FaCaretLeft} from 'react-icons/fa'
import Button from '../components/Button'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 50px;
    background-color: #fcfcfc;
`
const H1 = styled.h1`
    color: #5f30e2;
    font-size: 2.5rem;
    margin-right: 1rem;
`
const FixedLeftTop = styled.div`
position: fixed;
top:1.5rem;
left: 2rem;
z-index: 12;
`
export default function Finished(){
    let history = useHistory()
    return <Container>
        <Row>
            <Col><H1>Congrats!</H1></Col><Col><FaCheck size={"2.5rem"} color={"#5f30e2"}/></Col>
        </Row>
        <FixedLeftTop>
        <Button type="button" onClick={()=>{
            history.push('/')
        }}><FaCaretLeft/>Back to Form</Button>
            
        </FixedLeftTop>
    </Container>
}