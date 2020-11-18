import React from 'react';
import PostContainer from './containers/PostContainer'

class App extends React.Component {

  render(){
    return (
      <div className="App">  
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