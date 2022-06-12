import React from 'react'
import bodyImage from '../../../assests/about-picture.png'
import SocialContact from '../../common/social-contact/social-contact'
import './about.css'

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                I'm a software engineer based in India with 2 years of experience in the software industry. I’m currently working at Mindtree as a Java Developer. I'm skilled in Java, NodeJS and front-end development with React.
                </div>
                <div className="about-photo">
                    <img src={bodyImage} alt="about-pic" className="picture"/>
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About
