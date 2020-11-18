import React from 'react';
import { Redirect } from 'react-router-dom'
import CommentContainer from '../../containers/CommentContainer'

const Post = (props) => { 
    const post = props.posts[props.match.params.id - 1]
    //let post = props.posts.filter(post => post.id === props.match.params.id)[0]
    return(
        <div>
           {post ? post.title : null}
           <img src={post ? post.image : null} alt='Cannot Load!' width="500" height="600"/>
           {post ? post.content : null}
           <CommentContainer post={post} />
        </div>
       )
}

export default Post