import React, { Component } from 'react'
import Disqus from 'disqus-react';

class Comment extends Component {

    render() {
        const disqusShortname = this.props.post.slug;
        const disqusConfig = {
            url: this.props.post.url,
            identifier: this.props.post.slug,
            title: this.props.post.title,
        };
        return (
            <div className="blog_comments">
                <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                    Comments
                </Disqus.CommentCount>
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        )
    }
}

export default Comment