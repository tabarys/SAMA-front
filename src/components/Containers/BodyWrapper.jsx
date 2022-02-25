import styled from "styled-components"

const BodyWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;`


export default function Wrapper(props){
    return <BodyWrapper >{props.children}</BodyWrapper>
}

