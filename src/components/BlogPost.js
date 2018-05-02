import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import butter from '../utls/butter'
import { Link } from 'react-router-dom'
import Loader from './Loader'

class BlogPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    let slug = this.props.match.params.slug;

    butter.post.retrieve(slug).then((resp) => {
      this.setState({
        loaded: true,
        post: resp.data.data
      })
    });
  }

  render() {
    if (this.state.loaded) {
      const post = this.state.post;

      return (
        <div className="BlogContent">
          <Helmet>
            <title>{post.seo_title}</title>
            <meta name="description" content={post.meta_description} />
            <meta name="og:image" content={post.featured_image} />
          </Helmet>

          <div className="row">

            <div className="sub-title">
              <Link to="/" title="Go to Home Page"><h2>Back Home</h2></Link>
              <Link to="#" className="smoth-scroll"><i className="icon-bubbles"></i></Link>
            </div>


            <div className="col-md-12 content-page">
              <div className="col-md-12 blog-post" style={{ display: 'block' }}>
                {/* <!-- Post Headline Start --> */}
                <div className="post-title">
                  <h1>{post.title}</h1>
                </div>
                {/* <!-- Post Headline End --> */}

                {/* <!-- Post Detail Start --> */}
                <div className="post-info">
                  <span>{Date(post.published).split(' ').slice(0, 4).join(' ')} / by <Link to="about">{post.author.first_name} {post.author.last_name}</Link></span>
                </div>
                {/* <!-- Post Detail End --> */}
                <p dangerouslySetInnerHTML={{ __html: post.body }} />
              </div>
              {/* <!-- You May Also Like End --> */}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="sub-title">
            <Link to="/" title="Go to Home Page"><h2>Back Home</h2></Link>
            <Link to="#" className="smoth-scroll"><i className="icon-bubbles"></i></Link>
          </div>
          <div className="col-md-12 content-page">
            <Loader />
          </div>
        </div>
      );
    }
  }
}

export default BlogPost;