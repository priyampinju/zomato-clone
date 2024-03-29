import React from 'react'
import './ExploreCard.css'

const ExploreCard = ({ restaurant }) => {

    const name = restaurant?.info?.name ?? "" //does restaurant exist? if yes then go to info, if info exists go to name. if not return empty string ""
    const coverImg = restaurant?.info?.image?.url;
    const deliveryTime = restaurant?.order?.deliveryTime;
    const rating = restaurant?.info?.rating?.rating_text;
    const approxPrice = restaurant?.info?.cfo?.text;
    const offers = restaurant?.bulkOffers ?? [];
    const cuisines = restaurant?.info?.cuisine
        ?.map((item) => item.name)
        .slice(0, 3);
    const bottomContainers = restaurant?.bottomContainers;
    const goldOff = restaurant?.gold?.text;
    const proOff = offers.length > 1 ? offers[0].text : null;
    const discount = offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null;


    return (
        <div className='explore-card cursor-pointer'>
            <div className="explore-card-cover">
                <img src={coverImg} alt={name} className='explore-card-image' />
                <div className="delivery-time">{deliveryTime}</div>
                {proOff && <div className="pro-off">{proOff}</div>}
                {goldOff && <div className="gold-off absolute-center"> {goldOff} </div>}
                {discount && <div className="discount absolute-center">{discount}</div>}
            </div>
            <div className="restaurant-row">
                <div className="restaurant-name">{name}</div>
                {rating && (<div className="restaurant-rating absolute-center">
                    {rating}
                    <i className="fi fi-sr-star absolute-center"/>
                </div>
                )}
            </div>
            <div className="restaurant-row">
                {cuisines.length && (
                    <div className="restaurant-cuisine">
                        {cuisines.map((item, i) => (
                            <span className="restaurant-cuisine-tag">{item}{i !== cuisines.length - 1 && ", "}</span>
                    ))}
                    </div> )}
                {approxPrice && <div className="restaurant-price">{approxPrice}</div>}
            </div>
            {bottomContainers.length > 0 && (
                <div>
                    <div className="card-separator"></div>
                    <div className="explore-bottom">
                        <img src={bottomContainers[0]?.image?.url} style={{ height: '18px' }} alt={bottomContainers[0]?.text} />
                        <div className="restaurant-bottom-text">{bottomContainers[0]?.text}</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ExploreCard
