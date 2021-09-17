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
                    {/* <i class="fi-rr-edit-alt option-icon"></i>Projects */}
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                <img src={skillsImage} alt="skills" className="option-icon"/>Skills
                {/* <i class="fi-rr-laptop option-icon"></i>Skills */}
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                <img src={workImage} alt="work" className="option-icon"/>Work
                {/* <i class="fi-rr-briefcase option-icon"></i>Work */}
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <img src={contactImage} alt="contact" className="option-icon"/>Contact
                {/* <i class="fi-rr-user option-icon"></i>Contact */}
                </a>
            </div>
            
        </div>
    )
}

export default Web
