import { Sidebar } from './Sidebar'
import React from 'react'
import { MainContainer } from './MainContainer'
import { Outlet } from 'react-router-dom'

export const Body = () => {
  return (
    <div className='flex '>
     <Sidebar/>
     <Outlet/>
    </div>
  )
}
