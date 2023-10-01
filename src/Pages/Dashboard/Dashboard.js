import React from 'react'
import TopBar from '../../components/TopBar'
import SideBar from '../../components/SideBar'
import { Outlet} from 'react-router-dom'

function Dashboard() {
  return (
    <>
    <div className='topbar'><TopBar/></div>
    <div className='flex-content'>
        <SideBar/>
        <div style={{width:'80%'}}>
          <Outlet/>
        </div>
    </div>
    </>
  )
}

export default Dashboard