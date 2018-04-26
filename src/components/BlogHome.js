import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import butter from '../utls/butter'
import Loader from './Loader'
import BlogBox from './BlogBox'

class BlogHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  fetchPosts(page) {
    butter.post.list({ page: page, page_size: 10 }).then((resp) => {
      this.setState({
        loaded: true,
        resp: resp.data
      })
    });
  }

  componentWillMount() {
    let page = this.props.match.params.page || 1;

    this.fetchPosts(page)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loaded: false });

    let page = nextProps.match.params.page || 1;

    this.fetchPosts(page)
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

export default BlogHome;