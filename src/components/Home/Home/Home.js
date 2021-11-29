import React from 'react';
import DeveloperSection from '../DeveloperSection/DeveloperSection';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div className="container">
            <DeveloperSection></DeveloperSection>
            <Projects></Projects>
        </div>
    );
};

export default Home;