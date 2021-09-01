import styled from 'styled-components'
const StyledButton = styled.button`
display: flex;
align-items:center;
justify-content: center;
padding:0.75rem 0.5rem;
font-size: 1.25rem;
outline:none;
border:none;
background-color: #5f30e2;
border-radius: 5px;
color:white;
cursor: pointer;
margin:0.5rem 0px;

`
export default function Button({type,...props}){

    return <StyledButton type={type} {...props}>{props.children}</StyledButton>

}