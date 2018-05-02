import React, { Component } from 'react'
import Categories from './ShowCategory'
import BlogBox from './BlogBox'
import butter from '../utls/butter'
import Loader from './Loader'

class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: true,
            query: '',
            resp: ''
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({ loaded: false })
        butter.post.search(this.state.query)
            .then((resp) => {
                this.setState({
                    loaded: true,
                    query: '',
                    resp: resp.data.data
                })
                console.log(resp.data)
            })
            .catch(function (resp) {
                console.log(resp)
            })
    }

    render() {
        const { query, loaded, resp } = this.state
        return (
            <div className="SearchContent">
                <div className="row">
                    <div className="sub-title">
                        <form onSubmit={this.onSubmit}>
                            <input
                                value={query}
                                onChange={this.onChange}
                                name="query"
                                type="text"
                                className="form-control"
                                placeholder="Search Post..."
                            />
                            <button className="hidden" type="button">Go!</button>
                        </form>
                    </div>
                    <div className="col-md-12 content-page">
                        <Categories />
                        {
                            !loaded ?
                                <div className="col-md-12 content-page" style={{ minWidth: "20px" }}>
                                    <Loader />
                                </div>
                                :
                                resp == '' ?
                                    <div className="col-md-12 content-page" style={{ minWidth: "20px" }}>
                                        Nothing to show here
                                    </div>
                                    :
                                    <div className="col-md-12 content-page">
                                        {resp.map((post) => {
                                            return (
                                                <BlogBox post={post} key={post.slug} />
                                            )
                                        })}
                                    </div>

                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage