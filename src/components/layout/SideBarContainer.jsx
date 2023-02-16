import React from 'react'
import {Link} from "react-router-dom"
import SideBar from './SideBar'

const SideBarContainer = () => {
  return (
    <div className='menu'>
<div className="navbar brand-box my-3">
<Link to = "/" className='logo mx-4 px-4'>Dummy</Link> 
</div>
<div data-simplebar className='h-100'>
    <SideBar/>
</div>
    </div>
  )
}

export default SideBarContainer