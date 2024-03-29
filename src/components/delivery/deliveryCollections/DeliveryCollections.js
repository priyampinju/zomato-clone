import React from 'react'
import './deliveryCollections.css'
import NextArrow from '../../common/carousel/NextArrow';
import PrevArrow from '../../common/carousel/PrevArrow';
import Slider from 'react-slick';
import DeliveryItems from './deliveryItems/DeliveryItems';

const deliveryItems = [
    {
        id:1,
        title: "Pizza",
        image: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
    },
    {
        id:2,
        title: "Biryani",
        image: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    },
    {
        id:3,
        title: "Burger",
        image: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    },
    {
        id:4,
        title: "Chicken",
        image: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    },
    
    {
        id:5,
        title: "Rolls",
        image: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    },
    {
        id:6,
        title: "North Indian",
        image: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
    },
    {
        id:7,
        title: "Thali",
        image: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    }, 
    {
        id:8,
        title: "Momos",
        image: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
    },
    {
        id:9,
        title: "Cake",
        image: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    },
    {
        id:10,
        title: "Sandwich",
        image: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
    },
    {
        id:11,
        title: "Dosa",
        image: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    } ,
    {
        id:12,
        title: "Fried Rice",
        image: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
    },
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow:<NextArrow /> ,
    prevArrow: <PrevArrow />,
  };

  const DeliveryCollections = () => {
    return (
        <div className='delivery-collections'>
            <div className="max-width">
                <div className="collection-title">
                Inspiration for your first order
                </div>
                <Slider {...settings}>
                    {deliveryItems.map((item) => {
                        return <div>
                            <DeliveryItems item={item}/>
                        </div>
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default DeliveryCollections
