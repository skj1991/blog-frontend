export default function postsReducer(state = {posts: []}, action){

    switch(action.type) {
        case 'FETCH_POSTS':
            return {
            ...state,
            posts: action.payload,
            }
        case 'ADD_POST':
            return{
                ...state,
                posts: [...state.posts, action.payload]
            }
        case 'ADD_COMMENT':
            return{
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.id){
                        return action.payload
                    }else{
                        return post
                    }
                })
            }
        default:
            return state;
    }

}