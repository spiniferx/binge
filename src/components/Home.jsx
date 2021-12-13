import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
   height: 80%;
   background-color: white;
`
const Wrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1 rem;
    align-items: center;
    justify-content: center;
`

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </Wrapper>
        </Container>
    )
}

export default Home
