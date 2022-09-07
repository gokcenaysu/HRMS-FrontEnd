import React from 'react'
import AdvertisementList from "../pages/AdvertisementList"
import { Route, Routes } from 'react-router-dom'
import AdvertisementDetail from '../pages/AdvertisementDetail';

function Dashboard() {
  return (
    <div>
      <Routes>
      <Route path='/advertisement' element={<AdvertisementList/>}/>
      <Route path='/advertisement/:id' element={<AdvertisementDetail/>}/>
      </Routes>
     </div>
  )
}
export default Dashboard;
