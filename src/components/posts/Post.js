import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import CommentContainer from '../../containers/CommentContainer'
import { editPost } from '../../actions/editPost'
import { connect } from 'react-redux'
import PostEdit from '../posts/PostEdit'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Post = (props) => { 
    console.log(props)
    const post = props.posts[props.match.params.id - 1]
    //let post = props.posts.filter(post => post.id === props.match.params.id)[0]
    return(
        <div> 
            <Link to={`/posts/${post.id}/edit`}>
                <Button variant="primary">Edit Post</Button> 
            </Link> 
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={post ? post.image : null} />
                <Card.Body>
                    <Card.Title>Title: {post ? post.title : null}</Card.Title>
                    <Card.Text>
                        Content: {post ? post.content : null}
                    </Card.Text>
                    <CommentContainer post={post} />
                </Card.Body>
                
            </Card>  
               
           {/* {post ? post.title : null}
           <img src={post ? post.image : null} alt='Cannot Load!' width="500" height="600"/>
           {post ? post.content : null}
           <Link to={`/posts/${post.id}/edit`}>Edit</Link>
           <CommentContainer post={post} />
           <PostEdit post={post} /> */}
        </div>
       )
}

export default connect(null, {editPost})(Post)

