import React from 'react'
import './badge.css'

function Badge({ label, color }) {
    return (
        <div className="badge" style={{ background: color }}>
            {label}
        </div>
    )
}

export default Badge
