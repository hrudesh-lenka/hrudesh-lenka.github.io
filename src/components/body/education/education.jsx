import React from 'react'
import Separator from '../../common/separator/separator'
import { EducationData } from '../../data/education'
import { CertificationsData } from '../../data/certifications'
import EducationCard from './education-card/education-card'
import './education.css'

function Education() {
    return (
        <div className="education">
            <Separator />
            <label className="section-title">Education</label>
            <div className="education-list">
                {EducationData.map((item) => {
                    return <EducationCard item={item} key={item.school} />
                })}
            </div>
            <label className="education-subtitle">Certifications</label>
            <div className="certifications-list">
                {CertificationsData.map((cert) => {
                    return <span className="certification-pill" key={cert}>{cert}</span>
                })}
            </div>
        </div>
    )
}

export default Education
