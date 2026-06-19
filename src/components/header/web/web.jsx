import React from 'react'
import './web.css'
import projectImage from '../../../assests/fi-rr-briefcase.svg'
import skillsImage from '../../../assests/fi-rr-laptop.svg'
import workImage from '../../../assests/fi-rr-briefcase.svg'
import contactImage from '../../../assests/fi-rr-user.svg'

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects">
                    <img src={projectImage} alt="project" className="option-icon"/>Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                <img src={skillsImage} alt="skills" className="option-icon"/>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#education">
                    <i className="fi-rr-graduation-cap option-icon-font"></i>Education
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                <img src={workImage} alt="work" className="option-icon"/>Work
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <img src={contactImage} alt="contact" className="option-icon"/>Contact
                </a>
            </div>

        </div>
    )
}

export default Web
