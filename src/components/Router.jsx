import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import styled from 'styled-components'

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
                </Routes>
            <Footer/>
        </Container>
    )
}

export default Router
