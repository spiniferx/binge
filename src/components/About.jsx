import React from 'react'
import styled from 'styled-components'

//#EDEAE5

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
const Image = styled.div`
    height: 100%;
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Details = styled.div`
    height: 100%;
    width: 65%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 15px;
    font-weight: italic;
    font-family: Verdana;
    font-color: gray;
    line-height: 25px;
    font-style: italic;
`
const Img = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const About = () => {
    return (
        <Container>
            <ContactCard>
                <Heading>
                    About Me
                </Heading>
                <Desc>
                    <Image>
                        <Img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'/>
                    </Image>
                    <Details>
                        Hi, I am 2.6 years experienced Full Stack Engineer currently working as a Software Engineer/Analyst at Goldman Sachs. 
                    </Details>
                </Desc>
            </ContactCard>
        </Container>
    )
}

export default About
