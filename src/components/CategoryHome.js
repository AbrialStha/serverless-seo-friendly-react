import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import butter from '../utls/butter'
import Loader from './Loader'
import BlogBox from './BlogBox'

class CategoryHome extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };
    }

    fetchPosts(category) {
        butter.post.list({ category: category }).then((resp) => {
            this.setState({
                loaded: true,
                resp: resp.data
            })
        });
    }

    componentWillMount() {
        let category = this.props.match.params.category || '';

        this.fetchPosts(category)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ loaded: false });

        let category = this.props.match.params.category || '';

        this.fetchPosts(category)
    }

    render() {
        if (this.state.loaded) {
            const { next_page, previous_page } = this.state.resp.meta;

            return (
                <div className="row">
                    <div className="sub-title">
                        <h2>My Blog</h2>
                        <Link to='contact'><i className="icon-envelope"></i></Link>
                    </div>

                    <div className="col-md-12 content-page">
                        {this.state.resp.data.map((post) => {
                            return (
                                <BlogBox post={post} key={post.slug} />
                            )
                        })}

                        <br />

                        <div className="col-md-12 text-center">
                            {/* <a href="javascript:void(0)" id="load-more-post" className="load-more-button">Load</a>
                            <div id="post-end-message"></div> */}
                            {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}
                            {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
                        </div>
                    </div>

                </div>
            );
        } else {
            return (
                <div className="row">
                    <div className="sub-title">
                        <h2>My Blog</h2>
                        <Link to='contact'><i className="icon-envelope"></i></Link>
                    </div>
                    <div className="col-md-12 content-page">
                        <Loader />
                    </div>
                </div>
            )
        }
    }
}

export default CategoryHome;