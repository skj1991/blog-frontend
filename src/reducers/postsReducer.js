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
            let postNew =  state.posts.map(post => {
                if (post.id === action.payload.id){
                    return action.payload
                }else{
                    return post
                }
                })
            return{...state, postNew: postNew}

        case 'DELETE _COMMENT':
            debugger;
            let postDelete =  state.posts.map(post => {
                if (post.id === action.payload.id){
                    return action.payload
                }else{
                    return post
                }
                })
            return{...state, postDelete: postDelete}
        case 'EDIT _COMMENT':
                debugger;
            let postEdit =  state.posts.map(post => {
                if (post.id === action.payload.id){
                    return action.payload
                }else{
                    return post
                }
                })
            return{...state, postEdit: postEdit}
        default:
            return state;
    }

}