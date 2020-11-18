import React from 'react';
import Post from './Post'
import { Route, Link } from 'react-router-dom'

const Posts = (props) => {
    
    return(
     <div>
        {props.posts.map(post => 
            <div key={post.id}> 
                 <Link to={`/posts/${post.id}`}>
                    {post.title}
                 </Link>
            </div>
            )}
     </div>
    )
}

export default Posts