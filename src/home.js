import React from 'react'
import "./app.css"
import Header from './Header';
import Navbar from './navbar';
import Contact from './contact';
import Footer from"./footer"
import Cast from './Cast';

const Home = () => {
    return (
        <>
          <Navbar/> 
          <br/> <br/>
          <Header/>
          <Cast/>
          <Contact/>
          <Footer/>
        </>
    )
}

export default Home;
