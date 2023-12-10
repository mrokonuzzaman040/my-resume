import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Service from './Service/Service';
import MyProject from './MyProject/MyProject';

const Homepage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Skills></Skills>
            <Service></Service>
            <MyProject></MyProject>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;