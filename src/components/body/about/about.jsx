import React from 'react'
import bodyImage from '../../../assests/about-picture.png'
import SocialContact from '../../common/social-contact/social-contact'
import './about.css'

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    <label className="about-name">Hrudesh Lenka</label>
                    <label className="about-title">Senior Associate Consultant @ Infosys</label>
                    <p className="about-summary">
                        I'm a software engineer with 5+ years of experience building robust,
                        scalable Java microservices. My skillset isn't limited to Java &mdash;
                        I'm also proficient in ReactJS, JavaScript, and Python, and comfortable
                        working across AWS and Azure. I'm a self-motivated learner, always
                        looking for new challenges and opportunities to grow.
                    </p>
                    <div className="about-cta">
                        <a href="#contact" className="cta-button primary">Get in touch</a>
                        <a href="#work" className="cta-button secondary">View experience</a>
                    </div>
                    <SocialContact />
                </div>
                <div className="about-photo">
                    <img src={bodyImage} alt="about-pic" className="picture"/>
                </div>
            </div>
        </div>
    )
}

export default About
