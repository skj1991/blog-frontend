import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPost } from '../../actions/addPost'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class PostInput extends Component {

    state = {
        title: '', 
        image: '', 
        content: ''}

    handleOnChange = event => {
        this.setState({
          [event.target.name] : event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addPost(this.state);
        this.setState({
            title: '', 
            image: '', 
            content: ''
        });
        this.props.history.push(`/posts`)
    }

    render(){
        return(
        <div>
            <Form onSubmit={this.handleOnSubmit}>
                <Form.Group controlId="postTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="title" placeholder="Enter title" value={this.state.title} name='title' onChange={this.handleOnChange}/>
                </Form.Group>

                <Form.Group controlId="postImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="Image" value={this.state.image} name='image' onChange={this.handleOnChange}/>
                </Form.Group>

                <Form.Group controlId="postContent">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={3} type='content'
                            placeholder='Content'
                            value={this.state.content}
                            name='content'
                            onChange={this.handleOnChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          {/* <form onSubmit={this.handleOnSubmit}>
            <label>Post Title:</label>
            <input 
            type='text'
            placeholder='Title'
            value={this.state.title}
            name='title'
            onChange={this.handleOnChange}
            />
            <label>Post Image:</label>
            <input 
            type='text'
            placeholder='Image URL'
            value={this.state.image}
            name='image'
            onChange={this.handleOnChange}
            />
            <label>Post Content:</label>
            <input 
            type='text'
            placeholder='Content'
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

export default connect(null, {addPost})(PostInput)

