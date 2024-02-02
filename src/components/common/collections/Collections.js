import React from 'react'
import './Collections.css'

const Collections = ({ list }) => {
    return (
        <div className='collection-wrapper'>
            <div className="collection max-width">
                <div className="collection-title">Collections</div>
                <div className="collection-subtitle-row">
                    <div className='collection-subtitle-text'>Explore curated lists of top restaurants, cafes, pubs and bars in Jorhat based on trends</div>
                    <div className="collection-location">
                        <div className="collection-location-all">All collections in Jorhat</div>
                        <i className="fi fi-rr-caret-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collections
