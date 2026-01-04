import React from 'react'
import App from '../App';
import { Bookmark } from 'lucide-react';
const Cards = (props) => {
  return (
    <div className="card">

        <div className="top">
          <img src={props.brandLogo}></img>
          <button>Save me <Bookmark size={10}  /></button>
        </div>

        <div className="center">
          <h2>{props.company} <span>{props.postedDate}</span></h2>
          <h1>{props.post}</h1>
          <div className='tagName'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>

        <div className="bottom">
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>      
        </div>
    </div>
  )
}

export default Cards