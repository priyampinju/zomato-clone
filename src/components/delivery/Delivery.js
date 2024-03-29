import React from 'react'
import Filter from '../common/filters/Filter'
import DeliveryCollections from './deliveryCollections/DeliveryCollections';
import TopBrands from './topBrands/TopBrands';
import Explore from '../common/explore/Explore';
import { restaurants } from '../../data/Restaurants';

const deliveryFilters = [
  {
    id: 1,
    title: "Filters",
    icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i class="fi fi-rr-sort-alt absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantList = restaurants

const Delivery = () => {
  return (
    <>
      <div className="delivery max-width">
        <Filter filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <Explore list={restaurantList} collectionName='Delivery Restaurants in Jorhat' />
    </>
  )
}

export default Delivery
