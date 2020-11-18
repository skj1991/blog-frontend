import React, { Component } from 'react';
import PostInput from '../components/posts/PostInput'
import Posts from '../components/posts/Posts'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/fetchPosts'

class PostContainer extends Component {

    componentDidMount() {
        console.log(this.props)
        this.props.fetchPosts()
    }

    render(){
        return(
            <div>
                <PostInput /><br>
                </br>
                <Posts posts={this.props.posts}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
