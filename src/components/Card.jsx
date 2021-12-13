import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 90%;
    width: 25%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    diplay: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
`
const Poster = styled.div`
    height: 85%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const Name = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 25px;
    font-weight: bold;
    font-family: Verdana;
    color: black;
`
const Img = styled.img`
    height: 100%;
    width: 100%;
`


const Card = () => {
    return (
        <Container>
            <Poster>
                <Img src='https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg'/>
            </Poster>
            <Name>James Bond</Name>
        </Container>
    )
}

export default Card
