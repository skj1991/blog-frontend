import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editPost } from '../../actions/editPost'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class PostEdit extends Component {
    
    state = {
        title: this.props.post ? this.props.post.title : "", 
        image: this.props.post ? this.props.post.image : "", 
        content: this.props.post ? this.props.post.content : ""
    }

    handleOnChange = event => {
        this.setState({
          [event.target.name] : event.target.value
        })
    }
//this.props.history.push(route you want to visit)
    handleOnSubmit = event => {
        event.preventDefault();
        let postEdit = {...this.state, id: this.props.post.id}
        this.props.editPost(postEdit)
        this.setState({
            title: '', 
            image: '', 
            content: ''
        });
        this.props.history.push(`/posts/${this.props.post.id}`)
    }

    render(){
        //console.log(this.props)
        return(
        <div>
            <Form onSubmit={this.handleOnSubmit}>
                <Form.Group controlId="postEditTitle">
                    <Form.Label>Edit Title</Form.Label>
                    <Form.Control type="title" placeholder="Enter title" value={this.state.title} name='title' onChange={this.handleOnChange}/>
                </Form.Group>

                <Form.Group controlId="postEditImage">
                    <Form.Label>Edit Image</Form.Label>
                    <Form.Control type="text" placeholder="Image" value={this.state.image} name='image' onChange={this.handleOnChange}/>
                </Form.Group>

                <Form.Group controlId="postEditContent">
                    <Form.Label>Edit Content</Form.Label>
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
            <label>Edit Title:</label>
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

const mapStateToProps = (state, ownProps) => {

    return {
        post: state.posts.find((post) => post.id == ownProps.match.params.id)
    }
}

export default connect(mapStateToProps, {editPost})(PostEdit)

