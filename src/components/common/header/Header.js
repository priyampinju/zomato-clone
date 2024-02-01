import React from 'react'
import "./header.css"

const Header = () => {
    return (
        <>
            <div className='header max-width'>
                <img className='header-logo' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="ufjv" />
                <div className="header-right">
                    <div className="header-location-search-container">
                        <div className="location-wrapper absolute-center">
                            <div className="location-icon-name">
                                <i className="fi fi-ss-marker absolute-center location-icon"></i>
                            </div>
                            <div className="city">Jorhat</div> 
                            <i className="fi fi-ss-caret-down absolute-center down"></i>
                        </div>
                        <div className="search">
                        <i class="fi fi-rs-search absolute-center search-glass"></i>
                        <input type="text" placeholder="Search restaurant, cuisine or a dish" className='search-box'/>
                        </div>
                    </div>
                    <div className="header-user-container">
                        <div className="user-icon">
                        <i className="fi fi-tr-circle-user absolute-center"></i>
                        </div>
                        <div className="user-name">
                            Ananya
                        </div>
                        <div className="user-down-arrow">
                        <i className="fi fi-rs-angle-small-down absolute-center"></i>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
