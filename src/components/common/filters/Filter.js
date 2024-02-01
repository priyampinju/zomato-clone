import React from 'react'
import FilterItem from './filterItem/FilterItem'
import './filters.css'

const Filter = ({filterList}) => {
  return (
    <div className='filters'>
        {filterList && filterList.map((filter) => {
            return <div>
                <FilterItem filter={filter} key={filter.id} />
            </div>
        })}
    </div>
  )
}

export default Filter
