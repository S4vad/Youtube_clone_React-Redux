import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'


export const Sidebar = () => {
  const nav=useSelector(state=>state.nav.showMenuBar)
  if(!nav){
    return null;
  }
  return (
    <div className='w-40 bg-gray-50 h-screen p-2 '>   
       <ul className='flex flex-col ml-10'>
        <li><Link to="/">Home</Link></li>
        <li>trending</li>
        <li>new</li>
       </ul>
    </div>
  )
}
