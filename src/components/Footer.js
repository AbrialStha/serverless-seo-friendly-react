import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => (
    <footer>
        <ul className="menu-link">
            <li><Link to="/">Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/work'>Work</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/search'>Search</Link></li>
        </ul>

        <p>© Copyright {Date().split(' ').slice(3, 4).join(' ')} DevBlog. All rights reserved</p>

        <div className="uipasta-credit">
            Design By <Link target="_blank" to="http://github.com/abrialstha">abrialstha</Link>
        </div>

    </footer>
)
export default Footer