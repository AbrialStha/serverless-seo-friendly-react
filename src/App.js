import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Subscribe from './components/Subscribe'

class App extends Component {
    render() {
        return (
            <div id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <AboutMe />
                        </div>

                        <div className="col-md-9">
                            {/* Blog Here */}
                            <div className="col-md-12 page-body">
                                {this.props.children}
                                {/* Subscription */}
                                <Subscribe />
                            </div>
                            {/* Footer margin */}
                            <div className="col-md-12 page-body margin-top-50 footer">
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App