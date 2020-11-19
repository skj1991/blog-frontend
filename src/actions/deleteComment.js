export const deleteComment  = (commentId, postId) => {
//debugger;
    return(dispatch) => { 
        fetch(`http://localhost:3000/api/v1/posts/${postId}/comments/${commentId}`,{
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(post => dispatch({ type: 'DELETE_COMMENT', payload: post}))  
    }
} 