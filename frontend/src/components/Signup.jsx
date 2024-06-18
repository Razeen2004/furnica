import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='signup'>
        <div className="container">
            <div className="signup-container">
                <h2>Signup</h2>

                <h3>Create a Username</h3>
                <input type="text" placeholder='John Doe' />

                <h3>Enter your Email</h3>
                <input type="text" placeholder='john@gmail.com' />

                <h3>Enter your Password</h3>
                <input type="password" placeholder='*******' />

                <button>Signup</button>

                <p>Already Signup? <Link to="/signin">Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signup