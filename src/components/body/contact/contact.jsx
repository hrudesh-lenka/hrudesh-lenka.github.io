import React from 'react'
import Separator from '../../common/separator/separator'
import SocialContact from '../../common/social-contact/social-contact'
import Pdf from '../../../assests/Hrudesh Lenka - CV.pdf'
import './contact.css'
import TwitterFeed from "../../common/social-contact/twitter-feed";
function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label htmlFor="" className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>
                        Want to get in touch ? Contact me on any of these platforms.
                    </p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a download href={Pdf}>
                        <i class="fi-rr-cloud-download download-icon" /> Download Resume
                    </a>
                </div>
                <div className="contact-container">
                    <TwitterFeed />
                </div>
            </div>
        </div>
    )
}

export default Contact
