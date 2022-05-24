import React, { useState } from 'react'
import './listItem.scss'
import thumbnail from "../featured/banner-net.png"
import PlayArrow from '@mui/icons-material/PlayArrow'
import Add from '@mui/icons-material/Add'
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined'
import ThumbDownOffAltOutlined from '@mui/icons-material/ThumbDownOffAltOutlined';
import trailer from './trailer.mp4'
function ListItem({index}) {

    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='listItem'
    style={{left:isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}>
        <img src={thumbnail} alt="thumbnail" />
        {isHovered && (
        <div>
            <video src={trailer} autoPlay={true} loop></video>
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpAltOutlined className="icon"/>
                    <ThumbDownOffAltOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 16 minutes</span>
                    <span className='limit'>+16</span>
                    <span>19990</span>
                </div>
                <div className="desc">
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Blanditiis illo nam 
                    reprehenderit perspiciatis officia ab quasi, 
                    laborum ipsa nobis temporibus inventore voluptas 
                    nesciunt explicabo ipsam voluptatibus omnis facere 
                    earum! A.
                </div>
                <div className="genre">Action</div>
            </div>
        </div>
        )}
    </div>
  )
}

export default ListItem