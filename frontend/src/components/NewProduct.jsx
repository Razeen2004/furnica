import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminNav from './AdminNav';

import Upload from '../assets/uploadImg.png';
const NewProduct = () => {
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
              <Link to="/admin/product" className='active'>
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="21" height="6" stroke="black" />
                  <rect x="2.5" y="6.5" width="17" height="11" fill="black" stroke="black" />
                  <rect x="8" y="11.5" width="6" height="2" stroke="white" />
                </svg>
                Product
              </Link>
            </li>
            <li>
              <Link to="/admin/orders">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H2.5L3.4375 6M5.5 17H18.1573C18.9694 17 19.7009 16.5089 20.0084 15.7573L23.436 7.37863C23.7051 6.72075 23.2213 6 22.5105 6H3.4375M5.5 17L3.4375 6M5.5 17L6.27208 19.3162C6.40819 19.7246 6.79033 20 7.22076 20H20" stroke="black" />
                  <circle cx="8" cy="22" r="1.5" stroke="black" />
                  <circle cx="18" cy="22" r="1.5" stroke="black" />
                </svg>
                Orders
              </Link>
            </li>
            <li>
              <Link to="/admin/settings">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.8959 9.03048L16.7185 9.1969L16.74 9.43921C16.748 9.52963 16.7612 9.62327 16.772 9.70043C16.7752 9.72272 16.7781 9.74363 16.7807 9.76269C16.7934 9.85715 16.8009 9.93087 16.8009 10C16.8009 10.0691 16.7934 10.1429 16.7807 10.2373C16.7781 10.2564 16.7752 10.2773 16.772 10.2996C16.7612 10.3767 16.748 10.4704 16.74 10.5608L16.7185 10.8031L16.8959 10.9695L19.3648 13.2855L17.6183 16.2203L14.3232 15.3058L14.0994 15.2436L13.9075 15.3747C13.5872 15.5934 13.2387 15.781 12.8676 15.949L12.6494 16.0478L12.5896 16.2798L11.7598 19.5H8.24016L7.41039 16.2798L7.35062 16.0478L7.13241 15.949C6.76127 15.781 6.41276 15.5934 6.09249 15.3747L5.90064 15.2436L5.67678 15.3058L2.38168 16.2203L0.635209 13.2855L3.10405 10.9695L3.28146 10.8031L3.26002 10.5608C3.25202 10.4704 3.23883 10.3767 3.22796 10.2996C3.22482 10.2773 3.22187 10.2564 3.2193 10.2373C3.20656 10.1429 3.19906 10.0691 3.19906 10C3.19906 9.93087 3.20656 9.85715 3.2193 9.76269C3.22187 9.74363 3.22482 9.72272 3.22796 9.70043C3.23883 9.62327 3.25202 9.52963 3.26002 9.43921L3.28146 9.19691L3.10405 9.03048L1.30841 7.34602L0.63521 6.71451L2.38168 3.77974L5.67678 4.69423L5.90058 4.75634L6.09241 4.62539C6.41277 4.40668 6.76134 4.21896 7.13241 4.05098L7.35062 3.9522L7.41039 3.72025L8.01399 1.3778L8.24016 0.5H11.7598L12.5896 3.72024L12.6494 3.95219L12.8676 4.05098C13.2387 4.21896 13.5872 4.40668 13.9076 4.62539L14.0994 4.75635L14.3232 4.69423L16.712 4.03126L17.6183 3.77973L19.3648 6.71451L16.8959 9.03048ZM6.9232 10C6.9232 11.671 8.31509 13 10 13C11.6849 13 13.0768 11.671 13.0768 10C13.0768 8.32899 11.6849 7 10 7C8.31509 7 6.9232 8.32899 6.9232 10Z" stroke="black" />
                </svg>
                Settings
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="product-btn">
            <h2>Add New Product</h2>
            <Link>Publish</Link>
          </div>
          <div className="create-product">
            <div className="left-sec">
              <h3>Base Information</h3>
              <div className="base-info">
                <h5>Title:</h5>
                <input type="text" placeholder='Enter Name' />
                <h5>About:</h5>
                <textarea name="" placeholder='Enter about your product' id=""></textarea>
              </div>

              <h3>Details</h3>
              <div className="base-info">
                <h5>Price:</h5>
                <input type="number" placeholder='$199' />
                <h5>Sale:</h5>
                <input type="number" placeholder='50%' />
              </div>
            </div>
            <div className="mid-sec">
              <h3>Pictures</h3>
              <div className="base-info imgUpload">
                <div className="addImg">
                  <img src={Upload} alt="" />
                </div>
                <div className="addImg">
                  <img src={Upload} alt="" />
                </div>
                <div className="addImg">
                  <img src={Upload} alt="" />
                </div>
                <div className="addImg">
                  <img src={Upload} alt="" />
                </div>
              </div>
              <h3>Additional Information</h3>
              <div className="base-info">
                <h5>Category:</h5>
                <input type="text" placeholder='Select Category' />
                <h5>Description:</h5>
                <textarea name="" placeholder='Enter description your product' id=""></textarea>
              </div>
            </div>
            <div className="right-sec">
              <h3>Preview</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NewProduct