import React from 'react'
import './watch.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import vid from '../../component/listItem/trailer.mp4'

function watch() {
  return (
    <div className='watch'>
      <div className="back">
        <ArrowBackIosNewIcon/>
        Home
      </div>

      <video className='video' autoPlay 
      progress 
      controls
      src={vid}></video>
    </div>
  )
}

export default watch