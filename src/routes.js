import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import BlogHome from './components/BlogHome'
import BlogPost from './components/BlogPost'
import App from './App'

const Routes = (props) => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={BlogHome} />
                <Route path="/p/:page" component={BlogHome} />
                <Route path="/post/:slug" component={BlogPost} />
            </Switch>
        </App>
    </BrowserRouter>
)

export default Routes