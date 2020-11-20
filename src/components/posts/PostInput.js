import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPost } from '../../actions/addPost'

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
          <form onSubmit={this.handleOnSubmit}>
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
         </form>
        </div>
        )
    }
}

export default connect(null, {addPost})(PostInput)