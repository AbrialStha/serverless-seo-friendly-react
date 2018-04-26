import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import butter from '../utls/butter'

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
          <div className="col-8">
            {this.state.resp.data.map((post) => {
              return (
                <div className="custom" key={post.slug}>
                  {post.featured_image && <img className="card-img-top" src={post.featured_image} alt="Card image cap" />}
                  {console.log(post)}
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to={`/post/${post.slug}`}>{post.title}</Link>
                    </h5>
                    <div className="mb-1 text-muted">
                      {Date(post.published).split(' ').slice(0, 4).join(' ')}
                    </div>
                    <p className="card-text">
                      {post.summary}
                    </p>
                    <Link to={`/post/${post.slug}`} className="btn btn-primary">Read More</Link>
                  </div>
                </div>
              )
            })}

            <br />

            <div>
              {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}

              {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
            </div>
          </div>
          <div className="col-3">
            something
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export default BlogHome;