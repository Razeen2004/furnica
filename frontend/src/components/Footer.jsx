import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="sections">
                        <div className="sec">
                            <div className='logo'>
                                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M26.9303 36.3946H16.7673C14.6391 36.3932 12.5364 35.9322 10.6029 35.0431C8.66943 34.154 6.9508 32.8577 5.56462 31.2429C4.17843 29.6282 3.15738 27.7331 2.57134 25.6872C1.98529 23.6414 1.84806 21.4931 2.16905 19.3893C2.72117 15.7629 4.23086 12.3495 6.54237 9.50124C8.85388 6.65299 11.8835 4.47306 15.3186 3.18637C19.5284 1.60454 24.1692 1.60454 28.379 3.18637C31.8041 4.47262 34.8251 6.64717 37.1321 9.4868C39.439 12.3264 40.9488 15.7288 41.5063 19.3447C41.8341 21.45 41.7027 23.6012 41.1212 25.651C40.5397 27.7007 39.5218 29.6005 38.1373 31.22C36.7527 32.8395 35.0344 34.1404 33.1 35.0336C31.1656 35.9267 29.0609 36.391 26.9303 36.3946Z" stroke="#B88E2F" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M30.4736 35.9709L35.2208 43.0806" stroke="#B88E2F" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M13.2238 35.9709L8.47656 43.0806" stroke="#B88E2F" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.7051 23.0222L13.6916 25.0058C16.108 26.615 18.9455 27.4756 21.8488 27.4797C24.752 27.4756 27.5895 26.615 30.0059 25.0058L32.9924 23.0222" stroke="#B88E2F" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Furnica
                            </div>
                            <p>From cozy sofas to chic coffee tables, discover the perfect pieces to elevate your living space. Shop now and let Furnica redefine your idea of home sweet home!"
                        </p>
                        </div>
                        <div className="sec">
                            <h3>Links</h3>
                            <ul>
                                <li>Home</li>
                                <li>Shop</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="sec">
                            <h3>Help</h3>
                            <ul>
                                <li>Privacy & Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                        <div className="sec">
                            <h3>News Letter</h3>
                            <input type="text" name="" id="" placeholder='Enter your Email Address' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="bottom">
                        2024 furnica. All rights reverved
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer