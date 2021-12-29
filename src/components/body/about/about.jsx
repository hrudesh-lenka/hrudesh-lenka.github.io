import React from 'react'
import bodyImage from '../../../assests/about-picture.png'
import SocialContact from '../../common/social-contact/social-contact'
import './about.css'

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                I'm a software engineer based in Cuttack, India with 1 year of experience in the software industry. I’m currently working at DXC Technology as a ServiceNow Developer. I'm skilled in Python, NodeJS and front-end development with React.
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
