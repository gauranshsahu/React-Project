import React from 'react'
import Image from '../assets/photo.jpg'
import { Bookmark } from 'lucide-react'
const card = (props) => {
  return (
    <div className='card-main'>
      <div className='card-wrapper'>
        <div className='image-text-wrapper'>
          <img className='crad-image' src={Image}></img>
          <p className='card-saved'>saved <Bookmark /></p>
        </div>
        <div className='card-comapany'>
          <p>{props.company}</p>
          <span>{props.date}</span>
        </div>
        <div className='card-content'>
          <p className='card-name'>{props.user}</p>
          <div className='card-time'>
            <div className='card-time-icon'>{props.time}</div>
            <div className='card-time-icon'>{props.time2}</div>
          </div>
          <div className='card-bottom'>
            <div className='bottom-wrapper'>
              <p className='card-age'>{props.age}</p>
              <button>View Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card
