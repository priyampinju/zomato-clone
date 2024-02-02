import React from 'react'
import Slider from 'react-slick'
import './Collections.css'
import NextArrow from '../carousel/NextArrow'
import PrevArrow from '../carousel/PrevArrow'

const settings = {
    infinite: false,
    slidesToShow: 4,
    sidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const Collections = ({ list }) => {
    return (
        <div className='collection-wrapper'>
            <div className="collection max-width">
                <div className="collection-title">Collections</div>
                <div className="collection-subtitle-row">
                    <div className='collection-subtitle-text'>Explore curated lists of top restaurants, cafes, pubs and bars in Jorhat based on trends</div>
                    <div className="collection-location">
                        <div className="collection-location-all">All collections in Jorhat</div>
                        <i className="fi fi-rr-caret-right absolute-center"></i>
                    </div>
                </div>
                <Slider {...settings}>
                    {list.map((item) => (
                        <div> <div className="collection-cover">
                            <img src={item.cover} alt={item.title} className='collection-image' />
                            <div className="gradient-bg"></div>
                            <div className="collection-card-title">{item.title}</div>
                            <div className="collection-card-subtitle">
                                <div>{item.places}</div>
                                <i className="fi fi-rr-caret-right absolute-center" style={{marginTop: '6px'}}></i>
                            </div>
                        </div>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    )
}

export default Collections
