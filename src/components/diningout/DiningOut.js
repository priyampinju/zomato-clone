import React from 'react'
import Filter from '../common/filters/Filter'
import Collections from '../common/collections/Collections'
import { Dining } from '../../data/dining';
import Explore from '../common/explore/Explore';



const collectionList = [
  {
    id: 1,
    title: "7 Serene Rooftop Places",
    cover: 'https://b.zmtcdn.com/data/collections/293255cbfe49f4ebdb244c1bfc3a0f74_1691151613.jpg',
    places: "7 Places",
  },
  {
    id: 2,
    title: "7 Great Buffets",
    cover:
      "https://b.zmtcdn.com/data/collections/6d15bb3be793058440ed5e7006149c07_1691151825.jpg",
    places: "7 Places",
  },
  {
    id: 3,
    title: "9 Best Luxury Dining Places",
    cover:
      "https://b.zmtcdn.com/data/collections/a1e31eb92bb9951aaf1750d88497adb4_1691151744.jpg",
    places: "9 Places",
  },
  {
    id: 4,
    title: "7 Pan Asian Restaurants",
    cover:
      "	https://b.zmtcdn.com/data/collections/1b3bd5bd6ff1e9e5176b81db369f1d62_1691152212.jpeg",
    places: "7 Places",
  },
  {
    id: 5,
    title: "9 Great cafes",
    cover:
      "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1691151375.jpg",
    places: "9 Places",
  },
  {
    id: 6,
    title: "7 Bingeworthy Desserts",
    cover:
      "https://b.zmtcdn.com/data/collections/3c8d1e8d612c909438576795095ff71b_1691151059.png",
    places: "5 Places",
  },

];

const diningFilters = [
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

const diningList = Dining;

const DiningOut = () => {
  return (
    <div>

      <Collections list={collectionList} />
      <div className="dining max-width">
        <Filter filterList={diningFilters} />
      </div>
      <Explore list={diningList} collectionName='Trending dining restaurants in Jorhat' />
    </div>
  )
}

export default DiningOut
