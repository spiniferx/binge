import React from 'react'
import styled from 'styled-components'
import { getAllTrending } from './API'
import { useEffect,useState } from 'react'

const Container = styled.div`
   height: 10%;
   width: 100%;
   display: flex;
   background-color: #EDEDED;
`

//    background-color: #026670;
const Logo = styled.div`
   width: 20%;
   height:100%;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #F40058;


   font-size: 45px;
   font-weight: bold;
   font-family: Chalkduster;
   font-color: #F40058;
   text-decoration: underline;
`
const Navigation = styled.div`
    width: 80%;
    
    height:100%;
    display flex;
    justify-content: space-around;
    align-items: center;
`
const NavButtons = styled.text`
    font-size: 25px;
    font-weight: bold;
    font-family: Verdana;
    color: #F7C200;
    cursor: pointer;
`

const Navbar = () => {

    useEffect(() => {
        const response = getAllTrending();
        console.log(response.data,"APi called");
    }, [])

    const handleOnClick = (e) => {
       
        if(e.target.id === 'home')
        {
            window.location.assign('/')
        }
        else if(e.target.id === 'movies')
        {
            window.location.assign('/movies')
        }
        else if(e.target.id === 'series')
        {
            window.location.assign('/series')
        }
        else if(e.target.id === 'top-rated')
        {
            window.location.assign('/top-rated')
        }
    }

    return (
        <Container>
            <Logo>
                Binged
            </Logo>
            <Navigation>
                <NavButtons id='home' onClick={handleOnClick}>Home</NavButtons>
                <NavButtons id='movies' onClick={handleOnClick}>Movies</NavButtons>
                <NavButtons id='series' onClick={handleOnClick}>Series</NavButtons>
                <NavButtons id='top-rated' onClick={handleOnClick}>Top Rated</NavButtons>
            </Navigation>
        </Container>
    )
}

export default Navbar
