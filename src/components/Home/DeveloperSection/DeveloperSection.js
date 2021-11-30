import React from 'react';
import { faBriefcase, faCloudDownloadAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import marjanaImg from '../../../images/marjanabegum.png';
import Flip from 'react-reveal/Flip';


const DeveloperSection = () => {
    return (
        <div>
            <div className="row d-flex align-items-center py-5">

                <div className="col-md-8 ">
                    <Flip top cascade>
                        <h2 className="fw-bold text-uppercase">Marjana Begum</h2>
                    </Flip>

                    <p><FontAwesomeIcon icon={faBriefcase} /> Junior Web Developer</p>
                    <p>
                        <span className="language px-2 py-1 rounded me-2">React</span>
                        <span className="language px-2 py-1 rounded me-2">MongoDB</span>
                        <span className="language px-2 py-1 rounded me-2">NodeJS</span>
                        <span className="language px-2 py-1 rounded me-2">JavaScript</span>
                    </p>

                    <div>
                        <a href="https://drive.google.com/file/d/1QzpvdP0TMh9kPZpeUhqfyBhltKKeSP9v/view?usp=sharing" type="button" className="btn btnDwnResume me-2">
                            <FontAwesomeIcon icon={faCloudDownloadAlt} /> Download Resume
                        </a>
                        <Link to='/contact'>
                            <button className="btn btnContactMe">
                                <FontAwesomeIcon icon={faPaperPlane} /> Contact Me
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 my-2">
                    <div>
                        <img className="rounded-circle img-fluid" src={marjanaImg} alt="" />
                    </div>
                </div>
            </div>

            <div className="">
                <p className="text-dark developer-section">
                    Hi there! I'm Marjana. I am a 4th year B.Sc student in Computer Science and Engineering from Leading University. I have experience of 15+ web <Link to='/projects' className="cool-link fw-bold">Projects</Link> by using JavaScript, React.js, Node.js, MongoDB and other technologies. I have also solid knowledge of CSS framework like bootstrap, tailwind, material-ui. Outside of programming, I enjoy reading books.
                </p>
            </div>
        </div>
    );
};

export default DeveloperSection;