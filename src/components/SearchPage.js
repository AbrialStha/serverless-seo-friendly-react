import React, { Component } from 'react'
import Categories from './ShowCategory'
import BlogBox from './BlogBox'

class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }

    render() {
        return (
            <div className="SearchContent">
                <div className="row">
                    <div className="sub-title">
                        <form>
                            <input
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
                            !this.state.loaded ?
                                <div className="col-md-12 content-page">
                                    Nothing to show here
                                </div>
                                :
                                <div className="col-md-12 content-page">
                                    {this.state.resp.data.map((post) => {
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