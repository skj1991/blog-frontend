import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComment } from '../../actions/addComment'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CommentInput extends Component {
    state = {
        content: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addComment(this.state, this.props.post.id);
        this.setState({ 
            content: ''  
        });
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId="comment">
                        <Form.Label>Enter Comment</Form.Label>
                        <Form.Control type='text' placeholder='Enter Comment' value={this.state.content} name='content' onChange={this.handleOnChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                {/* <form onSubmit={this.handleOnSubmit}>
                    <label>Enter Comment:</label>
                    <input 
                    type='text'
                    placeholder='Text'
                    value={this.state.content}
                    name='content'
                    onChange={this.handleOnChange}
                    />
                    <input type='submit'/>
                </form> */}
            </div>
        )
    }
}


export default connect(null, { addComment })(CommentInput)