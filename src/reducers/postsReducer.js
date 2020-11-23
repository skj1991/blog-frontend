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
            let posts =  state.posts.map(post => {
                if (post.id === action.payload.id){
                    return action.payload
                }else{
                    return post
                }
                })
            return{...state, posts: posts}

        case 'DELETE _COMMENT':
            let postTwo =  state.posts.map(post => {
                if (post.id === action.payload.id){
                    return action.payload
                }else{
                    return post
                }
                })
            return{...state, posts: postTwo}
        case 'EDIT_POST':
            let postEdit =  state.posts.map(post => {
                if (post.id === action.payload.id){
                    return action.payload
                }else{
                    return post
                }
                })
            return{...state, posts: postEdit}
        default:
            return state;
    }

}