import React from 'react';
import PostContainer from './containers/PostContainer'
import Homepage from './components/Homepage';
import { Route } from 'react-router-dom'
import PostEdit from './components/posts/PostEdit'

class App extends React.Component {

  render(){
    return (
      <div className="App"> 
        <Route exact path='/' component={Homepage} /> 
        {/* <Route exact path='/posts' component={PostContainer} /> 
        creating router files to handle! */}
        <PostContainer />
      </div>
    );
  }
}

export default App;

// Testing backend to ensure the information is being received correctly 
  // componentDidMount(){
  //    fetch('http://localhost:3000/api/v1/posts')
  //    .then(response => response.json())
  //    .then(data => console.log(data))
  // }