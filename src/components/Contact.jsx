import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   height: 80%; 
   background-color: white;
   display: flex;
   justify-content: center;
   align-items: center;
`
const ContactCard = styled.div`
    height: 70%;
    width: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const Heading =  styled.div`
    font-size: 25px;
    font-weight: bold;
    font-family: Verdana;
    color: white;
    align-items: center;
    background-color: #F7C200;
    height: 20%;
    width: 100%;
    justify-content: center;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const Desc =  styled.div`
    font-size: 20px;
    font-weight: bold;
    font-family: Verdana;
    font-color: gray;
    align-items: center;
    background-color: white;
    height: 80%;
    width: 100%;
    justify-content: center;
    display: flex;
    line-height: 40px;
`

const Contact = () => {
    return (
        <Container>
            <ContactCard>
                <Heading>
                Contact
                </Heading> 
                <Desc>
                    For any queries, kindly drop a mail to
                    <br/>
                    pawankumardubey930@gmail.com
                </Desc>
            </ContactCard>
        </Container>
    )
}

export default Contact
