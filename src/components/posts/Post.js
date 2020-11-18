import React from 'react';

const Post = (props) => {
    console.log(props)

    const post = props.posts[props.match.params.id - 1]
    return(
        <div>
           {post ? post.title : null}
           <img src={post ? post.image : null} alt='Cannot Load!' width="500" height="600"/>
           {post ? post.content : null}
        </div>
       )
}

export default Post