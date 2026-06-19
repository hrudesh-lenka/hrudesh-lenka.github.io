import React from 'react'
import './education-card.css'

function EducationCard({ item }) {
    return (
        <div className="education-card">
            <label className="school-name">{item.school}</label>
            <label className="degree">{item.degree}</label>
            <label className="education-dates">{item.dateOfJoining} &ndash; {item.dateEnd}</label>
        </div>
    )
}

export default EducationCard
