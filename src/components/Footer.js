import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => (
    <footer>
        <p>© Copyright {Date().split(' ').slice(3, 4).join(' ')} DevBlog. All rights reserved</p>

        <div className="uipasta-credit">
            Design By <Link to="http://github.com/abrialstha">UiPasta</Link>
        </div>

    </footer>
)
export default Footer