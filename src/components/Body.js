import { Sidebar } from './Sidebar'
import React from 'react'
import { MainContainer } from './MainContainer'

export const Body = () => {
  return (
    <div className='flex '>
     <Sidebar/>
     <MainContainer/>
    </div>
  )
}
