import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='signup'>
        <div className="container">
            <div className="signup-container">
                <h2>Signin</h2>

                <h3>Enter your Email</h3>
                <input type="text" placeholder='john@gmail.com' />

                <h3>Enter your Password</h3>
                <input type="password" placeholder='*******' />

                <button>Login</button>

                <p>Already have an account? <Link to="/signin">Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signin