import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import { VideoCard } from './VideoCard'
import { Link } from 'react-router-dom'

export const VideoContainer = () => {
  const [videos,setVideos]=useState([])

useEffect(() => {
  fetch_video();
}, []); 


  const fetch_video=async()=>{
    try {
      const data=await fetch(YOUTUBE_VIDEOS_API);
      const json=await data.json();
      setVideos(json.items)
      
    } catch (error) {
      
    }
  }
  return (
    <div className='flex flex-wrap'>
    {videos.map(video=> <Link to={'/watch?v='+video.id}><VideoCard info={video}/></Link>)}
      
    </div>
  )
}
