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
                <img src={cross} alt="cross" className="cross-icon"/>
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                    <a href="#projects" onClick={()=>setIsOpen(false)}>
                    <img src={projectImage} alt="project" className="option-icon"/>Projects
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#skills" onClick={()=>setIsOpen(false)}>
                    <img src={skillsImage} alt="skills" className="option-icon"/>Skills
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#education" onClick={()=>setIsOpen(false)}>
                    <i className="fi-rr-graduation-cap option-icon-font"></i>Education
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#work" onClick={()=>setIsOpen(false)}>
                    <img src={workImage} alt="work" className="option-icon"/>Work
                    </a>
                </div>
                <div className="mobile-option">
                <a href="#contact" onClick={()=>setIsOpen(false)}>
                <img src={contactImage} alt="contact" className="option-icon"/>Contact
                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile
