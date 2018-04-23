import React, { Component } from 'react'
import './assets/main.css'
import { Link } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <nav className="navbar navbar-dark">
                        <Link className="navbar-brand" to="/">
                            Typography
                        </Link>
                    </nav>
                </div>
                <div className="container">
                    {this.props.children}
                </div>
                <div className="footer d-flex flex-row-reverse">
                    <div className="p-2">
                        <span className="font-italic">Blog By: Abiral Sthapit</span>
                    </div>
                </div>
            </div >
        )
    }
}

export default App