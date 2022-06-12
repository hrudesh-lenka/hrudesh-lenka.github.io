import React from 'react'
import './work-card.css'

function WorkCard({item}) {
    return (
        <div className="work-card">
            <img src={item.companyLogo} alt={item.company} className="work-logo"/>
            <div className="work-info">
                <label className="company-name">{item.company}</label>
                <label className="designation">{item.designation}</label>
                <div className="work-dates">
                    <label htmlFor="company-date" >
                        {item.dateOfJoining}
                    </label>
                    <label htmlFor="date">
                        {item.dateEnd}
                    </label>
                </div>
                <div className="description">
                    <p>{item.workDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
