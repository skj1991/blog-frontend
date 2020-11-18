import React from 'react';


const Comments = (props) => {
    return(
        <div>
            {props.comments && props.comments.map(comment => 
                <li key={comment.id}>{comment.content}</li>    
            )}
        </div>
    )

}

export default Comments 