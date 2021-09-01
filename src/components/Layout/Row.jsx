import styled from 'styled-components'
const StyledRow = styled.div`
    display: flex;
`
export default function Row(props){
return <StyledRow {...props}>{props.children}</StyledRow>
}