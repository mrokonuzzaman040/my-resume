import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Service from './Service/Service';

const Homepage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Skills></Skills>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;