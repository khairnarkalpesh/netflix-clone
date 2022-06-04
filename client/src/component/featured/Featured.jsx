import React from 'react'
import banner from './banner-net.png'
import PlayArrow from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './featured.scss'

function Featured({type}) {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type == "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option value="genre">Genre</option>
                    <option value="genre">Genre</option>
                    <option value="genre">Genre</option>
                    <option value="genre">Genre</option>
                    <option value="genre">Genre</option>
                    <option value="genre">Genre</option>
                </select>
            </div>
        )}
        <img src={banner} width="100%" alt="banner"/>
        <div className="info">
            <img src="https://www.freepnglogos.com/uploads/stranger-things-logo-png/stranger-things-the-game-symbol-emblem-22.png" width="200" alt="stranger things the game symbol emblem" />
            <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga maiores minus alias, sequi voluptatum. Beatae repudiandae totam consectetur id velit quas magnam, amet laudantium tenetur laboriosam, dolorem ipsum esse.</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <span>More Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured