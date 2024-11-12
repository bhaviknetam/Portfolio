import React from 'react';
import authorImage from '../assets/author-image.jpg'; // Make sure to have an image at this path

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="about-content">
                <img src={authorImage} alt="Author" className="author-image" />
                <p>Hello 👋 Everyone, I am a tech 🧑🏼‍💻 entusiast. I am always eager to
                    learn new concepts and technologies in this changing world. I have a high
                    interest in coding, software development, generative AI, LLMs and Deep Learning.
                    In the modern era, this skills are gaining popularity as well as very interesting
                    topics for advancements of technology. I am currently aiming to contribute to innovative projects, leveraging my coding, problem-solving, and teamwork
                    abilities to develop high-quality software solutions, while gaining hands-on experience in a dynamic environment.
                </p>
            </div>
        </section>
    );
};

export default About;
