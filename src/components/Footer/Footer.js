import React from 'react';
import './Footer.css';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {

    const resumeUrl = 'https://drive.google.com/file/d/1QzpvdP0TMh9kPZpeUhqfyBhltKKeSP9v/view?usp=sharing'


    return (
        <div className="">
            <footer className="mt-5 bg-primary">
                <div className="footer-top ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="address">
                                    <h3 className="text-uppercase fw-bold text-white">Marjana Begum</h3>
                                    <p className="mb-4 mt-4">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} /> South Surma, Sylhet-3100, Bangladesh.
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPhoneAlt} /> +8801717660080
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope} /> marjanamahi777@gmail.com
                                    </p>

                                </div>
                            </div>

                            <div className="col-lg-2 col-sm-6 footer-menus">
                                <h4 className="text-uppercase fw-bold">Find Me</h4>
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/marjanamahii/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                                    <li><a href="https://github.com/marjanamahii" target="_blank" rel="noreferrer">GitHub</a></li>
                                    <li><a href="https://www.facebook.com/marjanamahi.me/" target="_blank" rel="noreferrer">Facebook</a></li>
                                </ul>

                            </div>

                            <div className="col-lg-3 col-sm-6 footer-menus">
                                <h4 className="text-uppercase fw-bold">Site Map</h4>
                                <ul>
                                    <li><HashLink as={HashLink} to="/projects">My Projects</HashLink></li>
                                    <li><a href={resumeUrl} target="_blank" rel="noreferrer">Online Resume</a></li>
                                    <li><HashLink as={HashLink} to="/about">About Me</HashLink></li>
                                    <li><HashLink as={HashLink} to="/contact">Contact Me</HashLink></li>
                                </ul>

                            </div>

                            <div className="col-lg-4 col-sm-6 newsletter">
                                <h4 className="text-uppercase fw-bold">Social Links</h4>

                                <div className="social-links mt-3">
                                    <a href="https://www.linkedin.com/in/marjanamahii/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href="https://github.com/marjanamahii" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://www.facebook.com/marjanamahi.me/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="footer-bottom border-top text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p>
                                    Designed by <a
                                        href="https://github.com/marjanamahii" target="_blank" rel="noreferrer" title="My GitHub Repo">
                                        <span className="text-white cool-link">Marjana Begum</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;