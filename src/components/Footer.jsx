import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   height: 10%;
   background-color: #F7C200;
   display: flex;
   justify-content: space-around;
   align-items: center;

`
const NavButtons = styled.text`
    font-size: 25px;
    font-weight: bold;
    font-family: Verdana;
    color: #EDEDED;
    cursor: pointer;
`

const Footer = () => {
    const handleOnClick = (e) => {
        if(e.target.id === 'about')
        {
            window.location.assign('/about')
        }
        else if(e.target.id === 'contact')
        {
            window.location.assign('/contact')
        }
    }
    return (
        <Container>
            <NavButtons id='about' onClick={handleOnClick}>About</NavButtons>
            <NavButtons id='contact' onClick={handleOnClick}>Contact</NavButtons>
        </Container>
    )
}

export default Footer
