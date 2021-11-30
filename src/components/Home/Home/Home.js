import React from 'react';
import Footer from '../../Footer/Footer';
import DeveloperSection from '../DeveloperSection/DeveloperSection';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <div className="container">
                <DeveloperSection></DeveloperSection>
                <Projects></Projects>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;