import React from 'react';
import githubImage from '../assets/github.png';
import linkedinImage from '../assets/linkedin.png';
import emailImage from '../assets/email.png';

const Footer = () => {
    return (
        <footer id='contact'>
            <div className="social-links">
                <a href="https://github.com/bhaviknetam/" target="_blank" rel="noopener noreferrer"><img src={githubImage} alt="Github" className="contact-image" /></a>
                <a href="https://www.linkedin.com/in/bhavik-netam/" target="_blank" rel="noopener noreferrer"><img src={linkedinImage} alt="Linkedin" className="contact-image" /></a>
                <a href="mailto:bhaviknetam10@gmail.com"><img src={emailImage} alt="Email" className="contact-image" /></a>
            </div>

        </footer>
    );
};

export default Footer;
