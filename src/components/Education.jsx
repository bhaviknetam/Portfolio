import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
    return (
        <section className="education">
            <h2>Projects</h2>
            <div className="education-item">
                <h3>COVID-19 Detection Model</h3>
                {/* <ul>
                    <li>Developed a CNN based model using Tensorflow and Keras to detect COVID-19 using lung CT Scans.</li>
                    <li>Deployed in Streamlit for better user experience.</li>
                </ul> */}
                <p>In the Deep Learning field, I have developed a COVID-19 detection model from lung CT scans of patient. I have used
                    Kaggle COVID-19 Lung CT Scan Dataset for this model and implemented a CNN based model using Tensorflow and Keras.
                    The model achieved 96% accuracy in test dataset in classification report using scikit-learn.
                    At last, I deployed the model in a streamlit web based app foe easier user interaction and experience.
                </p>
                <p>Aug. 2024 - Nov. 2024</p>
                <a href="https://github.com/bhaviknetam/Covid-19-Detection-Model" className="education-link" target='_blank'>
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>
            <div className="education-item">
                <h3>Faculty Recruitment Portal</h3>
                <p>As a part of DBMS group project, my role in this project was as a backend developer. We have created
                    a multi-page form which ensures data persistance across navigation. I have created the MySQL database using
                    PHPmyadmin Panel and used PHP for database rendering with SQL. Lastly, we have used containerization using Docker
                    for stability across environments.
                </p>
                <p>March 2024 - May 2024</p>
                <a href="https://github.com/bhaviknetam/2201CS84_CS260/tree/main/proj1/DBproject" className="education-link" target='_blank'>
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>
        </section>
    );
};

export default Education;
