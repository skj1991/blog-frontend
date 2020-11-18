import React from 'react';

const Posts = (props) => {
    
    return(
     <div>
        {props.posts.map(post => 
            <li key={post.id}> 
            {post.title},
            <img src={post.image} alt='unable to display'/>
            {post.content}
            </li>
            )}
     </div>
    )
}

export default Posts