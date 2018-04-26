import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class AboutPage extends Component {
    componentDidMount() {
        window.$('[data-toggle="tooltip"]').tooltip();
      }
      
      componentDidUpdate() {
        window.$('[data-toggle="tooltip"]').tooltip();
      }
    render() {
        return (
            <div className="row">

                <div className="sub-title">
                    <h2>About Me</h2>
                    <a href="contact.html">
                        <i className="icon-envelope"></i>
                    </a>
                </div>

                <div className="col-md-12 content-page">
                    <div className="col-md-12 blog-post" style={{ display: 'block' }}>


                        {/* <!-- My Intro Start --> */}
                        <div className="post-title margin-bottom-30">
                            <h1>Hi, I am 
                    <span className="main-color"> Abiral Sthapit</span>
                            </h1>

                            <ul className="knowledge">
                                <li className="bg-color-4">Web Developer</li>
                                <li className="bg-color-6">Freelancer</li>
                                <li className="bg-color-5">Consultant</li>
                            </ul>
                        </div>
                        {/* <!-- My Intro End --> */}


                        <p>
                            I am in the website field since 2004 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
                          quam at orci commodo hendrerit vitae nec eros. Vestibulum neque est, imperdiet nec tortor nec, tempor
                          semper metus. <b>I am a developer</b>, et accumsan nisi. Duis laoreet pretium ultricies. Curabitur rhoncus auctor nunc congue sodales. Sed posuere nisi ipsum, eget dignissim nunc dapibus eget. Aenean elementum sollicitudin
                                                                                                                                                                                                        sapien ut sapien fermentum aliquet mollis. Curabitur ac quam orci sodales quam ut tempor. suspendisse,
                                                                                                                                                                                                        gravida in augue in, interdum
                  <b>
                                <a href="work.html" data-toggle="tooltip" data-placement="top" title="Check out my work.">Work</a>
                            </b> bibendum dui. Suspendisse sit amet justo sit amet diam fringilla commodo. Praesent ac magna at metus
                            malesuada tincidunt non ac arcu. Nunc gravida eu felis vel elementum. Vestibulum sodales quam ut tempor
                        tempor Donec sollicitudin imperdiet nec tortor nec, tempor semper metus..</p>


                        {/* <!-- My Service Start --> */}
                        <div className="post-title">
                            <h1>
                                My
                                <span className="main-color">Services</span>
                            </h1>
                        </div>

                        <div className="list list-style-2 margin-top-30">
                            <ul>
                                <li>Website Design</li>
                                <li>Website Development</li>
                                <li>Wordpress Theme Development</li>
                                <li>Online Software Development</li>
                                <li>UI/UX Consulting</li>
                            </ul>
                        </div>
                        {/* <!-- My Service End --> */}

                    </div>

                    <div className="col-md-12 text-center">
                        <Link to='contact' data-toggle="tooltip" data-placement="top" title="Visit on my contact page for hire me." className="load-more-button">Hire</Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default AboutPage