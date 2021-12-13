import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
   height: 80%;
   background-color: white;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </Wrapper>
        </Container>
    )
}

export default Home
