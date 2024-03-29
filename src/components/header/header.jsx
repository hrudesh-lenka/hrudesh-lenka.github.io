import React, {useState} from 'react'
import Web from './web/web'
import Mobile from './mobile/mobile'
import burgerMenu from '../../assests/fi-rr-menu-burger.svg'
import './header.css'
function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="header" id="header">
            <div className="logo">
                    Hrudesh Lenka
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                    <img src={burgerMenu} alt="menu" className="menu-icon" />
                    {/* <i className="fi-rr-menu-burger menu-icon"></i> */}
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
            
        </div>
    )
}

export default Header
