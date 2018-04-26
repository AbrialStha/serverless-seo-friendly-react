import React from 'react'

const Subscribe = (props) => (
    <div className="col-md-8 col-md-offset-2" >
        <form id="mc-form" method="post" action="http://uipasta.us14.list-manage.com/subscribe/post?u=854825d502cdc101233c08a21&amp;id=86e84d44b7">

            <div className="subscribe-form margin-top-20">
                <input id="mc-email" type="email" placeholder="Email Address" className="text-input" />
                <button className="submit-btn" type="submit">Submit</button>
            </div>
            <p>Subscribe to my weekly newsletter</p>
            <label htmlFor="mc-email" className="mc-label"></label>
        </form>

    </div >
)

export default Subscribe