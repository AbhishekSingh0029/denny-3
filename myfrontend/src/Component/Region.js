import React from 'react'
import Country from './Region/Country'
import JobType from './Region/JobType'
import City from './Region/City'
import Search from './Region/Search'
import './Region'
function Region() {
  return (
    <div className='jobcontainer'>
        <JobType/>
      <Country/>
      <City/>
      <Search/>
      
      
    </div>
  )
}

export default Region
