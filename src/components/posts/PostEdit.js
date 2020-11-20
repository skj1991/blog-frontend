import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editPost } from '../../actions/editPost'

class PostEdit extends Component {

    state = {
        title: '', 
        image: '', 
        content: ''
    }

    handleOnChange = event => {
        this.setState({
          [event.target.name] : event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        let post = {...this.state, id: this.props.post.id}
        this.props.editPost(post)
        this.setState({
            title: '', 
            image: '', 
            content: ''
        });
    }

    render(){
        return(
        <div>
          <form onSubmit={this.handleOnSubmit}>
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
         </form>
        </div>
        )
    }
}

export default connect(null, {editPost})(PostEdit)