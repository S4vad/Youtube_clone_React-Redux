import React from 'react'
import { useSelector } from 'react-redux'


export const Sidebar = () => {
  const nav=useSelector(state=>state.nav.showMenuBar)
  console.log('tht nfe',nav)
  if(!nav){
    return null;
  }
  return (
    <div className='w-40 bg-gray-50 h-screen p-2 '>   
       <ul className='flex flex-col ml-10'>
        <li>Home</li>
        <li>trending</li>
        <li>new</li>
       </ul>
    </div>
  )
}
