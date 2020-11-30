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
    
    return(
        <div> 
            {post ? (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={post ? post.image : null} />
                <Card.Body>
                    <Card.Title>Title: {post ? post.title : null}</Card.Title>
                    <Card.Text>
                        Content: {post ? post.content : null}
                    </Card.Text>
                    <CommentContainer post={post} />
                    <br></br>
                    <Link to={`/posts/${post.id}/edit`}>
                        <Button variant="primary">Edit Post</Button> 
                    </Link>
                </Card.Body> 
            </Card>
            ) : null}
        </div>
       )
}

export default connect(null, {editPost})(Post)

