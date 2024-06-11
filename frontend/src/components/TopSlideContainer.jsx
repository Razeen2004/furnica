import React from 'react'
import './TopSlideContainer.css'

const TopSlideContainer = ({text}) => {
  return (
    <div className='top-slide-container'>
        <div className="container">
            <p>Home &gt; Shop &gt; | {text}</p>
        </div>
    </div>
  )
}

export default TopSlideContainer