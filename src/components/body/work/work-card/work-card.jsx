import React from 'react'
import Badge from '../../../common/badge/badge'
import './work-card.css'

function WorkCard({ item }) {
    return (
        <div className="work-card">
            <div className="work-card-marker">
                <span className="work-card-dot" />
            </div>
            <div className="work-card-content">
                <div className="work-card-head">
                    <Badge label={item.badgeLabel} color={item.badgeColor} />
                    <div className="work-info">
                        <label className="company-name">{item.company}</label>
                        <label className="designation">{item.designation}</label>
                        <label className="work-location">{item.location}</label>
                    </div>
                </div>
                <div className="work-dates">
                    {item.dateOfJoining} &ndash; {item.dateEnd}
                </div>
                <p className="description">{item.workDescription}</p>
            </div>
        </div>
    )
}

export default WorkCard
