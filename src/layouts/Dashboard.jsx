import React from 'react'
import AdvertisementList from "../pages/AdvertisementList"
import PositionList from '../pages/PositionList'
import { Route, Routes } from 'react-router-dom'
import AdvertisementDetail from '../pages/AdvertisementDetail';
import PositionDetail from '../pages/PositionDetail';
import EmployerList from '../pages/EmployerList'

function Dashboard() {
  return (
    <div>
      <Routes>
      <Route path='/advertisements' element={<AdvertisementList/>}/>
      <Route path='/advertisement/:name' element={<AdvertisementDetail/>}/>
      <Route path='/positions' element={<PositionList/>}/>
      <Route path='/position/:name' element={<PositionDetail/>}/>
      <Route path='/employers' element={<EmployerList/>}/>
      </Routes>
     </div>
  )
}
export default Dashboard;
