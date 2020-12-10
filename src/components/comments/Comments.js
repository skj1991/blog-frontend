import React from 'react';
import { connect } from 'react-redux'
import{ deleteComment } from '../../actions/deleteComment'
import {Card, ListGroup, Button} from 'react-bootstrap'


const Comments = (props) => {
    console.log(props.comments)

    const handleDelete = (comment) => {
         props.deleteComment(comment.id, comment.post_id)
    }


    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Header>Comments</Card.Header>
                <ListGroup variant="flush">
                    {props.comments && props.comments.map(comment => 
                    <ListGroup.Item>
                        {comment.content}
                         <Button type="delete" onClick={() => handleDelete(comment)}>Delete</Button> 
                    </ListGroup.Item>
                    )}
                </ListGroup>
            </Card>
            {/* {props.comments && props.comments.map(comment => 
                <li key={comment.id}>
                    {comment.content}<br></br>
                    <button onClick={() => handleDelete(comment)}>Delete</button>
                </li>    
            )} */}
        </div>
    )

}


export default connect(null, { deleteComment })(Comments) 