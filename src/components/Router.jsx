import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import styled from 'styled-components'
import Movies from './Movies'
import TopRated from './TopRated'
import Series from './Series'
import Contact from './Contact'

const Container = styled.div`
   height: 100vh; 
`

const Router = () => {
    return (
        <Container>
            <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    <Route exact path='/movies' element={<Movies/>}/>
                    <Route exact path='/series' element={<Series/>}/>
                    <Route exact path='/top-rated' element={<TopRated/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    <Route exact path='/contact' element={<Contact/>}/>
                </Routes>
            <Footer/>
        </Container>
    )
}

export default Router
