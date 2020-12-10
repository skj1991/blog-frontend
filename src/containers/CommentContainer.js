import React, { Component } from 'react';
import CommentInput from '../components/comments/CommentInput'
import Comments from '../components/comments/Comments'


class CommentContainer extends Component {
    render(){
        return(
            <div>
                <CommentInput post={this.props.post}/>
                <Comments comments={this.props.post && this.props.post.comments} /> 
            </div>
        )
    }

}

export default CommentContainer 