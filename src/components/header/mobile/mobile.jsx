import React from 'react'
import './mobile.css'
import projectImage from '../../../assests/fi-rr-briefcase.svg'
import skillsImage from '../../../assests/fi-rr-laptop.svg'
import workImage from '../../../assests/fi-rr-briefcase.svg'
import contactImage from '../../../assests/fi-rr-user.svg'
import cross from '../../../assests/fi-rr-cross-circle.svg'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={()=>setIsOpen(!isOpen)}>
                {/* <i class="fi-rr-cross-circle"></i> */}
                <img src={cross} alt="cross" className="cross-icon"/>
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                    <a href="#projects">
                    <img src={projectImage} alt="project" className="option-icon"/>Projects
                        {/* <i class="fi-rr-edit-alt option-icon"></i>Projects */}
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#skills">
                    <img src={skillsImage} alt="skills" className="option-icon"/>Skills
                {/* <i class="fi-rr-laptop option-icon"></i>Skills */}
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#work">
                    <img src={workImage} alt="work" className="option-icon"/>Work
                {/* <i class="fi-rr-briefcase option-icon"></i>Work */}
                    </a>
                </div>
                <div className="mobile-option">
                <a href="#contact">
                <img src={contactImage} alt="contact" className="option-icon"/>Contact
                {/* <i class="fi-rr-user option-icon"></i>Contact */}
                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile
