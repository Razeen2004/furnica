import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminNav from './AdminNav';

const Orders = () => {
  return (
    <div className='admin'>
        <AdminNav />
        <div className="container">
          <div className="left">
            <ul>
              <li>
                <Link to="/admin/dashboard">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="8" height="11" stroke="black" />
                    <rect x="11.5" y="0.5" width="8" height="5" stroke="black" />
                    <rect x="19.5" y="19.5" width="8" height="11" transform="rotate(-180 19.5 19.5)" stroke="black" />
                    <rect x="8.5" y="19.5" width="8" height="5" transform="rotate(-180 8.5 19.5)" stroke="black" />
                  </svg>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin/product">                   
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="21" height="6" stroke="black"/>
                  <rect x="2.5" y="6.5" width="17" height="11" stroke="black"/>
                  <rect x="8" y="11.5" width="6" height="2" stroke="black"/>
                  </svg>
                  Product
                </Link>
              </li>
              <li>
                <Link to="/admin/orders" className='active'>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.1573 17H5.5L3.4375 6H22.5105C23.2213 6 23.7051 6.72075 23.436 7.37863L20.0084 15.7573C19.7009 16.5089 18.9694 17 18.1573 17Z" fill="black"/>
                  <path d="M0 1H2.5L3.4375 6M5.5 17H18.1573C18.9694 17 19.7009 16.5089 20.0084 15.7573L23.436 7.37863C23.7051 6.72075 23.2213 6 22.5105 6H3.4375M5.5 17L3.4375 6M5.5 17L6.27208 19.3162C6.40819 19.7246 6.79033 20 7.22076 20H20" stroke="black"/>
                  <circle cx="8" cy="22" r="1.5" stroke="black"/>
                  <circle cx="18" cy="22" r="1.5" stroke="black"/>
                  </svg>
                  Orders
                </Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <h2>Orders  </h2>

            
          </div>
        </div>
      </div>
  )
}

export default Orders