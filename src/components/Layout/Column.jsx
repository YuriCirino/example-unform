import styled from 'styled-components'
const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.1rem;
    justify-content: center;
    align-items: center;
`
export default function Col(props){
return <StyledColumn {...props}>{props.children}</StyledColumn>
}