import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import butter from '../utls/butter'
import './style.css'

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
        <div class="BlogContent">
          <Helmet>
            <title>{post.seo_title}</title>
            <meta name="description" content={post.meta_description} />
            <meta name="og:image" content={post.featured_image} />
          </Helmet>

          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default BlogPost;