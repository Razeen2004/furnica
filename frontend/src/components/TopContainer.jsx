import React from 'react';
import './TopContainer.css';

const TopContainer = ({name, route}) => {
  return (
    <div className='top-container'>
        <h2>{name}</h2>
        <h3>{route}</h3>
    </div>
  )
}

export default TopContainer