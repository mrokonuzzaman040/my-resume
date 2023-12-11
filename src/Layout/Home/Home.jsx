import React from 'react';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Service from './Service/Service';
import MyProject from './MyProject/MyProject';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Skills></Skills>
            <Service></Service>
            <MyProject></MyProject>
        </div>
    );
};

export default Home;