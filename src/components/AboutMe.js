import React from 'react'
import mypic from '../assets/my-pic2.png'
import { Link } from 'react-router-dom'

const AboutMe = (props) => (
    <div className="about-fixed">
        <div className="my-pic">
            <img src={mypic} alt="profile-Pic" />
            <span className="collapsed" data-target="#menu" data-toggle="collapse"><i className="icon-menu menu"></i></span>
            <div id="menu" className="collapse">
                <ul className="menu-link">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/work'>Work</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
                {/* <hr />
                <ul className="menu-link">
                    <li>java</li><li>java</li><li>java</li>
                    <li>java</li><li>java</li><li>java</li>
                    <li>java</li><li>java</li><li>java</li>
                </ul> */}
            </div>
        </div>



        <div className="my-detail">
            <div className="white-spacing">
                <h1>Abiral Sthapit</h1>
                <span>FUll Stack Developer</span>
            </div>

            <ul className="social-icon">
                <li><Link to="#" target="_blank" className="facebook"><i className="fa fa-facebook"></i></Link></li>
                <li><Link to="#" target="_blank" className="twitter"><i className="fa fa-twitter"></i></Link></li>
                <li><Link to="#" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></Link></li>
                <li><Link to="#" target="_blank" className="github"><i className="fa fa-github"></i></Link></li>
            </ul>
        </div>
    </div>
)

export default AboutMe