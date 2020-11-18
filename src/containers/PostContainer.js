import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import PostInput from '../components/posts/PostInput'
import Posts from '../components/posts/Posts'
import Post from '../components/posts/Post'
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
                <Route path='/posts/new' component={PostInput} />
                <Route exact path='/posts/:id' render={(routerProps) => <Post {...routerProps} posts={this.props.posts} />} />
                <Route exact path='/posts' render={(routerProps) => <Posts {...routerProps} posts={this.props.posts} />} />
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
