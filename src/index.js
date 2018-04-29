import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Subscribe from './components/Subscribe'
import BlogHome from './components/BlogHome'
import BlogPost from './components/BlogPost'
import About from './components/AboutPage'

//Just for Templating the Initial HTML layout
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

const MainRoutes = (props) => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={BlogHome} />
                <Route path="/p/:page" component={BlogHome} />
                <Route path="/post/:slug" component={BlogPost} />
                <Route path="/about" component={About} />
                <Redirect from='*' to='/' />
            </Switch>
        </App>
    </BrowserRouter>
)

ReactDOM.render(<MainRoutes />, document.getElementById('root'));
registerServiceWorker();
