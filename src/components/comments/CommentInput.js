import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComment } from '../../actions/addComment'

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
                <form onSubmit={this.handleOnSubmit}>
                    <label>Enter Comment:</label>
                    <input 
                    type='text'
                    placeholder='Text'
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

export default connect(null, { addComment })(CommentInput)