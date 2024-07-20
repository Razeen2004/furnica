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