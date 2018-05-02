import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BlogBox extends Component {
    render() {
        // console.log('From BlogPost', this.props.post)
        const post = this.props.post
        return (
            <div className="col-md-12 blog-post" style={{ display: 'block' }}>
                <div className="post-title">
                    <Link to={`/post/${post.slug}`}>
                        <h1>{post.title}</h1>
                    </Link>
                </div>
                <div className="post-info">
                    <span>{Date(post.published).split(' ').slice(0, 4).join(' ')} / by <Link to="/about">{post.author.first_name} {post.author.last_name}</Link></span>
                </div>
                <div className="post-image margin-top-40 margin-bottom-40">
                    {post.featured_image && <img className="card-img-top" src={post.featured_image} aria-hidden alt="Card image cap" />}
                </div>
                <p>
                    {post.summary}
                </p>
                <Link to={`/post/${post.slug}`} className="button button-style button-anim fa fa-long-arrow-right">
                    <span>Read More</span>
                </Link>
            </div>
        )
    }
}

export default BlogBox