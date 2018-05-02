import React, { Component } from 'react'
import Disqus from 'disqus-react';

class Comment extends Component {
    // handleNewComment(comment) {
    //     window.console.info(`New comment posted with id ${comment.id} and message: ${comment.text}`);
    // }

    render() {
        const disqusShortname = "DevBlog"
        const disqusConfig = {
            url: this.props.post.url,
            identifier: this.props.post.slug,
            title: this.props.post.title,
            // onNewComment: this.handleNewComment,
        }
        return (
            <div className="blog_comments">
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        )
    }
}

export default Comment