import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import butter from '../utls/butter'
import Loader from './Loader'

class ShowCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }

    //To Fetch Categories
    fetchCategories() {
        butter.category.list()
            .then((resp) => {
                this.setState({
                    loaded: true,
                    resp: resp.data
                })
            })
    }

    componentWillMount() {
        this.fetchCategories()
    }

    render() {
        if (this.state.loaded) {
            const categories = this.state.resp.data
            return (
                <div className="List">
                    <div className="post-title">
                        <h2>Categories</h2>
                    </div>
                    <ul>
                        {
                            categories.map((category) => {
                                return (
                                    <li key={category.slug} >
                                        <Link to={`/category/${category.slug}`}>{category.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="List">
                    <div className="post-title">
                        <h2>Categories</h2>
                    </div>
                    <ul>
                        <Loader />
                    </ul>
                </div>
            )
        }
    }
}

export default ShowCategory